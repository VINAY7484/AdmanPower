import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { BsArrowRight } from 'react-icons/bs';
import image1 from '../assets/image/image1.jpg'
import image2 from '../assets/image/image2.jpg'
import image3 from '../assets/image/image3.jpg'

const slides = [
  {
    title: "Transform Your Business Operations",
    description: "Streamline processes and boost efficiency with our expert solutions",
    image: image1,
    buttonText: "Get Started"
  },
  {
    title: "Expert Management Solutions",
    description: "Unlock your business potential with our comprehensive management services",
    image: image2,
    buttonText: "Learn More"
  },
  {
    title: "Drive Growth and Innovation",
    description: "Partner with us to achieve sustainable business growth",
    image: image3,
    buttonText: "Contact Us"
  }
];

const SliderSection: React.FC = () => {
  return (
    <div className="relative h-[600px]  w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className=" h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full ">
              <img
                src={slide.image}
                alt={slide.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl px-4">
                  <h1 className="text-5xl font-bold mb-6">{slide.title}</h1>
                  <p className="text-xl mb-8">{slide.description}</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md flex items-center mx-auto">
                    {slide.buttonText}
                    <BsArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderSection;