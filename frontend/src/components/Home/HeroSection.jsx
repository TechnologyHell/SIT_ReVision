const HeroSection = () => {
    return (
      <section className="text-[var(--text-hero1)] body-font bg-[var(--bg)]" data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
        <div className="lg:w-[80%] mx-auto flex px-5 pb-24 md:flex-row flex-col items-center">
          {/* Left Side - Image */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/camp1.jpg"
            />
          </div>
  
          {/* Right Side - Content */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[var(--text-hero1)]">
              Welcome to <br className="hidden lg:inline-block" />
              Siliguri Institute of Technology
            </h1>
            <p className="mb-8 leading-relaxed">
              Celebrating 25 years of academic excellence, Siliguri Institute of
              Technology (SIT) stands as a beacon of innovation and knowledge in
              North Bengal. Established in 1999, SIT has been shaping future
              leaders, engineers, and professionals under the esteemed Techno
              India Group.
              <br />
              Amidst lush tea gardens and the Sub-Himalayan foothills, SIT blends
              academic excellence with natural serenity. For 25 years, our
              state-of-the-art campus has fostered innovation, research, and
              holistic learning. Join us in this legacy of growth and success!
            </p>
  
            {/* Buttons */}
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Read More
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-blue-100 border-0 py-2 px-6 focus:outline-none hover:bg-blue-200 rounded text-lg">
                Admission
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  