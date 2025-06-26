import { Link } from "react-router-dom";
export default function Example() {
  return (
  <nav className="hidden lg:flex space-x-6 text-gray-700 font-medium">
            <Link to="/" className="hover:text-blue-500 transition">Home</Link>
            <Link to="#" className="hover:text-blue-500 transition">Doctors</Link>
            <Link to="#" className="hover:text-blue-500 transition">Services</Link>

            {/* Pages Dropdown */}
            <div className="relative group">
              <div className="flex items-center hover:text-blue-500 cursor-pointer transition">
                Pages
                <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06-.02L10 10.89l3.71-3.7a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01-.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <ul className="absolute left-0 w-40 bg-white shadow-lg mt-2 p-2 space-y-2 text-sm z-50
                             opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0
                             transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto">
                <li><Link to="#" className="block px-2 py-1 hover:text-blue-500">404 Error</Link></li>
                <li><Link to="/about" className="block px-2 py-1 hover:text-blue-500">About Us</Link></li>
              </ul>
            </div>

            {/* Blogs Dropdown */}
            <div className="relative group">
              <div className="flex items-center hover:text-blue-500 cursor-pointer transition">
                Blogs
                <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06-.02L10 10.89l3.71-3.7a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01-.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <ul className="absolute left-0 w-40 bg-white shadow-lg mt-2 p-2 space-y-2 text-sm z-50
                             opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0
                             transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto">
                <li><Link to="#" className="block px-2 py-1 hover:text-blue-500">Blog Details</Link></li>
              </ul>
            </div>

            <Link to="#" className="hover:text-blue-500 transition">Contact Us</Link>
          </nav>
  )};