import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaImages, 
  FaCamera, 
  FaBuilding, 
  FaUsers, 
  FaCode, 
  FaTrophy, 
  FaAward, 
  FaLaptopCode
} from "react-icons/fa";

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const galleryCategories = [
    { id: "all", name: "All", icon: <FaImages /> },
    { id: "office", name: "Company Office", icon: <FaBuilding /> },
    { id: "birthday", name: "Birthday Celebrations", icon: <FaUsers /> },
    { id: "independence", name: "Independence Day", icon: <FaAward /> },
    { id: "projects", name: "Milestones", icon: <FaCode /> },
    { id: "awards", name: "Recognitions", icon: <FaTrophy /> }
  ];

  const galleryItems = [
    {
      id: 1,
      category: "office",
      title: "Indore Engineering Lab",
      description: "Our core development office space in Indore, customized for team collaboration.",
      image: "/images/gallery/office-desks.jpeg",
      date: "2026"
    },
    {
      id: 2,
      category: "independence",
      title: "Flag Hoisting Ceremony",
      description: "Our team celebrating Independence Day at the Indore office campus.",
      image: "/images/gallery/independence-flag.jpeg",
      date: "2025"
    },
    {
      id: 3,
      category: "projects",
      title: "Loan Processing Portal",
      description: "Client presentation dashboard of our COSMOS credit society platform.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
      date: "2025"
    },
    {
      id: 4,
      category: "office",
      title: "Developer Workstations",
      description: "Ergonomic workspace layouts built for high-performance coding.",
      image: "/images/gallery/developer-workspace.jpeg",
      date: "2026"
    },
    {
      id: 5,
      category: "birthday",
      title: "Traditional Birthday Event",
      description: "The boutique team during an office birthday celebration dressed in traditional wear.",
      image: "/images/gallery/birthday-traditional.jpeg",
      date: "2026"
    },
    {
      id: 6,
      category: "projects",
      title: "Hospital Management Dashboard",
      description: "Live billing tracking and calendar logs implementation view.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=600&auto=format&fit=crop",
      date: "2025"
    },
    {
      id: 7,
      category: "awards",
      title: "Cooperative Auditing Credentials",
      description: "Compliance certification achieved by our financial software core.",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=600&auto=format&fit=crop",
      date: "2026"
    },
    {
      id: 8,
      category: "awards",
      title: "ISO Standard Verification",
      description: "Recognitions received for quality database architectures.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=600&auto=format&fit=crop",
      date: "2025"
    },
    {
      id: 9,
      category: "independence",
      title: "Office Entrance Decoration",
      description: "Inspirational tricolor balloon gate set up for the national holiday celebrations.",
      image: "/images/gallery/independence-entrance.jpeg",
      date: "2025"
    },
    {
      id: 10,
      category: "birthday",
      title: "Birthday Cake & Huddle",
      description: "Office team gathering to celebrate team member birthdays in the lounge.",
      image: "/images/gallery/birthday-gathering.jpeg",
      date: "2026"
    },
    {
      id: 11,
      category: "office",
      title: "Collaborative Lounge Area",
      description: "Comfortable layout designed for virtual daily scrums and brainstorms.",
      image: "/images/gallery/workspace-lounge.jpeg",
      date: "2026"
    },
    {
      id: 12,
      category: "independence",
      title: "Team Tricolor Sashes",
      description: "USL squad celebrating Independence Day inside the product engineering lab.",
      image: "/images/gallery/independence-team.jpeg",
      date: "2025"
    },
    {
      id: 13,
      category: "office",
      title: "Indore Conference Zone",
      description: "Where we map requirements and hold virtual customer sync meetings.",
      image: "/images/gallery/office-meeting.jpeg",
      date: "2026"
    },
    {
      id: 14,
      category: "independence",
      title: "Festive Rangoli Setup",
      description: "Beautiful traditional rangoli decorations prepared by the squad for the occasion.",
      image: "/images/gallery/independence-rangoli.jpeg",
      date: "2025"
    }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="w-full">
      {/* 1. Header Hero */}
      <section className="relative pt-20 pb-16 bg-[#090d16] border-b border-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[#ff4d01] text-xs font-bold uppercase tracking-widest font-sans">Workspace & Achievements</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Our Culture & <br />
            <span className="text-gradient">Visual Benchmarks</span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-400 font-sans text-sm sm:text-base leading-relaxed">
            Take a visual tour through our Indore engineering labs, developer sprint meetups, product interfaces, and professional credentials.
          </p>
        </div>
      </section>

      {/* 2. Gallery Categories Filters */}
      <section className="py-12 bg-[#0b0f19] border-b border-gray-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 border ${
                  selectedCategory === category.id
                    ? "bg-[#ff4d01] border-[#ff4d01] text-white shadow-lg shadow-[#ff4d01]/10"
                    : "bg-gray-950 border-gray-900 text-gray-400 hover:border-gray-800 hover:text-white"
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Visual Grid */}
      <section className="py-24 bg-[#0b0f19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="glass-card rounded-2xl overflow-hidden hover:scale-[1.01] transition-transform duration-300 flex flex-col justify-between"
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-lg font-bold text-white tracking-tight leading-snug">{item.title}</h3>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold font-sans">{item.date}</span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <p className="text-gray-400 font-sans text-sm leading-relaxed">{item.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-900/60">
                    <span className="text-xs bg-[#ff4d01]/10 text-[#ff4d01] px-2.5 py-1 rounded border border-[#ff4d01]/25 font-sans font-semibold">
                      {galleryCategories.find(cat => cat.id === item.category)?.name}
                    </span>
                    <FaCamera className="text-gray-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Credentials & Achievements Metrics */}
      <section className="py-20 bg-[#080b13] border-t border-gray-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <FaAward className="text-4xl text-[#ff4d01] mx-auto mb-2" />
              <span className="text-3xl font-black text-white block">22+</span>
              <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider font-sans">Years Tech Experience</span>
            </div>
            <div className="space-y-2">
              <FaCode className="text-4xl text-[#ff4d01] mx-auto mb-2" />
              <span className="text-3xl font-black text-white block">100+</span>
              <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider font-sans">Projects Completed</span>
            </div>
            <div className="space-y-2">
              <FaUsers className="text-4xl text-[#ff4d01] mx-auto mb-2" />
              <span className="text-3xl font-black text-white block">8</span>
              <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider font-sans">Boutique Engineers</span>
            </div>
            <div className="space-y-2">
              <FaLaptopCode className="text-4xl text-[#ff4d01] mx-auto mb-2" />
              <span className="text-3xl font-black text-white block">70%</span>
              <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider font-sans">Query Speedup</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Block */}
      <section className="py-20 bg-[#0b0f19] border-t border-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Looking for a Highly Qualified Development Squad?
          </h2>
          <p className="text-gray-400 font-sans text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Discuss your mobile applications, database engineering, or legacy migrations directly with our team.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#ff4d01] hover:bg-[#ff5d1a] text-white px-8 py-3.5 rounded-xl font-bold shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>Initiate Project Scope</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
