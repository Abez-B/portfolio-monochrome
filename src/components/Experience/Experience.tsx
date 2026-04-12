import React from 'react';

interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  description: string;
}

const experienceData: ExperienceItem[] = [
  {
    date: 'Dec 2023 - Present',
    title: 'Founder & Lead',
    company: 'FOSSGCEE (Free & Open Source Software Club)',
    description: 'Founded and managing the official FOSS club of GCE Erode. Leading a team of students to promote open-source culture through workshops, projects, and community building.'
  }
];

const educationData = [
    {
        date: '2022 - Present', // Assuming 2022 as start year for 3rd year in 2025
        title: 'B.Tech in Information Technology',
        company: 'Government College of Engineering, Erode (Anna University)',
        description: 'Currently in my 3rd year of a 4-year program, specializing in Artificial Intelligence. Preparing for placements in top companies like Google and Microsoft.'
    }
]

const Experience: React.FC = () => {
  return (
    <section id="experience" className="bg-gray-50 text-black dark:bg-black dark:text-white py-16 px-4" data-aos="fade-up">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Experience &amp; Education</h2>
        <div className={`grid gap-16 ${experienceData.length > 0 ? 'md:grid-cols-2' : 'md:grid-cols-1 max-w-xl mx-auto'}`}>
          {experienceData.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold mb-8">Professional Experience</h3>
              <div className="relative border-l-2 border-gray-700 dark:border-gray-700">
                {experienceData.map((item, index) => (
                  <div key={index} className="mb-8 ml-4 p-4 rounded-lg backdrop-blur-md bg-opacity-70 dark:bg-opacity-70">
                    <div className="absolute -left-1.5 w-3 h-3 bg-white dark:bg-black rounded-full"></div>
                    <p className="text-white dark:text-gray-700 text-sm mb-1">{item.date}</p>
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                    <p className="text-white dark:text-gray-800 mb-2">{item.company}</p>
                    <p className="text-white dark:text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div>
            <h3 className="text-2xl font-bold mb-8">Education</h3>
            <div className="relative border-l-2 border-gray-700 dark:border-gray-700">
              {educationData.map((item, index) => (
                <div key={index} className="mb-8 ml-4 p-4 rounded-lg backdrop-blur-md bg-opacity-70 dark:bg-opacity-70">
                  <div className="absolute -left-1.5 w-3 h-3 bg-white dark:bg-black rounded-full"></div>
                  <p className="text-white dark:text-gray-700 text-sm mb-1">{item.date}</p>
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                  <p className="text-white dark:text-gray-800 mb-2">{item.company}</p>
                  <p className="text-white dark:text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
