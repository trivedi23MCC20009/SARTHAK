import React from 'react';

const CoursesPage = () => (
  <>
    <section className="py-40 bg-gradient-to-br from-rose-50 via-pink-50 to-indigo-50 text-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-orange-200/30 via-pink-200/20 to-blue-200/30"></div>
      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        <div data-aos="fade-down" data-aos-delay="100" className="inline-block py-4 px-8 bg-gradient-to-r from-rose-400/30 to-pink-400/30 backdrop-blur-xl border border-rose-200 rounded-3xl mb-12 shadow-2xl animate-pulse">
          <span className="text-2xl font-black bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">LIMITED BATCH • 17 SEATS LEFT</span>
        </div>
        <div className="flex flex-col items-center gap-6 mb-12">
          <h1 data-aos="fade-up" data-aos-delay="200" className="text-7xl lg:text-8xl font-black bg-gradient-to-r from-rose-600 via-pink-600 to-orange-600 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
            Our Courses
          </h1>
          <p data-aos="fade-up" data-aos-delay="400" className="text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-light animate-pulse">Premium IMU-CET and Merchant Navy Sponsorship Programs</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
          <a data-aos="fade-up" data-aos-delay="600" href="/syllabus-IMU-CET.pdf" className="group bg-white/70 backdrop-blur-xl border border-pink-200 shadow-2xl rounded-3xl px-14 py-8 text-xl font-bold text-rose-700 hover:text-pink-700 hover:border-pink-300 hover:shadow-pink-200/50 hover:-translate-y-2 transition-all duration-500 relative after:absolute after:inset-0 after:bg-gradient-to-r after:from-rose-500/20 after:to-pink-500/20 after:rounded-3xl after:scale-0 after:hover:scale-100 after:transition-all after:duration-500 z-0" download>
            <span className="relative z-10">📚 Complete Syllabus</span>
          </a>
          <div className="text-xl md:text-2xl font-semibold text-gray-700 bg-white/90 backdrop-blur-xl rounded-3xl px-10 py-8 shadow-2xl border-2 border-rose-200/50 animate-bounce hover:animate-none hover:scale-105 transition-all">
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">🚀</span>
              <span className="font-black text-indigo-600 text-lg">1 on 1 Mock Interviews</span>
              <span className="text-3xl font-bold text-indigo-700">Personalized</span>
              <span className="text-sm font-medium text-indigo-600 uppercase tracking-wide">Live Sessions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-32 bg-gradient-to-b from-white to-orange-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="inline-block py-2 px-6 bg-gradient-to-r from-indigo-400/30 to-purple-400/30 backdrop-blur rounded-2xl border border-indigo-200 mb-6">
            <span className="text-lg font-bold text-indigo-700">2 Specialized Tracks</span>

          </span>
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 to-slate-700 bg-clip-text text-transparent drop-shadow-lg mb-4">Choose Your Path</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-l-8 border-emerald-500 rounded-2xl p-8 shadow-2xl hover:shadow-emerald-300/50 hover:-translate-y-3 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-20 h-20 bg-emerald-500 text-white rounded-2xl mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform">
                🚀
              </div>
<h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 text-center bg-gradient-to-r from-emerald-900 to-emerald-700 bg-clip-text drop-shadow-lg">
                Maritime Career Launchpad
                <span className="block text-lg md:text-xl font-bold text-gray-900 mt-1">(Full Program)</span>
              </h3>
              <div className="text-4xl lg:text-5xl font-black text-emerald-600 mb-8 text-center animate-pulse drop-shadow-md">Rs. 15,000</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white hover:shadow-md transition-all group-hover:translate-x-2">
                  <span className="w-6 h-6 bg-emerald-500 text-white rounded-lg flex items-center justify-center font-bold text-sm shadow">✓</span>
                  <span className="text-gray-800 font-medium">IMU-CET Preparation</span>
                </li>
                <li className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white hover:shadow-md transition-all group-hover:translate-x-2">
                  <span className="w-6 h-6 bg-emerald-500 text-white rounded-lg flex items-center justify-center font-bold text-sm shadow">✓</span>
                  <span className="text-gray-800 font-medium">Sponsorship Guidance</span>
                </li>
                <li className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white hover:shadow-md transition-all group-hover:translate-x-2">
                  <span className="w-6 h-6 bg-emerald-500 text-white rounded-lg flex items-center justify-center font-bold text-sm shadow">✓</span>
                  <span className="text-gray-800 font-medium">Sponsorship Exam Preparation</span>
                </li>
                <li className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white hover:shadow-md transition-all group-hover:translate-x-2">
                  <span className="w-6 h-6 bg-emerald-500 text-white rounded-lg flex items-center justify-center font-bold text-sm shadow">✓</span>
                  <span className="text-gray-800 font-medium">Interview Preparation</span>
                </li>
              </ul>
              <a href="https://wa.me/919956662110?text=Hi! I want to enroll in Full Package (Rs15000). Please share payment details." className="block w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold py-3 px-6 rounded-2xl text-xl text-center shadow-xl hover:shadow-emerald-400 hover:-translate-y-2 hover:from-emerald-600 hover:to-emerald-700 transition-all duration-400 relative overflow-hidden group-hover:bg-emerald-700" target="_blank" rel="noopener noreferrer">
                Enroll Now
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-l-8 border-purple-500 rounded-2xl p-8 shadow-2xl hover:shadow-purple-300/50 hover:-translate-y-3 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-20 h-20 bg-purple-500 text-white rounded-2xl mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform">
                🎤
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-4 text-center bg-gradient-to-r from-purple-900 to-purple-700 bg-clip-text drop-shadow-lg">Fast-Track Cadet Selection Program</h3>
              <div className="text-4xl lg:text-5xl font-black text-purple-600 mb-8 text-center animate-pulse drop-shadow-md">Rs. 7,000</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white hover:shadow-md transition-all group-hover:translate-x-2">
                  <span className="w-6 h-6 bg-purple-500 text-white rounded-lg flex items-center justify-center font-bold text-sm shadow">✓</span>
                  <span className="text-gray-800 font-medium">Interview Preparation</span>
                </li>
                <li className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white hover:shadow-md transition-all group-hover:translate-x-2">
                  <span className="w-6 h-6 bg-purple-500 text-white rounded-lg flex items-center justify-center font-bold text-sm shadow">✓</span>
                  <span className="text-gray-800 font-medium">Sponsorship Guidance</span>
                </li>
              </ul>
              <a href="https://wa.me/919956662110?text=Hi! I'm interested in Interview + Sponsorship package (Rs7000). Please send details." className="block w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold py-3 px-6 rounded-2xl text-xl text-center shadow-xl hover:shadow-purple-400 hover:-translate-y-2 hover:from-purple-600 hover:to-purple-700 transition-all duration-400 relative overflow-hidden group-hover:bg-purple-700" target="_blank" rel="noopener noreferrer">
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default CoursesPage;
