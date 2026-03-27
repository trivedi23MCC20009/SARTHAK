import React from "react";

const Footer = () => (
  <footer className="bg-sky-100/95 backdrop-blur shadow-md border-t border-sky-200 py-10 md:py-5">
    <div className="container mx-auto px-6 text-center">
      <p className="font-semibold text-sm text-sky-800">
        © {new Date().getFullYear()} Jahaazibano. All rights reserved.
      </p>
      <p className="text-xs text-sky-600 mt-1">
        Designed by Keshav Trivedi, keshavtrivedi761@gmail.com
      </p>
    </div>
  </footer>
);

export default Footer;

