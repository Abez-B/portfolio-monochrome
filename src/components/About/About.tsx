import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-900 text-white dark:bg-white dark:text-black py-16 px-4" data-aos="fade-up">
      <div className="max-w-4xl mx-auto text-center backdrop-blur-lg bg-opacity-70 dark:bg-opacity-70 rounded-lg p-8">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        
        <p className="text-white dark:text-gray-700 text-xl leading-relaxed mb-6 font-medium">
          I'm Bharath Kumar P., a 3rd-year B.Tech student at Government College of Engineering, Erode. I specialize in <span className="font-bold text-white dark:text-black">AI, cybersecurity, and blockchain</span>—building innovative solutions at the intersection of these technologies.
        </p>
        
        <p className="text-white dark:text-gray-700 text-lg leading-relaxed mb-6">
          From <strong>hackathons to bug bounties</strong>, I thrive in competitive environments. Currently targeting opportunities at <strong>Google and Microsoft</strong> while mastering React.js, Web3, and cloud deployment strategies.
        </p>
        
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-3 text-white dark:text-black">Network Security Focus</h3>
          <p className="text-white dark:text-gray-700 text-lg leading-relaxed">
            Building <strong>real-time network monitoring systems</strong>, intrusion detection tools, and ML-powered threat analysis. I believe robust security infrastructure is the foundation of scalable technology solutions.
          </p>
        </div>
        
        <p className="text-white dark:text-gray-700 text-lg leading-relaxed font-medium">
          <strong>My mission:</strong> Create technology that solves today's problems while anticipating tomorrow's challenges.
        </p>
      </div>
    </section>
  );
};

export default About;