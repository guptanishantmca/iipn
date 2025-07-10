// import React from "react";
// import Slider from "../components/Slider";
// import Fun from "../components/Fun";
// const Home = () => {
//   const funFacts = [
//     { target: 3468, label: "Hospital Rooms", iconClass: "icofont icofont-home" },
//     { target: 557, label: "Specialist Doctors", iconClass: "icofont icofont-user-alt-3" },
//     { target: 4379, label: "Happy Patients", iconClass: "icofont icofont-simple-smile" },
//     { target: 32, label: "Years of Experience", iconClass: "icofont icofont-table" },
//   ];
//   const teamMembers = [
//   {
//     name: "Full Name",
//     designation: "Designation",
//     image: "/images/slider.jpg",
//     delay: "0.1s",
//   },
//   {
//     name: "Full Name",
//     designation: "Designation",
//     image: "/images/slider.jpg",
//     delay: "0.3s",
//   },
//   {
//     name: "Full Name",
//     designation: "Designation",
//     image: "/images/slider.jpg",
//     delay: "0.5s",
//   },
//   {
//     name: "Full Name",
//     designation: "Designation",
//     image: "/images/slider.jpg",
//     delay: "0.7s",
//   },
// ];
//   return (
//     <div>
//       <div
//       className="relative bg-[#5189c9] pt-[12rem] pb-[9rem] mb-24 bg-no-repeat bg-bottom bg-cover"
      
//     >
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-10">
//           {/* Text Section */}
//           <div className="lg:w-1/2 text-center lg:text-left">
//             <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 animate-zoomIn">
//               We Help To Push Your Business To The Top Level
//             </h1>
//             <p className="text-white mb-8 animate-zoomIn">
//               Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet
//               dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam
//               sit justo amet ipsum vero ipsum clita lorem
//             </p>
//             <a
//               href="#"
//               className="inline-block border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition animate-slideInRight"
//             >
//               Learn More
//             </a>
//           </div>

//           {/* Image Section */}
//           <div className="lg:w-1/2 text-center">
             
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="w-full py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-10">
//           {/* Image Section */}
//           <div className="w-full lg:w-1/2 animate-zoomIn">
//             <img src="/img/about.png" alt="About" className="w-full h-auto" />
//           </div>

//           {/* Text Section */}
//           <div className="w-full lg:w-1/2 animate-fadeInUp">
//             <div className="inline-block border border-blue-600 text-blue-600 px-4 py-1 rounded-full mb-3 text-sm font-medium">
//               About Us
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Award Winning Consultancy Agency For Your Business
//             </h2>
//             <p className="text-gray-600 mb-6">
//               Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
//               sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et
//               lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
//               justo et tempor eirmod
//             </p>

//             {/* Service Boxes */}
//             <div className="space-y-6 mb-6">
//               {/* Business Planning */}
//               <div className="flex">
//                 <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full text-xl">
//                   <i className="fa fa-user-tie"></i>
//                 </div>
//                 <div className="ml-4">
//                   <h6 className="text-lg font-semibold">Business Planning</h6>
//                   <p className="text-gray-600 text-sm">
//                     Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos
//                     erat ipsum lorem et sit sed stet lorem sit clita duo
//                   </p>
//                 </div>
//               </div>

//               {/* Financial Analysis */}
//               <div className="flex">
//                 <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full text-xl">
//                   <i className="fa fa-chart-line"></i>
//                 </div>
//                 <div className="ml-4">
//                   <h6 className="text-lg font-semibold">Financial Analysis</h6>
//                   <p className="text-gray-600 text-sm">
//                     Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos
//                     erat ipsum lorem et sit sed stet lorem sit clita duo
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Read More Button */}
//             <a
//               href="#"
//               className="inline-block bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition"
//             >
//               Read More
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>

