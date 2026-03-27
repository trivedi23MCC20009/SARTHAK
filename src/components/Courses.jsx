import React from "react";

const Courses = () => (
  <section className="py-20 bg-white">
    <h2 className="text-4xl font-bold text-blue-900 mb-20 text-center">Our Courses</h2>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div className="bg-blue-50 border-4 border-blue-100 rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition">
        <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">IMU-CET Preparation</h3>
        <p className="text-gray-700 text-center">Complete IMU-CET preparation</p>
      </div>
      <div className="bg-emerald-50 border-4 border-emerald-100 rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition">
        <h3 className="text-2xl font-bold text-emerald-900 mb-4 text-center">Sponsorship Exam Training</h3>
        <p className="text-gray-700 text-center">Comprehensive sponsorship exam training</p>
      </div>
      <div className="bg-orange-50 border-4 border-orange-100 rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition">
        <h3 className="text-2xl font-bold text-orange-900 mb-4 text-center">Sponsorship Interview Coaching</h3>
        <p className="text-gray-700 text-center">Professional interview preparation</p>
      </div>
    </div>
  </section>
);

export default Courses;
