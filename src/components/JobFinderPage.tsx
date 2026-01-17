import React, { useState } from 'react';
import { Search, MapPin, Briefcase, DollarSign, Clock, Building2 } from 'lucide-react';

const JobFinderPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('all');

  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $160k',
      posted: '2 days ago',
      description: 'Looking for an experienced React developer to join our team.'
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      company: 'DesignHub',
      location: 'Remote',
      type: 'Full-time',
      salary: '$90k - $130k',
      posted: '1 week ago',
      description: 'Create beautiful and intuitive user experiences for our products.'
    },
    {
      id: 3,
      title: 'Backend Engineer',
      company: 'DataSystems Inc',
      location: 'New York, NY',
      type: 'Contract',
      salary: '$100k - $140k',
      posted: '3 days ago',
      description: 'Build scalable backend systems using Node.js and Python.'
    },
    {
      id: 4,
      title: 'Product Manager',
      company: 'InnovateLabs',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$110k - $150k',
      posted: '5 days ago',
      description: 'Lead product strategy and development for our flagship product.'
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      company: 'CloudWorks',
      location: 'Remote',
      type: 'Part-time',
      salary: '$95k - $125k',
      posted: '1 day ago',
      description: 'Manage cloud infrastructure and CI/CD pipelines.'
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = job.location.toLowerCase().includes(location.toLowerCase());
    const matchesType = jobType === 'all' || job.type.toLowerCase() === jobType.toLowerCase();
    
    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className="min-h-screen ">
      {/* Header */}
      {/* <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Find Your Dream Job</h1>
          <p className="text-gray-600 mt-1">Discover opportunities that match your skills</p>
        </div>
      </header> */}

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 ">
        <div className="bg-white rounded-lg shadow-md border p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Job title or company"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-6">
          <p className="text-gray-700 font-medium">
            {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'} found
          </p>
        </div>

        {/* Job Listings */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {filteredJobs.map(job => (
            <div key={job.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col border">
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
                <div className="flex items-center gap-2 mt-2 text-gray-600">
                  <Building2 size={16} />
                  <span>{job.company}</span>
                </div>
                
                <p className="mt-3 text-gray-700">{job.description}</p>
                
                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase size={16} />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign size={16} />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{job.posted}</span>
                  </div>
                </div>
              </div>
              
              <button className="mt-4 w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>
          ))}
          
          {filteredJobs.length === 0 && (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <p className="text-gray-600 text-lg">No jobs found matching your criteria.</p>
              <p className="text-gray-500 mt-2">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobFinderPage;