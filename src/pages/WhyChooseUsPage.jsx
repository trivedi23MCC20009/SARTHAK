import React from 'react';
import Navbar from '../components/Navbar';
import WhyChooseUs from '../components/WhyChooseUs';

const WhyChooseUsPage = () => (
  <div className="bg-white min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-20">
      <section className="py-20 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-black text-orange-900 mb-8 drop-shadow-2xl">Why Choose Us</h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-16 leading-relaxed">
            Clarity Before Commitment
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We believe that both students and parents should clearly understand the career path before making a decision.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">A Structured and Monitored Approach</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-16">
            Students are guided through a defined preparation system where progress is tracked consistently and improvements are addressed early.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-emerald-50 to-green-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-emerald-900 mb-12 text-center">Individual Attention Matters</h2>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            The limited batch size and focused mentoring structure ensure that students are not overlooked.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            Each student's progress is monitored closely, allowing for timely academic and personal guidance.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Transparent Guidance</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-16 text-center max-w-3xl mx-auto">
            We provide realistic advice based on student capability and readiness.
            There are no exaggerated claims — only clear, honest direction.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-50 to-sky-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Continuous Updates</h2>
          <p className="text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            Parents are kept informed about progress, performance, and overall readiness, ensuring complete transparency throughout the process.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">Our Focus Beyond Academics</h2>
          <p className="text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            In addition to preparation, emphasis is placed on discipline, responsibility, and long-term career understanding.
          </p>
        </div>
      </section>

      <WhyChooseUs />
    </main>
  </div>
);

export default WhyChooseUsPage;
