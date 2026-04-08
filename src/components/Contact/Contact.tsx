import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const CONTACT_EMAIL = 'bharathjp02@gmail.com';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Using environment variables for the EmailJS keys
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_NOTIFY || '';
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS environment variables are missing.');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        (result) => {
          console.log(result.text);
          setSubmitStatus('success');
          formRef.current?.reset();
        },
        (error) => {
          console.error(error.text);
          setSubmitStatus('error');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section
      id="contact"
      className="bg-gray-900 text-white dark:bg-white dark:text-black py-16 px-4"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-white dark:text-gray-700 text-lg">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Details Side */}
          <div className="space-y-8 bg-gray-800 dark:bg-gray-100 p-8 rounded-lg border border-gray-700 dark:border-gray-300">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="text-gray-400 dark:text-gray-600 mb-6">
                Fill out the form to send me an email directly, or reach out using any of the platforms below.
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400 dark:text-gray-500 uppercase tracking-wider font-semibold mb-1">Email</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-lg font-medium hover:text-gray-300 dark:hover:text-gray-600 transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              
              <div>
                <p className="text-sm text-gray-400 dark:text-gray-500 uppercase tracking-wider font-semibold mb-1">Discord</p>
                <a
                  href="https://discord.com/users/850035433030680576"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium hover:text-gray-300 dark:hover:text-gray-600 transition-colors"
                >
                  .abhrams
                </a>
              </div>
              
              <div>
                <p className="text-sm text-gray-400 dark:text-gray-500 uppercase tracking-wider font-semibold mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/916379478168"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium hover:text-gray-300 dark:hover:text-gray-600 transition-colors"
                >
                  +91 63794 78168
                </a>
              </div>
            </div>
          </div>

          {/* Email Form Side */}
          <div className="bg-gray-800 dark:bg-gray-100 p-8 rounded-lg border border-gray-700 dark:border-gray-300">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            {submitStatus === 'success' ? (
              <div className="bg-green-900/50 border border-green-500 text-green-200 p-4 rounded-md">
                <p className="font-bold">Message sent successfully!</p>
                <p className="text-sm mt-1">Thank you for reaching out. I'll get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-4 text-sm underline hover:text-white"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium mb-1">Your Name</label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    required
                    className="w-full bg-gray-900 dark:bg-white border border-gray-600 dark:border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 text-white dark:text-black"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium mb-1">Your Email</label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    required
                    className="w-full bg-gray-900 dark:bg-white border border-gray-600 dark:border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 text-white dark:text-black"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-gray-900 dark:bg-white border border-gray-600 dark:border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 text-white dark:text-black resize-none"
                    placeholder="Hello Bharath, I would like to talk about..."
                  ></textarea>
                </div>
                
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-sm">Failed to send message. Please check your network or try again later.</p>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black dark:bg-black dark:text-white font-bold py-3 px-4 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
