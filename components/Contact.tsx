import React, { useState } from 'react';
import FadeIn from './ui/FadeIn';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

// In production (Vercel), the API route is relative: /api/contact
// In local dev, we hit the Express server at localhost:3001
const CONTACT_API_URL = import.meta.env.DEV
  ? 'http://localhost:3001/api/contact'
  : '/api/contact';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Could not connect to the server. Please email help@raizian.in directly.');
    }
  };

  const isLoading = status === 'loading';

  return (
    <section id="contact" className="py-24 bg-white mb-20 md:mb-0">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 text-black">Get in Touch</h2>
            <p className="text-black font-medium text-lg">
              Have a project in mind or just want to say hello? <br className="hidden md:block" />
              Or email directly at{' '}
              <a
                href="mailto:help@raizian.in"
                className="text-black font-bold uppercase underline decoration-4 decoration-accent hover:bg-accent transition-all"
              >
                help@raizian.in
              </a>
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          {status === 'success' ? (
            // ✅ Success State
            <div className="border-[3px] border-black shadow-brutal p-10 text-center bg-accent flex flex-col items-center gap-4">
              <svg className="w-16 h-16" fill="none" stroke="#000" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-3xl font-bold uppercase tracking-tighter text-black">Message Sent!</h3>
              <p className="text-black font-medium text-lg">Got it. I'll get back to you within 24–48 hours.<br />Check your inbox — a confirmation mail is on its way.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-4 px-8 py-3 bg-black text-white font-bold uppercase tracking-tight border-[3px] border-black shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
              >
                Send Another
              </button>
            </div>
          ) : (
            // 📬 Form State
            <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 border-[3px] border-black shadow-brutal relative">
              {/* Brutalist corner decorators */}
              <div className="hidden md:block absolute -top-4 -right-4 w-12 h-12 bg-accent border-[3px] border-black -z-10" />
              <div className="hidden md:block absolute -bottom-4 -left-4 w-12 h-12 bg-black -z-10" />

              {/* Error Banner */}
              {status === 'error' && (
                <div className="border-[3px] border-black bg-red-50 p-4 flex items-start gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5 text-red-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-red-700 font-bold text-sm">{errorMsg}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-base font-bold uppercase tracking-tight text-black">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={isLoading}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-none bg-white border-2 border-black font-medium text-black focus:border-accent focus:shadow-brutal-accent transition-all outline-none disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-base font-bold uppercase tracking-tight text-black">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={isLoading}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-none bg-white border-2 border-black font-medium text-black focus:border-accent focus:shadow-brutal-accent transition-all outline-none disabled:opacity-50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-base font-bold uppercase tracking-tight text-black">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  disabled={isLoading}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-none bg-white border-2 border-black font-medium text-black focus:border-accent focus:shadow-brutal-accent transition-all outline-none resize-none disabled:opacity-50"
                  placeholder="Tell me about your project..."
                />
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full md:w-auto px-12 py-5 bg-black text-white font-bold text-lg uppercase tracking-tight rounded-none border-[3px] border-black shadow-brutal hover:bg-accent hover:text-black hover:-translate-y-1 hover:shadow-brutal-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center gap-3"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;