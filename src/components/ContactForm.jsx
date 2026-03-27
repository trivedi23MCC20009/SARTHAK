import React, { useState, useRef } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState('');
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const formData = new FormData(form.current);
      const response = await fetch('http://localhost:8000/contact', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus('Thank you! Email sent - we\'ll call back within 24 hours.');
        form.current.reset();
      } else {
        setStatus('Error: ' + result.message);
      }
    } catch (error) {
      setStatus('Network error. Check if backend is running on port 8000.');
      console.error('Contact error:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black bg-gradient-to-r from-gray-900 to-slate-800 bg-clip-text text-transparent mb-2">Get In Touch</h2>
        <p className="text-gray-600 text-lg">Fill the form and our team will call you back within 24 hours</p>
      </div>
      
      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            placeholder="Enter your email (optional)"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message (Optional)</label>
          <textarea
            name="message"
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-vertical"
            placeholder="Tell us more about your requirements..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === 'Sending...'}
          className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-2xl shadow-xl hover:shadow-emerald-500/50 hover:-translate-y-1 transition-all duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          📞 Get Free Consultation Call
        </button>

        {status && (
          <div className={`text-center py-3 px-4 rounded-2xl ${status.includes('Thank you') || status.includes('sent') ? 'bg-emerald-100 border-emerald-300 text-emerald-800' : 'bg-red-100 border-red-300 text-red-800' } border font-medium`}>
            {status}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;

