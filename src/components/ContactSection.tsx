import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiCheck } from 'react-icons/fi'

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState({
    isSubmitted: false,
    isError: false
  })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    type: 'employer' // or 'candidate'
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    // This is just a mockup for demonstration
    setTimeout(() => {
      setFormStatus({
        isSubmitted: true,
        isError: false
      })
    }, 1000)
  }
  
  return (
    <section id="contact" className="section-padding px-8 md:px-0 bg-white">
      <div className="container-custom ">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            className="text-neutral-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Have questions or ready to start working together? Reach out to our team and we'll get back to you promptly.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8">
          <motion.div 
            className="md:col-span-2 bg-primary-50 p-8 rounded-xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-neutral-700 font-medium">Email Us</h4>
                  <a href="mailto:info@talentrise.com" className="text-primary-600 hover:underline">
                    info@talentrise.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-neutral-700 font-medium">Call Us</h4>
                  <a href="tel:+15551234567" className="text-primary-600 hover:underline">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-neutral-700 font-medium">Visit Us</h4>
                  <address className="not-italic text-neutral-600">
                    1234 Recruitment Ave<br />
                    Suite 500<br />
                    San Francisco, CA 94107
                  </address>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-primary-600 text-white rounded-lg">
              <h4 className="font-medium mb-2">Office Hours</h4>
              <p className="text-primary-100">Monday - Friday: 9AM - 6PM<br />Saturday - Sunday: Closed</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:col-span-3 bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {formStatus.isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 rounded-full bg-success-100 text-success-500 flex items-center justify-center mb-6">
                  <FiCheck className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Thank You!</h3>
                <p className="text-neutral-600 mb-6">
                  Your message has been received. Our team will get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setFormStatus({ isSubmitted: false, isError: false })}
                  className="btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">Send Us a Message</h3>
                
                <div className="flex gap-4 mb-6">
                  <div className="flex-1">
                    <label className="inline-block text-neutral-700 font-medium mb-2">
                      I am a:
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="type"
                          value="employer"
                          checked={formData.type === 'employer'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        Employer
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="type"
                          value="candidate"
                          checked={formData.type === 'candidate'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        Candidate
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-neutral-700 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-neutral-700 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-neutral-700 font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-neutral-700 font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-neutral-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="input-field"
                    required
                  ></textarea>
                </div>
                
                <motion.button 
                  type="submit" 
                  className="btn-primary w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection