import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Hero from '../components/Hero';

const HomePage = () => (
  <div className="bg-white min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-20">
      <Hero />

      {/* Full Content About Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50/50 to-purple-50">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent shadow-2xl mb-6 animate-gradient-x">
              About Jahaazibano
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-indigo-400 mx-auto rounded-full shadow-lg animate-glow"></div>
          </div>

          {/* 6 Full Content Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* 1. About Jahaazibano */}
            <div className="group bg-gradient-to-br from-indigo-100/90 to-blue-100/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-indigo-200 hover:shadow-[0_20px_40px_rgba(99,102,241,0.4)] hover:-translate-y-4 hover:scale-[1.02] hover:from-indigo-500/20 hover:to-blue-500/20 transition-all duration-700 cursor-pointer h-full animate-float hover:animate-none">
              <div className="text-3xl mb-6 text-indigo-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-bounce-slow">ℹ️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-indigo-700 to-blue-700 bg-clip-text text-transparent drop-shadow-lg animate-fade-in-up">About Jahaazibano</h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4 animate-fade-in-up delay-200">
                Jahaazibano is built to provide clarity and structure to students preparing for a career in the Merchant Navy. 
                We eliminate confusion around exam preparation, sponsorship processes, and career pathways through our systematic approach.
              </p>
            </div>

            {/* 2. Why Started */}
            <div className="group bg-gradient-to-br from-emerald-100/90 to-green-100/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-emerald-200 hover:shadow-[0_20px_40px_rgba(34,197,94,0.4)] hover:-translate-y-4 hover:scale-[1.02] hover:from-emerald-500/20 hover:to-green-500/20 transition-all duration-700 cursor-pointer h-full animate-float hover:animate-none">
              <div className="text-3xl mb-6 text-emerald-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-bounce-slow">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-emerald-700 to-green-700 bg-clip-text text-transparent drop-shadow-lg animate-fade-in-up">Why This Initiative Was Started</h3>
              <p className="text-base text-gray-700 leading-relaxed animate-fade-in-up delay-200">
                A large number of students enter this field without a clear understanding of the process. This often leads to wasted time, poor preparation, and uncertainty.
                <br/><strong className="text-emerald-600 block mt-2">Jahaazibano addresses this gap through a system that prioritizes clarity, discipline, and direction.</strong>
              </p>
            </div>

            {/* 3. Approach */}
            <div className="group bg-gradient-to-br from-blue-100/90 to-sky-100/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-blue-200 hover:shadow-[0_20px_40px_rgba(59,130,246,0.4)] hover:-translate-y-4 hover:scale-[1.02] hover:from-blue-500/20 hover:to-sky-500/20 transition-all duration-700 cursor-pointer h-full animate-float hover:animate-none">
              <div className="text-3xl mb-6 text-blue-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-bounce-slow">📈</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-700 to-sky-700 bg-clip-text text-transparent drop-shadow-lg animate-fade-in-up">How We Approach Preparation</h3>
              <p className="text-base text-gray-700 leading-relaxed animate-fade-in-up delay-200">
                Instead of fragmented learning, students follow a structured plan where each stage builds on the previous one.
                <br/><strong className="text-blue-600 block mt-2">The focus is not just on covering topics, but ensuring students understand how to apply what they learn effectively.</strong>
              </p>
            </div>

            {/* 4. Mentorship - Full */}
            <div className="group bg-gradient-to-br from-purple-100/90 to-violet-100/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-purple-200 hover:shadow-[0_20px_40px_rgba(147,51,234,0.4)] hover:-translate-y-4 hover:scale-[1.02] hover:from-purple-500/20 hover:to-violet-500/20 transition-all duration-700 cursor-pointer h-full animate-float hover:animate-none">
              <div className="text-3xl mb-6 text-purple-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-bounce-slow">👥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-purple-700 to-violet-700 bg-clip-text text-transparent drop-shadow-lg animate-fade-in-up">Focused Mentorship Model</h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4 animate-fade-in-up delay-200">
                We maintain a carefully structured batch size with a closely monitored mentor-to-student ratio, ensuring that each student receives consistent academic attention and guidance.
              </p>
              <p className="font-semibold text-purple-600 text-sm mb-4 animate-fade-in-up delay-400">
                This allows us to track progress individually and intervene early when required.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs bg-purple-50/50 p-3 rounded-2xl">
                <div className="font-semibold text-purple-700 text-center py-2 border-r border-purple-200">Daily Progress</div>
                <div className="font-semibold text-purple-700 text-center py-2">Early Support</div>
              </div>
            </div>

            {/* 5. Track Record - Full */}
            <div className="group bg-gradient-to-br from-orange-100/90 to-amber-100/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-orange-200 hover:shadow-[0_20px_40px_rgba(251,146,60,0.4)] hover:-translate-y-4 hover:scale-[1.02] hover:from-orange-500/20 hover:to-amber-500/20 transition-all duration-700 cursor-pointer h-full animate-float hover:animate-none">
              <div className="text-3xl mb-6 text-orange-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-bounce-slow">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent drop-shadow-lg animate-fade-in-up">Focused Mentorship Structure</h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4 animate-fade-in-up delay-200">
                To ensure every student is properly guided, we maintain a low mentor-to-student ratio, allowing for close academic supervision and timely support.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed animate-fade-in-up delay-400">
                This structure ensures:
              </p>
              <ul className="mt-2 space-y-2 text-sm list-disc list-inside text-orange-700 animate-fade-in-up delay-600">
                <li>Better understanding of concepts</li>
                <li>Faster doubt resolution</li>
                <li>Continuous performance improvement</li>
              </ul>
            </div>

            {/* 6. Future Ready */}
            <div className="group bg-gradient-to-br from-emerald-100/90 to-teal-100/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-emerald-200 hover:shadow-[0_20px_40px_rgba(16,185,129,0.4)] hover:-translate-y-4 hover:scale-[1.02] hover:from-emerald-500/20 hover:to-teal-500/20 transition-all duration-700 cursor-pointer h-full animate-float hover:animate-none">
              <div className="text-3xl mb-6 text-emerald-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-bounce-slow">🏆</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent drop-shadow-lg animate-fade-in-up">What We Aim to Build</h3>
              <p className="text-sm text-gray-700 mb-6 font-medium animate-fade-in-up delay-200">
                Our objective is to develop students who are academically prepared, professionally aware, and mentally ready for career demands:
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 p-4 bg-emerald-50/80 rounded-2xl hover:bg-emerald-100 shadow-sm hover:shadow-md transition-all animate-slide-in-right delay-100">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-600 font-bold text-lg">1</div>
                  <div>
                    <strong>Academically Prepared:</strong> IMU-CET & sponsorship exam ready with complete syllabus mastery
                  </div>
                </li>
                <li className="flex items-center gap-3 p-4 bg-blue-50/80 rounded-2xl hover:bg-blue-100 shadow-sm hover:shadow-md transition-all animate-slide-in-right delay-200">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-600 font-bold text-lg">2</div>
                  <div>
                    <strong>Professionally Aware:</strong> Complete understanding of Merchant Navy career paths & industry expectations
                  </div>
                </li>
                <li className="flex items-center gap-3 p-4 bg-purple-50/80 rounded-2xl hover:bg-purple-100 shadow-sm hover:shadow-md transition-all animate-slide-in-right delay-300">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-600 font-bold text-lg">3</div>
                  <div>
                    <strong>Mentally Ready:</strong> Prepared for rigorous training & unique lifestyle demands of sea career
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="/contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 via-pink-500 to-indigo-500 hover:from-rose-600 hover:via-pink-600 hover:to-indigo-600 text-white font-bold text-xl px-14 py-7 rounded-3xl shadow-2xl hover:shadow-[0_20px_40px_rgba(236,72,153,0.4)] hover:-translate-y-4 group relative overflow-hidden animate-glow-button">
              <span>Ready to Start? 🚀</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

    </main>
  </div>
);

export default HomePage;
