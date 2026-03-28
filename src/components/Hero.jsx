import React from "react";

const Hero = () => (
  <section
id="home"
    className="relative min-h-[70vh] sm:min-h-screen flex flex-col justify-center items-center pt-20 md:pt-28 pb-12 px-2 text-center overflow-hidden bg-[url('/ship.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
    {/* Main overlay only */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-blue-900/40 to-black/70"></div>

    <div className="relative z-10 max-w-5xl px-4 w-full">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-white drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)] leading-tight bg-gradient-to-r from-white via-blue-100/80 to-white bg-clip-text text-transparent animate-hero-glow z-20 relative">
        Start Your Merchant Navy Journey with <span className="block text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text drop-shadow-2xl animate-shimmer">Clear Direction</span>
      </h1>
      
     
      
      <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] mb-10 max-w-4xl mx-auto font-medium leading-relaxed z-20 relative">
        Jahaazibano is designed for students who want structured preparation, consistent guidance, and a clear understanding of how to move from entrance exams to final selection.
      </p>
      
      {/* CTA Button */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 opacity-75 cursor-not-allowed select-none pointer-events-none text-blue-900 font-black text-xl px-16 py-7 rounded-3xl shadow-2xl transition-all duration-500 animate-pulse">
          <span>🚀 Secure Your Seat Now</span>
        </div>

        <a 
          href="https://wa.me/919956662110?text=Hi! I'd like to book a free consultation for IMU-CET and Sponsorship courses at Jahaazibano. Please share details and availability."
          className="bg-white/30 backdrop-blur-xl hover:bg-white/50 text-blue-900 font-bold text-xl px-12 py-6 rounded-3xl border-2 border-white/50 hover:border-emerald-400 hover:shadow-emerald-500/50 hover:-translate-y-3 group transition-all duration-500 relative overflow-hidden"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 rounded-3xl blur group-hover:animate-ping"></div>
          <span className="relative z-10">💬 Book Free Consultation</span>
        </a>
      </div>
    </div>
  </section>
);

export default Hero;

