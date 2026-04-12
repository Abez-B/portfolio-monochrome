import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-50 text-black dark:bg-black dark:text-white py-16 px-4" data-aos="fade-up">
      <div className="max-w-4xl mx-auto text-center backdrop-blur-lg bg-opacity-70 dark:bg-opacity-70 rounded-lg p-8">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>

        <p className="text-gray-700 dark:text-gray-300 text-xl leading-relaxed mb-6 font-medium">
          I'm Bharath Kumar P., a 3rd-year B.Tech student at Government College of Engineering, Erode. I specialize in <span className="font-bold text-black dark:text-white">Linux systems administration, network infrastructure, and cybersecurity</span>—building secure and scalable solutions for modern infrastructure challenges.
        </p>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
          From <strong>dual-boot Linux configurations to network monitoring systems</strong>, I thrive in hands-on technical environments. Experienced with <strong>Arch Linux, Ubuntu, Zabbix</strong>, and infrastructure optimization techniques.
        </p>

        {/* FOSSGCEE highlight */}
        <div className="mb-6 border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900 shadow-sm">
          <h3 className="text-2xl font-semibold mb-3 text-black dark:text-white">🐧 Founder — FOSSGCEE</h3>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            I founded <strong>FOSSGCEE</strong>, the student-led Free and Open Source Software club at Government College of Engineering, Erode. The club fosters an open-source culture through workshops, Linux install fests, and collaborative contributions to real-world projects.{' '}
            <a
              href="https://fossgcee.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-300"
            >
              fossgcee.vercel.app →
            </a>
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-3 text-black dark:text-white">Systems &amp; Network Focus</h3>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Building <strong>real-time network monitoring systems</strong>, optimizing Linux servers, and implementing security best practices. I believe robust infrastructure is the foundation of reliable technology solutions.
          </p>
        </div>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-medium">
          <strong>My goal:</strong> Design and maintain secure, efficient network infrastructure that powers tomorrow&apos;s technology.
        </p>
      </div>
    </section>
  );
};

export default About;