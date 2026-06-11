import React from "react";
import { Link } from "react-router-dom";
import { 
  FaLinkedin, 
  FaEnvelope, 
  FaCode, 
  FaDatabase, 
  FaMobileAlt, 
  FaFigma, 
  FaCheckDouble,
  FaCogs
} from "react-icons/fa";

function Team() {
  const teamMembers = [
    {
      name: "Hemant Mehta",
      position: "Founder & Solution Architect",
      image: "/images/professional-headshot-suit-2.png",
      bio: "22+ years of technology leadership and enterprise software design. Architected complex loan systems, cotton mill ERP platforms, and custom databases. Deep specialist in C#, .NET Core, SQL Server, and query plan performance tuning.",
      skills: ["Software Architecture", "C# & .NET Core", "SQL Server Optimization", "API Design", "Legacy Modernization"],
      social: {
        linkedin: "https://www.linkedin.com/company/universal-soft-lab/about/",
        email: "hemant@universalsoftlab.com"
      }
    },
    {
      name: "Priya Shivhare",
      position: "Director & Strategy Lead",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=400&auto=format&fit=crop",
      bio: "22+ years of experience in technical planning, business strategy, and delivery management. Directs client alignment, scope sizing, and project governance for all international accounts.",
      skills: ["Product Strategy", "Project Governance", "Requirement Mapping", "Client Relations", "Startup Advisory"],
      social: {
        linkedin: "https://www.linkedin.com/company/universal-soft-lab/about/",
        email: "priya@universalsoftlab.com"
      }
    },
    {
      name: "Naveen Raw",
      position: "Team Lead & Senior Mobile Engineer",
      image: "/images/professional-headshot-naveen.png",
      bio: "Lead mobile developer with extensive experience building React Native and Flutter portals. Expert in local database caching, offline synchronization, and native component integration.",
      skills: ["React Native", "Flutter", "Mobile Architecture", "Offline Caching", "API Sync"],
      social: {
        linkedin: "https://www.linkedin.com/company/universal-soft-lab/about/",
        email: "naveen@universalsoftlab.com"
      }
    },
    {
      name: "Deepanshu",
      position: "Senior Mobile & Frontend Developer",
      image: "/images/deepanshu.png",
      bio: "Frontend and mobile specialist with deep expertise in cross-platform UI rendering, state management pipelines, and robust responsive layouts.",
      skills: ["React", "Flutter", "TypeScript", "Redux Toolkit", "Responsive Design"],
      social: {
        linkedin: "https://www.linkedin.com/company/universal-soft-lab/about/",
        email: "deepanshu@universalsoftlab.com"
      }
    },
    {
      name: "Kunal Awarekar",
      position: "Full-Stack C# / SQL Engineer",
      image: "/images/kunal.jpeg",
      bio: "Full-stack engineer specializing in modern .NET Core backends, database procedures, and React portal configurations.",
      skills: ["C#", "ASP.NET Core", "SQL Server", "Web APIs", "React"],
      social: {
        linkedin: "https://www.linkedin.com/company/universal-soft-lab/about/",
        email: "kunal@universalsoftlab.com"
      }
    },
    {
      name: "Shivani Yadav",
      position: "Software Developer",
      image: "/images/shivani.png",
      bio: "Backend developer focusing on relational data schemas, index tuning, integration scripting, and SQL reporting query design.",
      skills: ["PostgreSQL", "SQL Server", "Stored Procedures", "Data Migration", "C#"],
      social: {
        linkedin: "https://www.linkedin.com/company/universal-soft-lab/about/",
        email: "shivani@universalsoftlab.com"
      }
    },
    {
      name: "Prachi Chobey",
      position: "Senior UI/UX Designer",
      image: "/images/Prachi.png",
      bio: "Creates visual design systems, wireframes, and click-through interactive prototypes in Figma, mapping seamless user journeys.",
      skills: ["Figma UI/UX", "Wireframing", "Interactive Prototypes", "Design Systems", "User Journeys"],
      social: {
        linkedin: "https://www.linkedin.com/company/universal-soft-lab/about/",
        email: "prachi@universalsoftlab.com"
      }
    },
    {
      name: "Rahul",
      position: "Marketing & Growth Lead",
      image: "/images/Rahul.png",
      bio: "Lead marketing and business growth strategist. Specializes in client acquisition, brand development, marketing campaigns, and technology partnership management.",
      skills: ["Digital Marketing", "Growth Strategy", "Lead Generation", "Client Acquisition", "Brand Strategy"],
      social: {
        linkedin: "https://www.linkedin.com/company/universal-soft-lab/about/",
        email: "rahul@universalsoftlab.com"
      }
    }
  ];

  const coreFocusAreas = [
    {
      icon: <FaFigma className="text-2xl text-[#ff4d01]" />,
      title: "UI/UX & Prototyping",
      desc: "Figma wireframing and clickable screen maps."
    },
    {
      icon: <FaCode className="text-2xl text-[#ff4d01]" />,
      title: "Frontend Engineering",
      desc: "Type-safe responsive React structures."
    },
    {
      icon: <FaCogs className="text-2xl text-[#ff4d01]" />,
      title: "Backend Core",
      desc: "ASP.NET Core, Node.js, and Golang Web APIs."
    },
    {
      icon: <FaDatabase className="text-2xl text-[#ff4d01]" />,
      title: "Database Optimization",
      desc: "PostgreSQL & SQL Server database tuning."
    },
    {
      icon: <FaMobileAlt className="text-2xl text-[#ff4d01]" />,
      title: "Mobile App Coding",
      desc: "Flutter and React Native performance."
    },
    {
      icon: <FaCheckDouble className="text-2xl text-[#ff4d01]" />,
      title: "QA Automation",
      desc: "Continuous testing via automated workflows."
    }
  ];

  return (
    <div className="w-full">
      {/* 1. Header Hero */}
      <section className="relative pt-20 pb-16 bg-[#090d16] border-b border-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[#ff4d01] text-xs font-bold uppercase tracking-widest font-sans">Our Engineers</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Meet the Boutique <br />
            <span className="text-gradient">Engineering Squad</span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-400 font-sans text-sm sm:text-base leading-relaxed">
            We operate as a high-powered 8-member multidisciplinary tech team, combining senior architecture, mobile specialization, database mastery, and QA automation.
          </p>
        </div>
      </section>

      {/* 2. Core Stats Grid */}
      <section className="py-12 bg-[#0b0f19] border-b border-gray-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-4 rounded-xl bg-gray-950/40 border border-gray-900">
              <span className="text-3xl font-black text-[#ff4d01] block mb-1">8</span>
              <span className="text-gray-400 text-xs font-medium uppercase font-sans">Elite Professionals</span>
            </div>
            <div className="p-4 rounded-xl bg-gray-950/40 border border-gray-900">
              <span className="text-3xl font-black text-[#ff4d01] block mb-1">22+</span>
              <span className="text-gray-400 text-xs font-medium uppercase font-sans">Years Tech Leadership</span>
            </div>
            <div className="p-4 rounded-xl bg-gray-950/40 border border-gray-900">
              <span className="text-3xl font-black text-[#ff4d01] block mb-1">100+</span>
              <span className="text-gray-400 text-xs font-medium uppercase font-sans">Completed Projects</span>
            </div>
            <div className="p-4 rounded-xl bg-gray-950/40 border border-gray-900">
              <span className="text-3xl font-black text-[#ff4d01] block mb-1">100%</span>
              <span className="text-gray-400 text-xs font-medium uppercase font-sans">Direct Partner Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Squad Profiles */}
      <section className="py-24 bg-[#0b0f19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div 
                key={idx} 
                className="glass-card rounded-2xl overflow-hidden hover:scale-[1.01] transition-transform duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 overflow-hidden border-b border-gray-900">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-6">
                      <h3 className="text-xl font-bold text-white tracking-tight">{member.name}</h3>
                      <p className="text-[#ff4d01] text-xs font-semibold uppercase tracking-wider">{member.position}</p>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4 font-sans text-sm">
                    <p className="text-gray-400 leading-relaxed">{member.bio}</p>
                    
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block">Expertise Areas</span>
                      <div className="flex flex-wrap gap-1.5">
                        {member.skills.map((s, sIdx) => (
                          <span 
                            key={sIdx} 
                            className="bg-gray-950 border border-gray-800 text-gray-300 px-2 py-0.5 rounded text-[11px] font-medium"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-gray-900/40 flex items-center gap-4">
                  <a 
                    href={member.social.linkedin} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    <FaLinkedin size={18} />
                  </a>
                  <a 
                    href={`mailto:${member.social.email}`}
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    <FaEnvelope size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Capabilities Block */}
      <section className="py-24 bg-[#080b13] border-t border-gray-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold text-white tracking-tight font-sans">Squad Alignment</h2>
            <p className="text-gray-400 font-sans text-sm sm:text-base">
              Each team member operates within a defined scope to ensure smooth transition paths, optimized data layers, and clean UI components.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFocusAreas.map((focus, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-950 border border-gray-800 flex items-center justify-center flex-shrink-0">
                  {focus.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="text-white font-bold font-sans text-sm sm:text-base">{focus.title}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm font-sans">{focus.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-20 bg-[#0b0f19] border-t border-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Partner with a High-Powered Boutique Squad
          </h2>
          <p className="text-gray-400 font-sans text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Skip standard agency overhead. Work directly with senior software architects and developers to build your next web platform or mobile app.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#ff4d01] hover:bg-[#ff5d1a] text-white px-8 py-3.5 rounded-xl font-bold shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>Discuss Your Requirements</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
