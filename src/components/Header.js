import { Link } from "react-router-dom";
import Menu from "../components/Menu";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow">


      {/* Topbar */}
      <div className="bg-gray-100 py-2 text-sm text-gray-600">
        <div className="container mx-auto flex justify-between items-center px-4">
          <ul className="flex space-x-6">
            <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
            <li><Link to="#" className="hover:text-blue-500">Doctors</Link></li>
            <li><Link to="#" className="hover:text-blue-500">Contact</Link></li>
            <li><Link to="#" className="hover:text-blue-500">FAQ</Link></li>
          </ul>
          <ul className="flex space-x-4">
            <li className="flex items-center">
              <i className="fas fa-phone mr-2 text-blue-500"></i>+91 94184 99433
            </li>
            <li className="flex items-center">
              <i className="fas fa-envelope mr-2 text-blue-500"></i>
              <a href="mailto:email@iipnsolutions.com" className="hover:text-blue-500">
                email@iipnsolutions.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            <span className="text-2xl font-bold text-blue-500">IIPN</span>
            <span className="text-2xl font-bold text-gray-800">Solutions</span>
          </div>

          {/* Navigation */}
          <Menu></Menu>
           

          {/* CTA Button */}
          <div>
            <Link
              to="#"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
