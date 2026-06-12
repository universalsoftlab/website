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
  FaLaptopCode,
  FaChevronLeft,
  FaChevronRight,
  FaTimes
} from "react-icons/fa";

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const galleryCategories = [
    { id: "all", name: "All", icon: <FaImages /> },
    { id: "office", name: "Company Office", icon: <FaBuilding /> },
    { id: "birthday", name: "Birthday Celebrations", icon: <FaUsers /> },
    { id: "independence", name: "Independence Day", icon: <FaAward /> },
    { id: "projects", name: "Milestones", icon: <FaCode /> },
    { id: "awards", name: "Recognitions", icon: <FaTrophy /> }
  ];

  const galleryItems = [
    // --- Company Office ---
    {
      id: 1,
      category: "office",
      title: "Indore Engineering Lab",
      description: "Our core development office space in Indore, customized for team collaboration and agile workflows.",
      image: "/images/gallery/office-desks.jpeg",
      date: "2026"
    },
    {
      id: 2,
      category: "office",
      title: "Developer Workstations",
      description: "Ergonomic workspace layouts built for high-performance coding and multi-monitor setups.",
      image: "/images/gallery/developer-workspace.jpeg",
      date: "2026"
    },
    {
      id: 3,
      category: "office",
      title: "Collaborative Lounge Area",
      description: "Comfortable layout designed for virtual daily scrums, informal syncs, and team brainstorms.",
      image: "/images/gallery/workspace-lounge.jpeg",
      date: "2026"
    },
    {
      id: 4,
      category: "office",
      title: "Indore Conference Zone",
      description: "Equipped with state-of-the-art visual systems for requirement mapping and remote client alignment meetings.",
      image: "/images/gallery/office-meeting.jpeg",
      date: "2026"
    },
    {
      id: 5,
      category: "office",
      title: "Indore Lab Inauguration",
      description: "Traditional ribbon cutting and lamp lighting ceremony marking the official launch of our Indore lab.",
      image: "/images/gallery/inauguration-ceremony.jpeg",
      date: "2025"
    },
    {
      id: 6,
      category: "office",
      title: "Office Reception Entry",
      description: "The modern welcoming visual entryway to our main software development headquarters.",
      image: "/images/gallery/office-entry.jpeg",
      date: "2026"
    },
    {
      id: 7,
      category: "office",
      title: "Team Collaborative Session",
      description: "Software developers and designers working together on wireframes and system architecture models.",
      image: "/images/gallery/team-discussion.jpeg",
      date: "2026"
    },

    // --- Birthday Celebrations ---
    {
      id: 8,
      category: "birthday",
      title: "Traditional Birthday Event",
      description: "The boutique team during an office birthday celebration dressed in traditional attire.",
      image: "/images/gallery/birthday-traditional.jpeg",
      date: "2026"
    },
    {
      id: 9,
      category: "birthday",
      title: "Birthday Cake & Huddle",
      description: "Office team gathering to celebrate team member birthdays in our main cafeteria lounge.",
      image: "/images/gallery/birthday-gathering.jpeg",
      date: "2026"
    },
    {
      id: 10,
      category: "birthday",
      title: "Milestone Success Celebration",
      description: "USL squad celebrating success achievements and project deliveries with team treats.",
      image: "/images/gallery/team-celebration.jpeg",
      date: "2026"
    },
    {
      id: 11,
      category: "birthday",
      title: "Lounge Team Gathering",
      description: "Enjoying informal conversations and refreshments during our Friday afternoon wind-down huddle.",
      image: "/images/gallery/team-gathering.jpeg",
      date: "2026"
    },
    {
      id: 12,
      category: "birthday",
      title: "Festive Traditional Dress Group",
      description: "Our squad presenting colorful ethnic outfits during our office celebration events.",
      image: "/images/gallery/team-traditional.jpeg",
      date: "2025"
    },

    // --- Independence Day ---
    {
      id: 13,
      category: "independence",
      title: "Flag Hoisting Ceremony",
      description: "Our team celebrating Independence Day with a flag hoisting at the Indore campus.",
      image: "/images/gallery/independence-flag.jpeg",
      date: "2025"
    },
    {
      id: 14,
      category: "independence",
      title: "Office Entrance Decoration",
      description: "Inspirational tricolor balloon entryway setup prepared for the national holiday celebrations.",
      image: "/images/gallery/independence-entrance.jpeg",
      date: "2025"
    },
    {
      id: 15,
      category: "independence",
      title: "Team Tricolor Sashes",
      description: "The USL team celebrating Independence Day dressed in white with tricolor sashes.",
      image: "/images/gallery/independence-team.jpeg",
      date: "2025"
    },
    {
      id: 16,
      category: "independence",
      title: "Festive Rangoli Setup",
      description: "Beautiful traditional rangoli decorations prepared by the squad at the Indore office entrance.",
      image: "/images/gallery/independence-rangoli.jpeg",
      date: "2025"
    },

    // --- Dummy: Milestones / Projects ---
    {
      id: 17,
      category: "projects",
      title: "Loan Processing Portal",
      description: "Client presentation dashboard of our COSMOS credit society platform.",
      image: "/images/gallery/loan-portal.png",
      date: "2025"
    },
    {
      id: 18,
      category: "projects",
      title: "Hospital Management Dashboard",
      description: "Live billing tracking and calendar logs implementation view.",
      image: "/images/gallery/hospital-dashboard.png",
      date: "2025"
    },

    // --- Dummy: Recognitions / Awards ---
    {
      id: 19,
      category: "awards",
      title: "Cooperative Auditing Credentials",
      description: "Compliance certification achieved by our financial software core.",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=600&auto=format&fit=crop",
      date: "2026"
    },
    {
      id: 20,
      category: "awards",
      title: "ISO Standard Verification",
      description: "Recognitions received for quality database architectures.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=600&auto=format&fit=crop",
      date: "2025"
    }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  React.useEffect(() => {
    if (!isLightboxOpen || lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
      } else if (e.key === "Escape") {
        setIsLightboxOpen(false);
        setLightboxIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, lightboxIndex, filteredItems.length]);

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
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                onClick={() => {
                  setLightboxIndex(index);
                  setIsLightboxOpen(true);
                }}
                className="glass-card rounded-2xl overflow-hidden hover:scale-[1.01] transition-transform duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"></div>
                  
                  {/* Subtle premium hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-[#ff4d01] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-350">
                      <FaCamera /> View Fullscreen
                    </span>
                  </div>

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
              <span className="text-3xl font-black text-white block">9</span>
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

      {/* Lightbox Modal Overlay */}
      {isLightboxOpen && lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-xl p-4 md:p-6 select-none animate-fade-in">
          {/* Top Panel (Category name, Title, Counter, Close) */}
          <div className="flex items-center justify-between w-full border-b border-gray-900 pb-3 md:pb-4">
            <div className="flex flex-col">
              <span className="text-[10px] text-[#ff4d01] font-bold uppercase tracking-widest font-sans">
                {galleryCategories.find(cat => cat.id === filteredItems[lightboxIndex].category)?.name} Section
              </span>
              <h2 className="text-white text-base md:text-lg font-bold truncate max-w-xs md:max-w-md">
                {filteredItems[lightboxIndex].title}
              </h2>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-500 font-medium font-sans">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
              <button
                onClick={() => {
                  setIsLightboxOpen(false);
                  setLightboxIndex(null);
                }}
                className="w-10 h-10 rounded-full bg-gray-950 border border-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-700 hover:bg-gray-900 transition-all cursor-pointer"
                title="Close (Esc)"
              >
                <FaTimes size={16} />
              </button>
            </div>
          </div>

          {/* Main Visual Slider (Arrows + Image) */}
          <div className="relative flex-grow flex items-center justify-between my-4 max-h-[60vh] md:max-h-[65vh]">
            {/* Left Arrow Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
              }}
              className="absolute left-0 md:left-4 z-10 w-12 h-12 rounded-full bg-gray-950/80 border border-gray-900/50 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-700 hover:bg-gray-900 transition-all cursor-pointer shadow-lg hover:scale-105"
              title="Previous Image (Left Arrow)"
            >
              <FaChevronLeft size={18} />
            </button>

            {/* Main Image View */}
            <div className="w-full h-full flex items-center justify-center px-12" onClick={() => {
              // Clicking the image itself advances to next
              setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
            }}>
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-gray-900 transition-all duration-300"
              />
            </div>

            {/* Right Arrow Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
              }}
              className="absolute right-0 md:right-4 z-10 w-12 h-12 rounded-full bg-gray-950/80 border border-gray-900/50 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-700 hover:bg-gray-900 transition-all cursor-pointer shadow-lg hover:scale-105"
              title="Next Image (Right Arrow)"
            >
              <FaChevronRight size={18} />
            </button>
          </div>

          {/* Bottom Panel (Info details + Navigation Thumbnails) */}
          <div className="border-t border-gray-900 pt-4 flex flex-col items-center gap-4">
            <div className="text-center max-w-2xl px-4">
              <p className="text-gray-300 font-sans text-sm md:text-base leading-relaxed">
                {filteredItems[lightboxIndex].description}
              </p>
              <span className="inline-block mt-1.5 text-[11px] text-gray-500 font-semibold uppercase tracking-wider font-sans">
                Captured in {filteredItems[lightboxIndex].date}
              </span>
            </div>

            {/* Thumbnails Row */}
            <div className="w-full max-w-4xl overflow-x-auto py-2 px-4 scrollbar-thin">
              <div className="flex justify-center gap-2 md:gap-3 min-w-max mx-auto">
                {filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => setLightboxIndex(index)}
                    className={`relative w-16 h-12 md:w-20 md:h-14 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-250 ${
                      index === lightboxIndex
                        ? "border-[#ff4d01] opacity-100 scale-105 shadow-md shadow-[#ff4d01]/25"
                        : "border-gray-900 opacity-40 hover:opacity-85"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
