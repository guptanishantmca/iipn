import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css"; // Import core styles
import "swiper/css/navigation"; // Import navigation styles
import "swiper/css/pagination"; // Import pagination styles

const Slider = () => {
  const slides = [
    {
      id: 1,
      backgroundImage: "images/slider.jpg",
      title: "We Provide Medical Services That You Can Trust!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam.",
      buttons: [
        { text: "Get Appointment", link: "#", primary: true },
        { text: "Learn More", link: "#", primary: false },
      ],
    },{
      id: 2,
      backgroundImage: "images/slider2.jpg",
      title: "2We Provide Medical Services That You Can Trust!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam.",
      buttons: [
        { text: "Get Appointment", link: "#", primary: true },
        { text: "Learn More", link: "#", primary: false },
      ],
    },
    // Add other slides here...
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop
      className="h-screen"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="h-screen bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          >
            <div className="container mx-auto px-4">
              <div className="text text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="mb-6 text-lg md:text-xl">{slide.description}</p>
                <div className="flex gap-4">
                  {slide.buttons.map((button, index) => (
                    <a
                      key={index}
                      href={button.link}
                      className={`btn ${
                        button.primary
                          ? "bg-blue-500 text-white"
                          : "bg-transparent border-2 border-blue-500 text-blue-500"
                      } px-6 py-3 rounded hover:bg-blue-600 hover:text-white`}
                    >
                      {button.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
