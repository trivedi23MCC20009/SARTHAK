import React from "react";
import ContactForm from './ContactForm';

const Contact = () => (
  <section id="contact" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-blue-900 mb-4 drop-shadow-lg bg-gradient-to-r from-blue-900 to-sky-900 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-700 font-medium">Fill the form and our team will call you back within 24 hours</p>
      </div>
      <ContactForm />
    </div>
  </section>
);

export default Contact;

