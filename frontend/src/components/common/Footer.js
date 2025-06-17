// Footer.js
import React from 'react';

const Footer = () => (
  <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl mr-2">NR</div>
            <span className="text-xl font-semibold">Narayan Educational Hub</span>
          </div>
          <p className="text-gray-400 mb-6">Empowering minds through quality education and innovative learning experiences.</p>
          <div className="flex space-x-4">
            {/* Social icons here, as in HTML */}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
