import React from "react";

const Header = () => {
  return (
    <header className="shadow">
      {/* Topbar */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto flex justify-between items-center">
          {/* Top Links */}
          <ul className="flex space-x-6 text-sm text-gray-600">
            <li><a href="#" className="hover:text-blue-500">About</a></li>
            <li><a href="#" className="hover:text-blue-500">Doctors</a></li>
            <li><a href="#" className="hover:text-blue-500">Contact</a></li>
            <li><a href="#" className="hover:text-blue-500">FAQ</a></li>
          </ul>
          {/* Top Contact Info */}
          <ul className="flex space-x-4 text-sm text-gray-600">
            <li className="flex items-center">
              <i className="fas fa-phone mr-2 text-blue-500"></i>+880 1234 56789
            </li>
            <li className="flex items-center">
              <i className="fas fa-envelope mr-2 text-blue-500"></i>
              <a href="mailto:email@domain.com" className="hover:text-blue-500">
                email@domain.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Header Inner */}
      <div className="bg-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/img/logo.png" alt="Logo" className="h-10 mr-2" />
            <span className="text-2xl font-bold text-blue-500">Medi</span>
            <span className="text-2xl font-bold text-black">plus</span>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex space-x-6 text-gray-700">
            <a href="#" className="hover:text-blue-500">Home</a>
            <a href="#" className="hover:text-blue-500">Doctors</a>
            <a href="#" className="hover:text-blue-500">Services</a>
            <div className="relative group">
              <button className="hover:text-blue-500 flex items-center">
                Pages
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06-.02L10 10.89l3.71-3.7a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 p-2 space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-500">404 Error</a></li>
                <li><a href="#" className="hover:text-blue-500">About Us</a></li>
              </ul>
            </div>
            <div className="relative group">
              <button className="hover:text-blue-500 flex items-center">
                Blogs
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06-.02L10 10.89l3.71-3.7a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 p-2 space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-500">Blog Details</a></li>
              </ul>
            </div>
            <a href="#" className="hover:text-blue-500">Contact Us</a>
          </nav>

          {/* Book Appointment Button */}
          <div>
            <a
              href="#"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
