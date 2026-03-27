import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContactPage = () => (
  <div className="bg-white min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-20">
      <section className="py-20 bg-gradient-to-r from-blue-50 to-sky-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-black text-blue-900 mb-8 drop-shadow-2xl">Begin with the Right Guidance</h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-16 leading-relaxed">
            If you are considering a career in the Merchant Navy, the first step is understanding the path clearly.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-12 border-4 border-orange-200 shadow-2xl text-center mb-20">
            <h2 className="text-3xl font-black text-red-900 mb-6">Seat Availability for Current Batch</h2>
            <p className="text-xl text-gray-700 mb-8">To maintain quality, each batch is limited.</p>
            <div className="text-2xl font-bold text-gray-800 mb-4">[17 out of 40 seats available]</div>
            <p className="text-lg text-red-700 font-semibold">Admissions are closed once capacity is reached.</p>
          </div>
        </div>
      </section>

      <Contact />


 
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Next Steps</h2>
        <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Once you connect with us, we will help you understand:
        </p>
        <ul className="grid md:grid-cols-1 gap-4 text-lg text-gray-700 max-w-2xl mx-auto mt-8">
          <li className="flex items-start gap-4 p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-400">
            <span className="text-2xl font-black text-blue-500 mt-1 min-w-[1.5rem]">•</span>
            <span>Your eligibility</span>
          </li>
          <li className="flex items-start gap-4 p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-400">
            <span className="text-2xl font-black text-blue-500 mt-1 min-w-[1.5rem]">•</span>
            <span>The preparation process</span>
          </li>
          <li className="flex items-start gap-4 p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-400">
            <span className="text-2xl font-black text-blue-500 mt-1 min-w-[1.5rem]">•</span>
            <span>What you should do next</span>
          </li>
        </ul>
      </div>
    </main>
  </div>
);

export default ContactPage;
