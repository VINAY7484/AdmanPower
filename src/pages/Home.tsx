import React from 'react'
import SliderSection from '../components/slider/SliderSection';
import Hero from '../components/Hero';
import AboutSection from '../components/about/AboutSection';
import Features from '../components/features/Features';
import Testimonials from '../components/testimonials/Testimonials';
import Vendors from '../components/vendors/Vendors';
import Contact from '../components/Contact';
// import ContactSection from '../components/ContactSection';
import FeaturedJobs from '../components/FeaturedJobs';

const Home = () => {
    return (
        <>
            <SliderSection />
            <div className="m-10">
                <FeaturedJobs />
            </div>
            <AboutSection />
            {/* <Hero /> */}
            {/* <Services /> */}
            <Features />
            <Testimonials />
            <Contact />
            <Vendors />
            {/* <ContactSection/> */}
            {/* <Footer /> */}
        </>
    )
}

export default Home
