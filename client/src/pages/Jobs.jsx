import { useState } from 'react';
import { Search, Filter, MapPin, Clock, DollarSign, Building, ChevronRight, Star, Shield } from 'lucide-react';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  // Sample job data
  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechCorp Nigeria',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      salary: '₦800,000 - ₦1,200,000',
      category: 'Technology',
      posted: '2 days ago',
      verified: true,
      featured: true,
      description: 'Join our dynamic team building next-generation web applications using React and TypeScript.',
      requirements: ['React', 'TypeScript', 'Tailwind CSS', '2+ years experience']
    },
    {
      id: 2,
      title: 'Digital Marketing Manager',
      company: 'Growth Solutions Ltd',
      location: 'Abuja, Nigeria',
      type: 'Full-time',
      salary: '₦600,000 - ₦900,000',
      category: 'Marketing',
      posted: '1 week ago',
      verified: true,
      featured: false,
      description: 'Lead our digital marketing initiatives and drive brand growth across multiple channels.',
      requirements: ['SEO/SEM', 'Social Media', 'Analytics', '3+ years experience']
    },
    {
      id: 3,
      title: 'Sales Representative',
      company: 'Premium Industries',
      location: 'Port Harcourt, Nigeria',
      type: 'Full-time',
      salary: '₦400,000 - ₦600,000',
      category: 'Sales',
      posted: '3 days ago',
      verified: true,
      featured: false,
      description: 'Drive sales growth and build lasting relationships with clients in the oil and gas sector.',
      requirements: ['Sales Experience', 'Communication', 'CRM Software', '1+ years experience']
    },
    {
      id: 4,
      title: 'Data Analyst',
      company: 'InsightCorp',
      location: 'Lagos, Nigeria',
      type: 'Contract',
      salary: '₦500,000 - ₦750,000',
      category: 'Technology',
      posted: '5 days ago',
      verified: true,
      featured: true,
      description: 'Analyze complex datasets to drive business insights and strategic decision-making.',
      requirements: ['Python', 'SQL', 'Tableau', 'Statistics', '2+ years experience']
    },
    {
      id: 5,
      title: 'Content Writer',
      company: 'Creative Hub',
      location: 'Remote',
      type: 'Part-time',
      salary: '₦200,000 - ₦350,000',
      category: 'Creative',
      posted: '1 day ago',
      verified: true,
      featured: false,
      description: 'Create compelling content for various digital platforms and marketing campaigns.',
      requirements: ['Writing Skills', 'SEO', 'WordPress', 'Portfolio required']
    },
    {
      id: 6,
      title: 'Project Manager',
      company: 'BuildRight Construction',
      location: 'Kano, Nigeria',
      type: 'Full-time',
      salary: '₦700,000 - ₦1,000,000',
      category: 'Construction',
      posted: '4 days ago',
      verified: true,
      featured: false,
      description: 'Oversee construction projects from planning to completion, ensuring quality and timeline adherence.',
      requirements: ['PMP Certification', 'Construction Experience', 'Leadership', '5+ years experience']
    }
  ];

  const categories = ['All', 'Technology', 'Marketing', 'Sales', 'Creative', 'Construction'];
  const locations = ['All', 'Lagos', 'Abuja', 'Port Harcourt', 'Kano', 'Remote'];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
    const matchesLocation = selectedLocation === 'All' || job.location.includes(selectedLocation);
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-px h-full bg-white"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-white"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-white"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-white"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-black mb-4 uppercase tracking-wider">
            Job Listings
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Discover verified job opportunities from trusted employers across Nigeria
          </p>
          <div className="mt-4 flex justify-center items-center gap-4 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>{jobs.length} Verified Jobs</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              <span>{jobs.filter(job => job.featured).length} Featured</span>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
            <input
              type="text"
              placeholder="Search jobs, companies, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/10 border-2 border-white/20 text-white placeholder-white/50 px-12 py-4 text-lg focus:outline-none focus:border-white transition-colors duration-300"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-white/70" />
              <span className="text-white/70 font-bold">FILTERS:</span>
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white/10 border-2 border-white/20 text-white px-4 py-2 focus:outline-none focus:border-white transition-colors duration-300"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-black text-white">
                  {category}
                </option>
              ))}
            </select>

            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="bg-white/10 border-2 border-white/20 text-white px-4 py-2 focus:outline-none focus:border-white transition-colors duration-300"
            >
              {locations.map(location => (
                <option key={location} value={location} className="bg-black text-white">
                  {location}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 text-center">
          <p className="text-white/70">
            Showing <span className="text-white font-bold">{filteredJobs.length}</span> of <span className="text-white font-bold">{jobs.length}</span> jobs
          </p>
        </div>

        {/* Job Listings */}
        <div className="grid gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className={`group bg-white/5 border-2 border-white/20 p-6 hover:border-white hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02] ${
                job.featured ? 'border-white/40 bg-white/10' : ''
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-white/90 transition-colors duration-300">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      {job.verified && (
                        <div className="flex items-center gap-1 bg-white/20 px-2 py-1 text-xs">
                          <Shield className="w-3 h-3" />
                          <span>VERIFIED</span>
                        </div>
                      )}
                      {job.featured && (
                        <div className="flex items-center gap-1 bg-white text-black px-2 py-1 text-xs font-bold">
                          <Star className="w-3 h-3" />
                          <span>FEATURED</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-white/70 text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      <span>{job.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                  </div>

                  <p className="text-white/80 mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.requirements.map((req, index) => (
                      <span
                        key={index}
                        className="bg-white/10 text-white/80 px-3 py-1 text-xs border border-white/20"
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:text-right space-y-3">
                  <div className="flex items-center gap-1 text-white font-bold">
                    <DollarSign className="w-4 h-4" />
                    <span>{job.salary}</span>
                  </div>
                  <p className="text-white/60 text-sm">{job.posted}</p>
                  <button className="group/btn bg-white text-black px-6 py-3 font-bold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                    <span>APPLY NOW</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-4">No Jobs Found</h3>
            <p className="text-white/70 mb-6">
              Try adjusting your search criteria or browse all available positions.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedLocation('All');
              }}
              className="bg-white text-black px-6 py-3 font-bold hover:bg-white/90 transition-colors duration-300"
            >
              CLEAR FILTERS
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;