import React from "react";
import { Link } from "react-router-dom";
import { 
  FaFigma, 
  FaLaptopCode, 
  FaMobileAlt, 
  FaDatabase, 
  FaSync, 
  FaCheckDouble,
  FaRocket,
  FaUserCheck,
  FaUsers,
  FaTools
} from "react-icons/fa";

function Services() {
  const serviceOfferings = [
    {
      icon: <FaFigma className="text-3xl text-[#ff4d01]" />,
      title: "Product Discovery & UI/UX Design",
      desc: "Detailed wireframes, complete visual design systems, and click-through interactive prototypes built in Figma for user verification.",
      points: ["User Journey Mapping", "Wireframing & Prototyping", "Visual Design Systems", "Responsive Web/Mobile UI"]
    },
    {
      icon: <FaLaptopCode className="text-3xl text-[#ff4d01]" />,
      title: "Web Application Development",
      desc: "Robust single-page and server-rendered web portals engineered with security, accessibility, and high performance.",
      points: ["React & TypeScript SPA", "ASP.NET Core REST APIs", "Node.js (Express)", "Golang Microservices"]
    },
    {
      icon: <FaMobileAlt className="text-3xl text-[#ff4d01]" />,
      title: "Mobile App Development",
      desc: "High-performance cross-platform apps built using native modules, smooth transitions, and reliable offline capabilities.",
      points: ["Flutter Cross-Platform", "React Native Apps", "Push Notifications & Offline Support", "App Store Publishing"]
    },
    {
      icon: <FaDatabase className="text-3xl text-[#ff4d01]" />,
      title: "Database Engineering & Tuning",
      desc: "Relational database modeling, query cost analysis, stored procedure optimization, and high-availability database setups.",
      points: ["SQL Server Architecture", "PostgreSQL Clustering & Optimization", "MongoDB NoSQL Schema Design", "Index Tuning & Stored Procs"]
    },
    {
      icon: <FaSync className="text-3xl text-[#ff4d01]" />,
      title: "Legacy Monolith Modernization",
      desc: "Transition heavy legacy desktop environments (C# WinForms, VB6, old Access databases) to lightweight React micro-frontends.",
      points: ["WinForms to React Porting", ".NET Framework to .NET 8 Core", "Monolithic Database Splitting", "Performance Audit & Refactoring"]
    },
    {
      icon: <FaCheckDouble className="text-3xl text-[#ff4d01]" />,
      title: "QA & Test Automation",
      desc: "Full automated regression suites running on CI/CD pipelines to guarantee bug-free deployments and stable releases.",
      points: ["Unit Testing (Jest, Vitest)", "API Test Automation", "Integration Testing", "CI/CD Pipeline Auditing"]
    }
  ];

  const engagementModels = [
    {
      icon: <FaRocket className="text-4xl text-[#ff4d01]" />,
      title: "SaaS MVP Development",
      desc: "Ideal for startups looking to test market fit. We outline a strict feature set and deliver a production-ready mobile or web MVP in 6 to 12 weeks.",
      badge: "Fixed-scope or Agile Sprint"
    },
    {
      icon: <FaUserCheck className="text-4xl text-[#ff4d01]" />,
      title: "Dedicated Engineer",
      desc: "Perfect for scaling teams. Get a senior engineer (React, Flutter, C# .NET, or PostgreSQL) working full-time directly in your Slack channels and meetings.",
      badge: "Monthly Billing"
    },
    {
      icon: <FaUsers className="text-4xl text-[#ff4d01]" />,
      title: "Dedicated Scrum Squad",
      desc: "Leverage a fully operational 4-member squad (1 UI/UX, 1 React/Flutter Developer, 1 Backend Developer, 1 QA Engineer) with dedicated project lead support.",
      badge: "Flexible Retainer"
    },
    {
      icon: <FaTools className="text-4xl text-[#ff4d01]" />,
      title: "Legacy Modernization Project",
      desc: "We perform a thorough audit of your old desktop forms, refactor slow query paths, design a web-native UI, and safely move you to modern cloud systems.",
      badge: "Milestone Contract"
    }
  ];

  const technologies = [
    { category: "Frontend", tools: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5"] },
    { category: "Mobile Apps", tools: ["Flutter", "React Native", "Swift / Kotlin", "Redux Toolkit", "Dart"] },
    { category: "Backend / API", tools: ["ASP.NET Core (C#)", "Node.js (Express)", "Golang (Gin)", "Python (Django/FastAPI)"] },
    { category: "Databases", tools: ["PostgreSQL", "SQL Server", "MongoDB", "Redis", "MySQL"] },
    { category: "Testing / QA", tools: ["Jest", "Vitest", "Supertest (API)", "React Testing Library"] },
    { category: "DevOps / Design", tools: ["Figma", "Docker", "AWS (EC2/S3/RDS)", "CI/CD (GitHub Actions)"] }
  ];

  return (
    <div className="w-full">
      {/* 1. Header Hero */}
      <section className="relative pt-20 pb-16 bg-[#090d16] border-b border-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[#ff4d01] text-xs font-bold uppercase tracking-widest">Our Offerings</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Product Engineering <br />
            <span className="text-gradient">Designed to Scale</span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-400 font-sans text-sm sm:text-base leading-relaxed">
            From design prototypes to database engineering and legacy portal migrations, we deliver secure, high-performance systems aligned with international standards.
          </p>
        </div>
      </section>

      {/* 2. Core Services Matrix */}
      <section className="py-24 bg-[#0b0f19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold text-white tracking-tight font-sans">Core Service Areas</h2>
            <p className="text-gray-400 font-sans text-sm sm:text-base">
              We leverage modern technology stacks to deliver solid web apps, responsive cross-platform mobile portals, and database optimizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceOfferings.map((service, idx) => (
              <div 
                key={idx} 
                className="glass-card p-8 rounded-2xl flex flex-col justify-between hover:scale-[1.01] transition-transform duration-300"
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 bg-gray-950 border border-gray-800 rounded-xl flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-sans">
                    {service.desc}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-900/60 space-y-2">
                  {service.points.map((p, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2.5 text-xs text-gray-300 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d01] flex-shrink-0"></span>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Engagement Models */}
      <section className="py-24 bg-[#080b13] border-t border-gray-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold text-white tracking-tight font-sans">How We Engage</h2>
            <p className="text-gray-400 font-sans text-sm sm:text-base">
              Flexible business structures designed to accommodate startup MVPs, scaling tech departments, and enterprise porting plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engagementModels.map((model, idx) => (
              <div 
                key={idx} 
                className="glass-card p-8 rounded-2xl flex flex-col justify-between hover:border-[#ff4d01]/20 transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="w-16 h-16 bg-gray-950 border border-gray-800 rounded-xl flex items-center justify-center">
                      {model.icon}
                    </div>
                    <span className="text-xs bg-[#ff4d01]/10 text-[#ff4d01] border border-[#ff4d01]/20 px-2.5 py-1 rounded-full font-semibold">
                      {model.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{model.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-sans">{model.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Tech Matrix */}
      <section className="py-24 bg-[#0b0f19] border-t border-gray-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold text-white tracking-tight font-sans">Our Technology Matrix</h2>
            <p className="text-gray-400 font-sans text-sm sm:text-base">
              Curated frameworks and languages we use to construct maintainable, cross-compatible product builds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl space-y-4">
                <span className="text-[#ff4d01] text-xs font-bold uppercase tracking-wider">{tech.category}</span>
                <div className="flex flex-wrap gap-2 pt-2">
                  {tech.tools.map((tool, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="bg-gray-950 border border-gray-800/80 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-medium font-sans"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0b0f19] to-gray-950 relative border-t border-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 z-10">
          <h3 className="text-3xl font-black text-white leading-tight">
            Deploy an Elite Squad for Your Next Project
          </h3>
          <p className="max-w-2xl mx-auto text-gray-400 text-sm leading-relaxed font-sans">
            Connect directly with solution architect Hemant Mehta to evaluate resource sizing, scope milestones, and estimate modern databases/APIs pricing plans.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center bg-[#ff4d01] hover:bg-[#ff5d1a] text-white px-8 py-3.5 rounded-xl font-bold shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>Request Resource Engagement</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
