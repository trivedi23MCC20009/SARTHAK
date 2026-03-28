import React from "react";

const WhyChooseUs = () => (
  <section className="py-16 bg-yellow-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center border-t-4 border-yellow-400 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-yellow-400 rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Expert Mentors</h3>
          <p className="text-gray-700">Learn from experienced Merchant Navy professionals and subject experts.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center border-t-4 border-yellow-400 hover:shadow-xl transition-shadow">

          <div className="w-16 h-16 bg-yellow-400 rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Mock Interviews</h3>
          <p className="text-gray-700">We also provide 1 on 1 Mock Interview sessions.</p>

        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center border-t-4 border-yellow-400 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-yellow-400 rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Mock Tests & Practice</h3>
          <p className="text-gray-700">Regular mock tests and practice sessions to boost your confidence and readiness.</p>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
