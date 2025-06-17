import React, { useEffect } from 'react';
import '../style/navbar-compact.css';

const Navbar = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.ne-nav-link');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navbarLinks = document.getElementById('main-navbar');

    function resetMobileMenuIcon() {
      const icon = mobileMenuToggle.querySelector('.ne-mobile-menu-icon');
      icon.style.background = '#333';
      const before = document.createElement('style');
      before.textContent = '.ne-mobile-menu-icon::before { transform: translateY(-8px); }';
      document.head.appendChild(before);
      const after = document.createElement('style');
      after.textContent = '.ne-mobile-menu-icon::after { transform: translateY(8px); }';
      document.head.appendChild(after);
    }

    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        navLinks.forEach(item => {
          item.classList.remove('active');
          item.querySelector('.ne-nav-indicator').classList.remove('show');
        });
        this.classList.add('active');
        this.querySelector('.ne-nav-indicator').classList.add('show');
        if (window.innerWidth <= 768) {
          navbarLinks.classList.remove('show');
          resetMobileMenuIcon();
        }
      });
    });

    mobileMenuToggle.addEventListener('click', function() {
      navbarLinks.classList.toggle('show');
      const icon = this.querySelector('.ne-mobile-menu-icon');
      if (navbarLinks.classList.contains('show')) {
        icon.style.background = 'transparent';
        const before = document.createElement('style');
        before.textContent = '.ne-mobile-menu-icon::before { transform: translateY(0) rotate(45deg); }';
        document.head.appendChild(before);
        const after = document.createElement('style');
        after.textContent = '.ne-mobile-menu-icon::after { transform: translateY(0) rotate(-45deg); }';
        document.head.appendChild(after);
      } else {
        resetMobileMenuIcon();
      }
    });

    window.addEventListener('resize', function() {
      if (window.innerWidth > 768 && navbarLinks.classList.contains('show')) {
        navbarLinks.classList.remove('show');
        resetMobileMenuIcon();
      }
    });

    document.querySelector('.ne-btn-signin').addEventListener('click', function() {
      alert('Sign In functionality would go here');
    });
    document.querySelector('.ne-btn-signup').addEventListener('click', function() {
      alert('Sign Up functionality would go here');
    });

    // Cleanup listeners on unmount
    return () => {};
  }, []);

  return (
    <nav className="ne-navbar">
      <div className="ne-navbar-container">
        <div className="ne-navbar-brand">
          <div className="logo-circle-navbar">
            <div className="logo-background-navbar"></div>
            <div className="logo-inner-navbar">
              <div className="logo-text-container-navbar">
                <div className="logo-text-navbar">NR</div>
                <div className="logo-text-overlay-navbar">NR</div>
              </div>
            </div>
          </div>
          <span className="ne-navbar-title">
            <span className="narayan-text">Narayan</span>
            <span className="educational-text">Educational</span>
            <span className="hub-text">Hub</span>
          </span>
        </div>
        <button className="ne-mobile-menu-btn" id="mobile-menu-toggle" type="button">
          <div className="ne-mobile-menu-icon"></div>
        </button>
        <div className="ne-navbar-links" id="main-navbar">
          <a href="#" className="ne-nav-link active" data-nav="home">
            Home
            <span className="ne-nav-indicator show"></span>
          </a>
          <a href="#" className="ne-nav-link" data-nav="courses">
            Courses
            <span className="ne-nav-indicator"></span>
          </a>
          <a href="#" className="ne-nav-link" data-nav="study">
            Study
            <span className="ne-nav-indicator"></span>
          </a>
          <a href="#" className="ne-nav-link" data-nav="study-material">
            Study Material
            <span className="ne-nav-indicator"></span>
          </a>
          <a href="#" className="ne-nav-link" data-nav="store">
            Store
            <span className="ne-nav-indicator"></span>
          </a>
          <a href="#" className="ne-nav-link" data-nav="contact">
            Contact
            <span className="ne-nav-indicator"></span>
          </a>
          <a href="#" className="ne-nav-link" data-nav="about">
            About Us
            <span className="ne-nav-indicator"></span>
          </a>
        </div>
        <div className="ne-navbar-actions">
          <button className="ne-btn ne-btn-signin" type="button"><span>Sign In</span></button>
          <button className="ne-btn ne-btn-signup" type="button"><span>Sign Up</span></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
