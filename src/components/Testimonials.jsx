import React from "react";

const Testimonials = () => (
  <section id="testimonials" className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">What Our Students Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-blue-50 border border-blue-100 rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-6 flex items-center justify-center text-xl font-bold text-white">
            AS
          </div>
          <p className="text-gray-700 mb-6 italic font-medium text-lg">&ldquo;Jahaazibano helped me crack IMU-CET in my first attempt. The mentors are amazing!&rdquo;</p>
          <div className="font-bold text-blue-900 text-lg">Amit S.</div>
          <div className="text-sm text-gray-500">IMU-CET Student</div>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-6 flex items-center justify-center text-xl font-bold text-white">
            PR
          </div>
          <p className="text-gray-700 mb-6 italic font-medium text-lg">&ldquo;The mock tests and personal guidance made all the difference. Highly recommend!&rdquo;</p>
          <div className="font-bold text-blue-900 text-lg">Priya R.</div>
          <div className="text-sm text-gray-500">Sponsorship Student</div>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-6 flex items-center justify-center text-xl font-bold text-white">
            RK
          </div>
          <p className="text-gray-700 mb-6 italic font-medium text-lg">&ldquo;Best place for Merchant Navy exam prep. Supportive faculty and great resources.&rdquo;</p>
          <div className="font-bold text-blue-900 text-lg">Rahul K.</div>
          <div className="text-sm text-gray-500">IMU-CET Student</div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;

