import React, { useState, useRef } from 'react';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsSending(true);

    if (form.current) {
      const formData = new FormData(form.current);

      // Create request body
      const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        message: formData.get('message') as string,
      };

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok && result.success) {
          console.log('✅ Email sent successfully with auto-reply');
          setIsSending(false);
          setIsSent(true);

          // Reset form
          if (form.current) {
            form.current.reset();
          }

          // Reset success message after 5 seconds
          setTimeout(() => setIsSent(false), 5000);
        } else {
          throw new Error(result.error || 'Submission failed');
        }
      } catch (err) {
        console.error('❌ Email failed:', err);
        setIsSending(false);
        setError('Failed to send message. Please try again or contact me directly via email.');
      }
    }
  };

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

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-black dark:bg-white border border-gray-700 text-white dark:text-black placeholder-gray-400 dark:placeholder-gray-700 focus:outline-none focus:border-gray-500 dark:focus:border-gray-700 backdrop-blur-md bg-opacity-70 dark:bg-opacity-70"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md bg-black dark:bg-white border border-gray-700 text-white dark:text-black placeholder-gray-400 dark:placeholder-gray-700 focus:outline-none focus:border-gray-500 dark:focus:border-gray-700 backdrop-blur-md bg-opacity-70 dark:bg-opacity-70"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              className="w-full p-3 rounded-md bg-black dark:bg-white border border-gray-700 text-white dark:text-black placeholder-gray-400 dark:placeholder-gray-700 focus:outline-none focus:border-gray-500 dark:focus:border-gray-700 backdrop-blur-md bg-opacity-70 dark:bg-opacity-70"
              required
            ></textarea>
          </div>

          {/* Honeypot for spam protection */}
          <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

          {error && (
            <div className="bg-red-500 text-white p-3 rounded-md text-sm">
              {error}
            </div>
          )}

          {isSent && (
            <div className="bg-green-500 text-white p-3 rounded-md text-sm">
              ✓ Message sent successfully! Check your email for confirmation.
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gray-800 text-white dark:bg-gray-200 border border-gray-700 dark:border-gray-300 px-6 py-3 rounded-md text-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="mt-12">
          <p className="text-white dark:text-gray-700 text-lg mb-2">Or connect with me:</p>
          <p className="text-white dark:text-black text-xl font-semibold mb-4">
            Email:{' '}
            <a
              href="mailto:bharathjp02@gmail.com"
              className="text-white dark:text-gray-700 hover:text-gray-400 dark:hover:text-gray-900 transition-colors duration-300"
            >
              bharathjp02@gmail.com
            </a>
          </p>
          <a
            href="https://www.linkedin.com/in/bharath-kumarjp02"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white dark:text-gray-700 hover:text-gray-400 dark:hover:text-gray-900 transition-colors duration-300 text-lg"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
