import React from 'react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'
import Input from '../ui/Input'
import TextArea from '../ui/TextArea'

const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <form className="bg-white rounded-2xl shadow-xl p-8 space-y-6 border">
        <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
          Contact <span className="text-primary-600">Us</span>
        </h3>

        {/* Name */}
        <div className="grid grid-cols-12 items-center gap-4">
          <label className="col-span-3 text-sm font-semibold text-neutral-700">
            Name
          </label>
          <div className="col-span-9">
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full h-12 bg-neutral-50 border border-neutral-300 rounded-lg px-4 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="grid grid-cols-12 items-center gap-4">
          <label className="col-span-3 text-sm font-semibold text-neutral-700">
            Email
          </label>
          <div className="col-span-9">
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full h-12 bg-neutral-50 border border-neutral-300 rounded-lg px-4 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
              required
            />
          </div>
        </div>

        {/* Message */}
        <div className="grid grid-cols-12 items-start gap-4">
          <label className="col-span-3 text-sm font-semibold text-neutral-700 pt-3">
            Message
          </label>
          <div className="col-span-9">
            <TextArea
              id="message"
              rows={4}
              placeholder="Write your message..."
              className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-4 py-3 text-sm resize-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
              required
            />
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-end pt-4">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg">
              Send Message
            </Button>
          </motion.div>
        </div>
      </form>
    </motion.div>
  )
}

export default ContactForm
