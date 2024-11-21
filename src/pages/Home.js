import React from "react";
import Slider from "../components/Slider";
const Home = () => {
  return (
    <div>
    <Slider/>
    <section className="schedule py-12 bg-gray-100">
  <div className="container mx-auto px-4">
    <div className="schedule-inner">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Emergency Cases */}
        <div className="bg-blue-500 single-schedule  shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="inner text-center">
            <div className="icon text-white text-5xl mb-4">
              <i className="fa fa-ambulance"></i>
            </div>
            <div className="single-content">
              <span className="text-sm text-white">Lorem Amet</span>
              <h4 className="text-xl font-semibold text-white mt-2">Emergency Cases</h4>
              <p className="text-white mt-4">
                Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.
              </p>
              <a
                href="#"
                className="text-white font-medium mt-4 inline-block hover:text-blue-700 transition-colors"
              >
                LEARN MORE <i className="fa fa-long-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Doctors Timetable */}
        <div className="single-schedule bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="inner text-center">
            <div className="icon text-blue-500 text-5xl mb-4">
              <i className="icofont-prescription"></i>
            </div>
            <div className="single-content">
              <span className="text-sm text-gray-500">Fusce Porttitor</span>
              <h4 className="text-xl font-semibold text-gray-800 mt-2">Doctors Timetable</h4>
              <p className="text-gray-600 mt-4">
                Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.
              </p>
              <a
                href="#"
                className="text-blue-500 font-medium mt-4 inline-block hover:text-blue-700 transition-colors"
              >
                LEARN MORE <i className="fa fa-long-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="single-schedule bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="inner text-center">
            <div className="icon text-blue-500 text-5xl mb-4">
              <i className="icofont-ui-clock"></i>
            </div>
            <div className="single-content">
              <span className="text-sm text-gray-500">Donec luctus</span>
              <h4 className="text-xl font-semibold text-gray-800 mt-2">Opening Hours</h4>
              <ul className="time-sidual mt-4 space-y-2">
                <li className="day flex justify-between text-gray-600">
                  <span>Monday - Friday</span>
                  <span>8.00-20.00</span>
                </li>
                <li className="day flex justify-between text-gray-600">
                  <span>Saturday</span>
                  <span>9.00-18.30</span>
                </li>
                <li className="day flex justify-between text-gray-600">
                  <span>Monday - Thursday</span>
                  <span>9.00-15.00</span>
                </li>
              </ul>
              <a
                href="#"
                className="text-blue-500 font-medium mt-4 inline-block hover:text-blue-700 transition-colors"
              >
                LEARN MORE <i className="fa fa-long-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    <h1 className="text-center text-2xl mt-4">Welcome to the Home Page</h1>;
    </div>
  
  )
};

export default Home;
