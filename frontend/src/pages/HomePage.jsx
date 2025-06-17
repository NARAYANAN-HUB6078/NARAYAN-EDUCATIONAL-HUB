import React from "react";
import "../styles/homepage.css";

const HomePage = () => {
  return (
    <main>
      {/* About Section */}
      <section className="py-24 bg-gradient-to-r from-pink-50 to-blue-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-lg font-medium mb-3">About Us</span>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Institution</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-6 gradient-text">Our Mission</h3>
              <p className="text-gray-600 mb-8 text-lg">At Narayan Educational Hub, we are committed to providing quality education that empowers students to achieve their full potential. Our innovative teaching methods and comprehensive curriculum ensure that our students are well-prepared for the challenges of tomorrow.</p>
              <h3 className="text-3xl font-semibold text-gray-800 mb-6 gradient-text">Our Vision</h3>
              <p className="text-gray-600 text-lg">To be a leading educational institution that nurtures creative thinking, fosters academic excellence, and develops well-rounded individuals who contribute positively to society.</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="glass-card p-8 rounded-2xl hover-card">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mb-6">
                  {/* SVG icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="text-2xl font-semibold text-gray-800 mb-3">Quality Education</h4>
                <p className="text-gray-600">Providing top-notch educational resources and experienced faculty.</p>
              </div>
              <div className="glass-card p-8 rounded-2xl hover-card">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-semibold text-gray-800 mb-3">Innovation</h4>
                <p className="text-gray-600">Embracing new technologies and teaching methodologies.</p>
              </div>
              <div className="glass-card p-8 rounded-2xl hover-card">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-semibold text-gray-800 mb-3">Community</h4>
                <p className="text-gray-600">Building a supportive environment for students to thrive.</p>
              </div>
              <div className="glass-card p-8 rounded-2xl hover-card">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-2xl font-semibold text-gray-800 mb-3">Infrastructure</h4>
                <p className="text-gray-600">Modern facilities designed for optimal learning experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ...Team, Features, Contact, Footer sections (same as your HTML, converted to JSX)... */}
    </main>
  );
};

export default HomePage;
