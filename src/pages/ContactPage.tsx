import Contact from "../components/Contact"
import Features from "../components/features/Features"
import Testimonials from "../components/testimonials/Testimonials"
import Vendors from "../components/vendors/Vendors"

const ContactPage = () => {
  return (
    <section className="min-h-screen py-16 px-6">
      <div className=" mx-auto text-center">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Contact <span className="text-blue-600">Us</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          We provide end-to-end recruitment solutions to help you
          <span className="font-semibold text-gray-800"> find, hire, and retain </span>
          the right talent.
        </p>
 <Contact/>
 <Features />
            <Testimonials />
            {/* <Contact /> */}
            <Vendors />
      </div>
    </section>
  )
}

export default ContactPage
