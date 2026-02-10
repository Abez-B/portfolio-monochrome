import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-900 text-white dark:bg-white dark:text-black py-16 px-4" data-aos="fade-up">
      <div className="max-w-4xl mx-auto text-center backdrop-blur-lg bg-opacity-70 dark:bg-opacity-70 rounded-lg p-8">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>

        <p className="text-white dark:text-gray-700 text-xl leading-relaxed mb-6 font-medium">
          I'm Bharath Kumar P., a 3rd-year B.Tech student at Government College of Engineering, Erode. I specialize in <span className="font-bold text-white dark:text-black">Linux systems administration, network infrastructure, and cybersecurity</span>—building secure and scalable solutions for modern infrastructure challenges.
        </p>

        <p className="text-white dark:text-gray-700 text-lg leading-relaxed mb-6">
          From <strong>dual-boot Linux configurations to network monitoring systems</strong>, I thrive in hands-on technical environments. Experienced with <strong>Arch Linux, Ubuntu, Zabbix</strong>, and infrastructure optimization techniques.
        </p>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-3 text-white dark:text-black">Systems & Network Focus</h3>
          <p className="text-white dark:text-gray-700 text-lg leading-relaxed">
            Building <strong>real-time network monitoring systems</strong>, optimizing Linux servers, and implementing security best practices. I believe robust infrastructure is the foundation of reliable technology solutions.
          </p>
        </div>

        <p className="text-white dark:text-gray-700 text-lg leading-relaxed font-medium">
          <strong>My goal:</strong> Design and maintain secure, efficient network infrastructure that powers tomorrow's technology.
        </p>
      </div>
    </section>
  );
};

export default About;