import React, { useState } from 'react';
import FadeIn from './ui/FadeIn';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
    alert("Thanks for reaching out! I'll get back to you shortly.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white mb-20 md:mb-0">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Get in Touch</h2>
            <p className="text-gray-500 text-lg">
              Have a project in mind or just want to say hello? <br className="hidden md:block" />
              Feel free to send me a message or email at <a href="mailto:help@raizian.in" className="text-black font-medium underline underline-offset-4 decoration-gray-300 hover:decoration-black transition-all">help@raizian.in</a>
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-900">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-black focus:border-transparent transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-900">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-black focus:border-transparent transition-all outline-none"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-900">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-black focus:border-transparent transition-all outline-none resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            
            <div className="pt-4">
              <button
                type="submit"
                className="w-full md:w-auto px-10 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-800 transform transition-all active:scale-95"
              >
                Send Message
              </button>
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;