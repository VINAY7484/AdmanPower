import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { BsArrowRight } from 'react-icons/bs'
import image1 from '../assets/image/image1.jpg'
import image2 from '../assets/image/image2.jpg'
import image3 from '../assets/image/image3.jpg'

const slides = [
  {
    title: 'Transform Your Business Operations',
    description: 'Streamline processes and boost efficiency with our expert solutions',
    image: image1,
    buttonText: 'Get Started',
  },
  {
    title: 'Expert Management Solutions',
    description: 'Unlock your business potential with our comprehensive management services',
    image: image2,
    buttonText: 'Learn More',
  },
  {
    title: 'Drive Growth and Innovation',
    description: 'Partner with us to achieve sustainable business growth',
    image: image3,
    buttonText: 'Contact Us',
  },
]

const SliderSection: React.FC = () => {
  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] lg:h-[600px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <div className="text-center text-white max-w-xl md:max-w-3xl">
                  <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                    {slide.title}
                  </h1>

                  <p className="text-sm sm:text-base md:text-xl mb-6 md:mb-8 text-neutral-200">
                    {slide.description}
                  </p>

                  <button className="w-full sm:w-auto mx-auto bg-blue-600 hover:bg-blue-700 transition text-white px-6 md:px-8 py-3 rounded-md flex items-center justify-center gap-2">
                    {slide.buttonText}
                    <BsArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SliderSection