//      <div className="w-full py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Section Heading */}
//         <div className="text-center max-w-xl mx-auto mb-12 animate-fadeInUp">
//           <div className="inline-block border border-blue-600 text-blue-600 px-4 py-1 rounded-full mb-3 text-sm font-medium">
//             Our Team
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold">
//             Meet Our Team Members
//           </h2>
//         </div>

//         {/* Team Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {teamMembers.map((member, index) => (
//             <div
//               key={index}
//               className="text-center animate-fadeInUp"
//               style={{ animationDelay: member.delay }}
//             >
//               <h5 className="text-lg font-semibold">{member.name}</h5>
//               <p className="text-gray-500 mb-4">{member.designation}</p>
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-full rounded-full mb-4"
//               />
//               <div className="flex justify-center space-x-2">
//                 <a
//                   href="#"
//                   className="w-9 h-9 flex items-center justify-center text-blue-600 bg-white border border-gray-200 rounded-full hover:bg-blue-100 transition"
//                 >
//                   <i className="fab fa-facebook-f"></i>
//                 </a>
//                 <a
//                   href="#"
//                   className="w-9 h-9 flex items-center justify-center text-blue-600 bg-white border border-gray-200 rounded-full hover:bg-blue-100 transition"
//                 >
//                   <i className="fab fa-twitter"></i>
//                 </a>
//                 <a
//                   href="#"
//                   className="w-9 h-9 flex items-center justify-center text-blue-600 bg-white border border-gray-200 rounded-full hover:bg-blue-100 transition"
//                 >
//                   <i className="fab fa-linkedin-in"></i>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>

//     <Slider/>
//     <section className="schedule py-12 bg-gray-100">
//   <div className="container mx-auto px-4">
//     <div className="schedule-inner">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* Emergency Cases */}
//         <div className="bg-blue-500 single-schedule  shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
//           <div className="inner text-center">
//             <div className="icon text-white text-5xl mb-4">
//               <i className="fa fa-ambulance"></i>
//             </div>
//             <div className="single-content">
//               <span className="text-sm text-white">Lorem Amet</span>
//               <h4 className="text-xl font-semibold text-white mt-2">Emergency Cases</h4>
//               <p className="text-white mt-4">
//                 Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.
//               </p>
//               <a
//                 href="#"
//                 className="text-white font-medium mt-4 inline-block hover:text-blue-700 transition-colors"
//               >
//                 LEARN MORE <i className="fa fa-long-arrow-right ml-2"></i>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Doctors Timetable */}
//         <div className="single-schedule bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
//           <div className="inner text-center">
//             <div className="icon text-blue-500 text-5xl mb-4">
//               <i className="icofont-prescription"></i>
//             </div>
//             <div className="single-content">
//               <span className="text-sm text-gray-500">Fusce Porttitor</span>
//               <h4 className="text-xl font-semibold text-gray-800 mt-2">Doctors Timetable</h4>
//               <p className="text-gray-600 mt-4">
//                 Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.
//               </p>
//               <a
//                 href="#"
//                 className="text-blue-500 font-medium mt-4 inline-block hover:text-blue-700 transition-colors"
//               >
//                 LEARN MORE <i className="fa fa-long-arrow-right ml-2"></i>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Opening Hours */}
//         <div className="single-schedule bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
//           <div className="inner text-center">
//             <div className="icon text-blue-500 text-5xl mb-4">
//               <i className="icofont-ui-clock"></i>
//             </div>
//             <div className="single-content">
//               <span className="text-sm text-gray-500">Donec luctus</span>
//               <h4 className="text-xl font-semibold text-gray-800 mt-2">Opening Hours</h4>
//               <ul className="time-sidual mt-4 space-y-2">
//                 <li className="day flex justify-between text-gray-600">
//                   <span>Monday - Friday</span>
//                   <span>8.00-20.00</span>
//                 </li>
//                 <li className="day flex justify-between text-gray-600">
//                   <span>Saturday</span>
//                   <span>9.00-18.30</span>
//                 </li>
//                 <li className="day flex justify-between text-gray-600">
//                   <span>Monday - Thursday</span>
//                   <span>9.00-15.00</span>
//                 </li>
//               </ul>
//               <a
//                 href="#"
//                 className="text-blue-500 font-medium mt-4 inline-block hover:text-blue-700 transition-colors"
//               >
//                 LEARN MORE <i className="fa fa-long-arrow-right ml-2"></i>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

// <section class="Features section py-16 bg-gray-50">
//     <div class="container mx-auto px-4">
//         <div class="row text-center mb-12">
//             <div class="col w-full">
//                 <div class="section-title">
//                     <h2 class="text-3xl font-bold text-gray-800 mb-4">
//                         We Are Always Ready to Help You & Your Family
//                     </h2>
//                     <img src="img/section-img.png" alt="#" class="mx-auto mb-4"/>
//                     <p class="text-gray-600">
//                         Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts
//                     </p>
//                 </div>
//             </div>
//         </div>
//         <div class="row flex flex-wrap -mx-4">
//             {/* <!-- Start Single Feature --> */}
//             <div class="col w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
//                 <div class="single-feature bg-white p-6 shadow-lg rounded-lg text-center">
//                     <div class="single-icon text-blue-500 text-4xl mb-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m0-4h.01M3 21h18M4 10h16l-1.528 6.141a2 2 0 01-1.995 1.859H6.524a2 2 0 01-1.995-1.859L3 10z" />
//           </svg>
//                     </div>
//                     <h3 class="text-xl font-semibold text-gray-800 mb-3">
//                         Emergency Help
//                     </h3>
//                     <p class="text-gray-600">
//                         Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.
//                     </p>
//                 </div>
//             </div>
//             {/* <!-- End Single Feature -->

//             <!-- Start Single Feature --> */}
//             <div class="col w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
//                 <div class="single-feature bg-white p-6 shadow-lg rounded-lg text-center">
//                     <div class="single-icon text-green-500 text-4xl mb-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m0-4h.01M3 21h18M4 10h16l-1.528 6.141a2 2 0 01-1.995 1.859H6.524a2 2 0 01-1.995-1.859L3 10z" />
//           </svg>
//                     </div>
//                     <h3 class="text-xl font-semibold text-gray-800 mb-3">
//                         Enriched Pharmacy
//                     </h3>
//                     <p class="text-gray-600">
//                         Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.
//                     </p>
//                 </div>
//             </div>
//             {/* <!-- End Single Feature -->

//             <!-- Start Single Feature --> */}
//             <div class="col w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
//                 <div class="single-feature bg-white p-6 shadow-lg rounded-lg text-center">
//                     <div class="single-icon text-red-500 text-4xl mb-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m0-4h.01M3 21h18M4 10h16l-1.528 6.141a2 2 0 01-1.995 1.859H6.524a2 2 0 01-1.995-1.859L3 10z" />
//           </svg>
//                     </div>
//                     <h3 class="text-xl font-semibold text-gray-800 mb-3">
//                         Medical Treatment
//                     </h3>
//                     <p class="text-gray-600">
//                         Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.
//                     </p>
//                 </div>
//             </div>
//             {/* <!-- End Single Feature --> */}
//         </div>
//     </div>

//     <div id="fun-facts" class="fun-facts section bg-gray-800 bg-opacity-90 py-16 text-white">
//   <div class="container mx-auto">
//   <div className="bg-gray-800 bg-opacity-90 py-16 text-white">
//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//       {funFacts.map((fact, index) => (
//           <Fun
//             key={index}
//             target={fact.target}
//             label={fact.label}
//             iconClass={fact.iconClass}
//           />
//         ))}
//       </div>
//     </div>
//   </div>
// </div>


// </section>

 
//     </div>
  
//   )
// };

// export default Home;
import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      {/* Add more sections like About, Features, etc. */}
      <Footer />
    </>
  );
}
