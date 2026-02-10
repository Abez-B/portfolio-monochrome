import React from 'react';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-gray-900 text-white dark:bg-white dark:text-black py-16 px-4"
      data-aos="fade-up"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
        <p className="text-white dark:text-gray-700 text-lg mb-8">
          Have a project in mind or just want to say hello? Feel free to reach out!
        </p>

        <div className="space-y-8">
          {/* Direct Email Button */}
          <a
            href="mailto:bharath.p_it27@gcee.ac.in?subject=Portfolio Contact&body=Hi Bharath,%0D%0A%0D%0A"
            className="inline-block bg-gray-800 text-white dark:bg-gray-200 dark:text-black border border-gray-700 dark:border-gray-300 px-8 py-4 rounded-md text-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors duration-300 font-semibold"
          >
            📧 Send Me an Email
          </a>

          <div className="mt-12">
            <p className="text-white dark:text-gray-700 text-lg mb-4">Or connect with me:</p>
            <div className="space-y-2 mb-4">
              <p className="text-white dark:text-black text-xl font-semibold">
                Discord:{' '}
                <a
                  href="https://discord.com/users/850035433030680576"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white dark:text-gray-700 hover:text-gray-400 dark:hover:text-gray-900 transition-colors duration-300"
                >
                  .abhrams
                </a>
              </p>
              <p className="text-white dark:text-black text-lg">
                College:{' '}
                <a
                  href="mailto:bharath.p_it27@gcee.ac.in"
                  className="text-white dark:text-gray-700 hover:text-gray-400 dark:hover:text-gray-900 transition-colors duration-300"
                >
                  bharath.p_it27@gcee.ac.in
                </a>
              </p>
            </div>
            <a
              href="https://wa.me/916379478168"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white dark:text-gray-700 hover:text-gray-400 dark:hover:text-gray-900 transition-colors duration-300 text-lg"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
