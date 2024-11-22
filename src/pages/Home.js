import React from "react";
import Slider from "../components/Slider";
import Fun from "../components/Fun";
const Home = () => {
  const funFacts = [
    { target: 3468, label: "Hospital Rooms", iconClass: "icofont icofont-home" },
    { target: 557, label: "Specialist Doctors", iconClass: "icofont icofont-user-alt-3" },
    { target: 4379, label: "Happy Patients", iconClass: "icofont icofont-simple-smile" },
    { target: 32, label: "Years of Experience", iconClass: "icofont icofont-table" },
  ];
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

<section class="Features section py-16 bg-gray-50">
    <div class="container mx-auto px-4">
        <div class="row text-center mb-12">
            <div class="col w-full">
                <div class="section-title">
                    <h2 class="text-3xl font-bold text-gray-800 mb-4">
                        We Are Always Ready to Help You & Your Family
                    </h2>
                    <img src="img/section-img.png" alt="#" class="mx-auto mb-4"/>
                    <p class="text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts
                    </p>
                </div>
            </div>
        </div>
        <div class="row flex flex-wrap -mx-4">
            {/* <!-- Start Single Feature --> */}
            <div class="col w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                <div class="single-feature bg-white p-6 shadow-lg rounded-lg text-center">
                    <div class="single-icon text-blue-500 text-4xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m0-4h.01M3 21h18M4 10h16l-1.528 6.141a2 2 0 01-1.995 1.859H6.524a2 2 0 01-1.995-1.859L3 10z" />
          </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-3">
                        Emergency Help
                    </h3>
                    <p class="text-gray-600">
                        Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.
                    </p>
                </div>
            </div>
            {/* <!-- End Single Feature -->

            <!-- Start Single Feature --> */}
            <div class="col w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                <div class="single-feature bg-white p-6 shadow-lg rounded-lg text-center">
                    <div class="single-icon text-green-500 text-4xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m0-4h.01M3 21h18M4 10h16l-1.528 6.141a2 2 0 01-1.995 1.859H6.524a2 2 0 01-1.995-1.859L3 10z" />
          </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-3">
                        Enriched Pharmacy
                    </h3>
                    <p class="text-gray-600">
                        Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.
                    </p>
                </div>
            </div>
            {/* <!-- End Single Feature -->

            <!-- Start Single Feature --> */}
            <div class="col w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                <div class="single-feature bg-white p-6 shadow-lg rounded-lg text-center">
                    <div class="single-icon text-red-500 text-4xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m0-4h.01M3 21h18M4 10h16l-1.528 6.141a2 2 0 01-1.995 1.859H6.524a2 2 0 01-1.995-1.859L3 10z" />
          </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-3">
                        Medical Treatment
                    </h3>
                    <p class="text-gray-600">
                        Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.
                    </p>
                </div>
            </div>
            {/* <!-- End Single Feature --> */}
        </div>
    </div>

    <div id="fun-facts" class="fun-facts section bg-gray-800 bg-opacity-90 py-16 text-white">
  <div class="container mx-auto">
  <div className="bg-gray-800 bg-opacity-90 py-16 text-white">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {funFacts.map((fact, index) => (
          <Fun
            key={index}
            target={fact.target}
            label={fact.label}
            iconClass={fact.iconClass}
          />
        ))}
      </div>
    </div>
  </div>
</div>


</section>

 
    </div>
  
  )
};

export default Home;
