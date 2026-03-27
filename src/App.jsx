import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import WhyChooseUsPage from "./pages/WhyChooseUsPage";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <Router>
      <div className="bg-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />

            <Route path="/contact" element={<ContactPage />} />
            <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </main>
        <div className="h-16 md:h-24 lg:h-32 bg-gradient-to-b from-white via-sky-50 to-sky-100"></div>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;

