import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiDollarSign, FiBriefcase, FiClock } from 'react-icons/fi'

const jobCategories = ['All', 'Technology', 'Marketing', 'Finance', 'Design', 'Healthcare']

const featuredJobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120K - $150K',
    category: 'Technology',
    logo: 'https://images.pexels.com/photos/15335647/pexels-photo-15335647/free-photo-of-letter-t-logo.jpeg?auto=compress&cs=tinysrgb&w=300',
    posted: '2 days ago'
  },
  {
    id: 2,
    title: 'Product Marketing Manager',
    company: 'GrowthLabs',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$90K - $120K',
    category: 'Marketing',
    logo: 'https://images.pexels.com/photos/15198358/pexels-photo-15198358/free-photo-of-g-letter-sign.jpeg?auto=compress&cs=tinysrgb&w=300',
    posted: '3 days ago'
  },
  {
    id: 3,
    title: 'UX/UI Designer',
    company: 'DesignMasters',
    location: 'Remote',
    type: 'Contract',
    salary: '$80K - $100K',
    category: 'Design',
    logo: 'https://images.pexels.com/photos/15335618/pexels-photo-15335618/free-photo-of-letter-d-sign.jpeg?auto=compress&cs=tinysrgb&w=300',
    posted: '1 week ago'
  },
  {
    id: 4,
    title: 'Financial Analyst',
    company: 'CapitalGroup',
    location: 'Chicago, IL',
    type: 'Full-time',
    salary: '$85K - $95K',
    category: 'Finance',
    logo: 'https://images.pexels.com/photos/15335973/pexels-photo-15335973/free-photo-of-letter-c-sign.jpeg?auto=compress&cs=tinysrgb&w=300',
    posted: '5 days ago'
  }
]

const JobCard = ({ job }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -6 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white/70 backdrop-blur-xl shadow-md hover:shadow-2xl"
    >
      {/* Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100/40 via-transparent to-purple-100/40 opacity-0 hover:opacity-100 transition-opacity" />

      {/* Category Badge */}
      <span className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-primary-600 text-white shadow">
        {job.category}
      </span>

      <div className="relative p-6 flex gap-4">
        {/* Logo */}
        <img
          src={job.logo}
          alt={job.company}
          className="w-14 h-14 rounded-xl object-cover ring-2 ring-primary-100"
        />

        <div className="flex-1">
          <h3 className="text-lg font-bold text-neutral-900">
            {job.title}
          </h3>
          <p className="text-sm text-neutral-500 mb-3">
            {job.company}
          </p>

          <div className="grid grid-cols-2 gap-y-2 text-sm text-neutral-600">
            <div className="flex items-center gap-1">
              <FiMapPin /> {job.location}
            </div>
            <div className="flex items-center gap-1">
              <FiBriefcase /> {job.type}
            </div>
            <div className="flex items-center gap-1 font-semibold text-primary-600">
              <FiDollarSign /> {job.salary}
            </div>
            <div className="flex items-center gap-1">
              <FiClock /> {job.posted}
            </div>
          </div>

          <div className="mt-5 flex justify-between items-center">
            <span className="text-xs text-neutral-400">
              Actively hiring
            </span>

            <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 text-white text-sm font-medium hover:opacity-90 transition">
              View Details →
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}


const FeaturedJobs = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  
  const filteredJobs = activeCategory === 'All' 
    ? featuredJobs 
    : featuredJobs.filter(job => job.category === activeCategory)

  return (
    <section id="jobs" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Job Opportunities
          </motion.h2>
          <motion.p 
            className="text-neutral-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Discover your next career move with our carefully selected job listings from top employers
          </motion.p>
        </div>
        
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {jobCategories.map((category, idx) => (
            <motion.button
              key={idx}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 + idx * 0.05 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {filteredJobs.map((job, idx) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
            >
              <JobCard job={job} />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <motion.a 
            href="#" 
            className="btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            View All Jobs
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default FeaturedJobs