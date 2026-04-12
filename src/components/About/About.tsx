import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-50 text-black dark:bg-black dark:text-white py-16 px-4" data-aos="fade-up">
      <div className="max-w-4xl mx-auto text-center backdrop-blur-lg bg-opacity-70 dark:bg-opacity-70 rounded-lg p-8">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>

        <p className="text-white dark:text-gray-700 text-xl leading-relaxed mb-6 font-medium">
          I'm Bharath Kumar P., a 3rd-year B.Tech student at Government College of Engineering, Erode. I specialize in <span className="font-bold text-white dark:text-black">Linux systems administration, network infrastructure, and cybersecurity</span>—building secure and scalable solutions for modern infrastructure challenges.
        </p>

        <p className="text-white dark:text-gray-700 text-lg leading-relaxed mb-6">
          From <strong>dual-boot Linux configurations to network monitoring systems</strong>, I thrive in hands-on technical environments. Experienced with <strong>Arch Linux, Ubuntu, Zabbix</strong>, and infrastructure optimization techniques.
        </p>

        {/* FOSSGCEE highlight */}
        <div className="mb-6 border border-gray-700 dark:border-gray-300 rounded-lg p-6 bg-gray-800 dark:bg-gray-100 bg-opacity-60 dark:bg-opacity-60">
          <h3 className="text-2xl font-semibold mb-3 text-white dark:text-black">🐧 Founder — FOSSGCEE</h3>
          <p className="text-white dark:text-gray-700 text-lg leading-relaxed">
            I founded <strong>FOSSGCEE</strong>, the student-led Free and Open Source Software club at Government College of Engineering, Erode. The club fosters an open-source culture through workshops, Linux install fests, and collaborative contributions to real-world projects.{' '}
            <a
              href="https://fossgcee.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-gray-300 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors duration-300"
            >
              fossgcee.vercel.app →
            </a>
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-3 text-white dark:text-black">Systems &amp; Network Focus</h3>
          <p className="text-white dark:text-gray-700 text-lg leading-relaxed">
            Building <strong>real-time network monitoring systems</strong>, optimizing Linux servers, and implementing security best practices. I believe robust infrastructure is the foundation of reliable technology solutions.
          </p>
        </div>

        <p className="text-white dark:text-gray-700 text-lg leading-relaxed font-medium">
          <strong>My goal:</strong> Design and maintain secure, efficient network infrastructure that powers tomorrow&apos;s technology.
        </p>
      </div>
    </section>
  );
};

export default About;