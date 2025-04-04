const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');
require('dotenv').config();

// Register User
const register = async (req, res) => {
  const { username, password, email, role } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    // Check if the user already exists
    const [results] = await db.query('SELECT * FROM Users WHERE username = ?', [username]);

    if (results.length > 0) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into database
    const query = 'INSERT INTO Users (username, password, email, role) VALUES (?, ?, ?, ?)';
    await db.query(query, [username, hashedPassword, email || null, role || 'admin']);

    return res.status(201).json({ message: 'User registered successfully' });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error registering user' });
  }
};

// Login User
const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    // Find user in the database
    const [results] = await db.query('SELECT * FROM Users WHERE username = ?', [username]);

    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const user = results[0];

    // Compare password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Create JWT token
    const token = jwt.sign(
      { user_id: user.user_id, username: user.username, role: user.role },
      process.env.JWT_SECRET, // Secret key from environment variables
    );

    return res.json({
      message: 'Login successful',
      token: token,
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error logging in' });
  }
};

// Controller to fetch total count
const fetchCounts = async (req, res) => {
  try {
    const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');  // Get current date in UTC format

    // Fetch the total count for ongoing events
    const [[{ total_ongoing }]] = await db.query(
      `SELECT COUNT(*) AS total_ongoing 
           FROM Events 
           WHERE event_date <= ? AND (event_date + INTERVAL duration MINUTE) >= ?`,
      [currentDate, currentDate]
    );

    // Fetch the total count for past events
    const [[{ total_past }]] = await db.query(
      `SELECT COUNT(*) AS total_past 
           FROM Events 
           WHERE event_date + INTERVAL duration MINUTE < ?`,
      [currentDate]
    );

    // Fetch the total count for upcoming events
    const [[{ total_upcoming }]] = await db.query(
      `SELECT COUNT(*) AS total_upcoming 
           FROM Events 
           WHERE event_date > ?`,
      [currentDate]
    );

    const [[{ total_news }]] = await db.query(
      `SELECT COUNT(*) AS total_news 
           FROM News`
    );

    const [[{ total_announcements }]] = await db.query(
      `SELECT COUNT(*) AS total_announcements 
           FROM Announcements`
    );
    const [[{ total_teachings }]] = await db.query(
      `SELECT COUNT(*) AS total_teachings 
           FROM Teaching_Staff`
    );
    const [[{ total_non_teachings }]] = await db.query(
      `SELECT COUNT(*) AS total_non_teachings 
           FROM Non_Teaching_Staff`
    );
    const [[{ total_new_contacts }]] = await db.query(
      `SELECT COUNT(*) AS total_new_contacts 
           FROM contact_us_form WHERE status = 'Unseen'`,
    );
    // Respond with the counts for ongoing, past, and upcoming events
    res.json({
      total_ongoing,
      total_past,
      total_upcoming,
      total_events: total_ongoing + total_past + total_upcoming,
      total_news,
      total_announcements,  
      total_teachings,
      total_non_teachings,
      total_new_contacts
    });
  } catch (error) {
    console.error('Error fetching event counts:', error);
    res.status(500).json({ message: 'Error fetching event counts', error: error.message });
  }
};

const searchItems = async (req, res) => {
  const query = req.query.q;  // Get the search query from the URL query parameters

  if (!query) {
    return res.status(400).send('Search query is required');
  }

  // Define individual queries for each type of content
  const eventQuery = `
    SELECT 
        event_id AS id, 
        event_name AS title, 
        description AS content, 
        'Event' AS type,
        image 
    FROM Events
    WHERE event_name LIKE ? OR description LIKE ?`;

  const newsQuery = `
    SELECT 
        news_id AS id, 
        title, 
        content, 
        'News' AS type,
        image 
    FROM News
    WHERE title LIKE ? OR content LIKE ?`;

  const announcementQuery = `
    SELECT 
        announcement_id AS id, 
        title, 
        content, 
        'Announcement' AS type,
        document AS image 
    FROM Announcements
    WHERE title LIKE ? OR content LIKE ?`;

  const teachingStaffQuery = `
    SELECT 
        id, 
        faculty_name AS title, 
        designation AS content, 
        'Teaching Staff' AS type,
        photo_url AS image 
    FROM Teaching_Staff
    WHERE faculty_name LIKE ? OR designation LIKE ?`;

  const nonTeachingStaffQuery = `
    SELECT 
        id, 
        staff_name AS title, 
        designation AS content, 
        'Non-Teaching Staff' AS type,
        NULL AS image  
    FROM Non_Teaching_Staff
    WHERE staff_name LIKE ? OR designation LIKE ?`;

  try {
    // Execute each query asynchronously using await
    const [events] = await db.query(eventQuery, [`%${query}%`, `%${query}%`]);
    const [news] = await db.query(newsQuery, [`%${query}%`, `%${query}%`]);
    const [announcements] = await db.query(announcementQuery, [`%${query}%`, `%${query}%`]);
    const [teachingStaff] = await db.query(teachingStaffQuery, [`%${query}%`, `%${query}%`]);
    const [nonTeachingStaff] = await db.query(nonTeachingStaffQuery, [`%${query}%`, `%${query}%`]);

    // Return the results grouped by type
    res.json({
      events,
      news,
      announcements,
      teachingStaff,
      nonTeachingStaff
    });

  } catch (err) {
    console.error('Error fetching search results:', err);
    res.status(500).send('Error fetching search results');
  }
};

module.exports = { register, login, fetchCounts,searchItems };
