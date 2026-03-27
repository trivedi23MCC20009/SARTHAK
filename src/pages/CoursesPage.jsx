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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="group bg-gradient-to-br from-blue-50/90 via-indigo-50/80 to-purple-50/70 backdrop-blur-lg border border-blue-200/70 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-blue-200 hover:border-blue-300/90 hover:-translate-y-4 hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative z-10 text-center">
              <div className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-3xl shadow-xl flex items-center justify-center border-4 border-blue-100/50 group-hover:border-blue-200/70 group-hover:shadow-blue-100/30 group-hover:scale-110 transition-all duration-500 font-bold text-2xl md:text-3xl">
                🚢
              </div>
              <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent drop-shadow-lg mb-6">
                IMU-CET
              </h3>
              <p className="text-xl text-gray-600 leading-tight font-medium">Gateway to Merchant Navy careers</p>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-orange-50/90 via-amber-50/80 to-rose-50/70 backdrop-blur-lg border border-orange-200/70 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-orange-200 hover:border-orange-300/90 hover:-translate-y-4 hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative z-10 text-center">
              <div className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-rose-500 text-white rounded-3xl shadow-xl flex items-center justify-center border-4 border-orange-100/50 group-hover:border-orange-200/70 group-hover:shadow-orange-100/30 group-hover:scale-110 transition-all duration-500 font-bold text-2xl md:text-3xl">
                🎤
              </div>
              <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-orange-800 to-rose-900 bg-clip-text text-transparent drop-shadow-lg mb-6">
                Interview Prep
              </h3>
              <p className="text-xl text-gray-600 leading-tight font-medium">Psych + Technical panels</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </>
);

export default CoursesPage;
