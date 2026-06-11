import React from "react";
import { Link } from "react-router-dom";
import { 
  FaHandshake, 
  FaShieldAlt, 
  FaCode,
  FaServer,
  FaMobileAlt
} from "react-icons/fa";

function About() {
  const values = [
    {
      icon: <FaShieldAlt className="text-3xl text-[#ff4d01]" />,
      title: "Quality & Security First",
      desc: "We prioritize robust security measures, data isolation, and comprehensive QA test automation using Jest and Vitest on all our codebases."
    },
    {
      icon: <FaCode className="text-3xl text-[#ff4d01]" />,
      title: "Clean Code Architecture",
      desc: "Our senior developers write clean, maintainable, and self-documenting code. We leverage type-safety with TypeScript and construct highly decoupled microservices."
    },
    {
      icon: <FaHandshake className="text-3xl text-[#ff4d01]" />,
      title: "Transparent Collaboration",
      desc: "We work directly with founders and CTOs on daily Slack channels and Jira tracking, providing clear updates and regular video demos."
    }
  ];

  return (
    <div className="w-full">
      {/* 1. Header Hero */}
      <section className="relative pt-20 pb-16 bg-[#090d16] border-b border-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[#ff4d01] text-xs font-bold uppercase tracking-widest">About Universal Soft Lab</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Backed by 22+ Years of <br />
            <span className="text-gradient">Technology Leadership</span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-400 font-sans text-sm sm:text-base leading-relaxed">
            Universal Soft Lab is the technology division of Universal Tradecom Pvt. Ltd. (incorporated in 2022). Our agency represents a combined experience of over two decades delivering enterprise-grade database management systems, legacy modernization, and high-performance SaaS applications.
          </p>
        </div>
      </section>

      {/* 2. Company Narrative & Stats */}
      <section className="py-24 bg-[#0b0f19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Story text */}
            <div className="lg:col-span-7 space-y-6 font-sans text-sm sm:text-base text-gray-400 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
                Our Journey & Boutique Agency Model
              </h2>
              <p>
                Founded and led by Senior Architect Hemant Mehta, our agency was built on a simple philosophy: **deliver elite engineering quality without the overhead of massive consultancies.**
              </p>
              <p>
                Instead of hiring hundreds of junior developers, we maintained a highly-specialized **8-member multidisciplinary engineering team**. This allows us to work directly with startups and enterprises as an extension of their team, ensuring maximum communication efficiency and fast code integration.
              </p>
              <p>
                Over the years, we have built a reputation for solving hard technical problems. From designing high-load financial software for Cooperative Societies and banking employees to refactoring slow legacy Windows applications to modern React containers, we have consistently helped our clients automate operations and boost processing efficiency.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="p-5 rounded-xl bg-gray-950 border border-gray-900">
                  <span className="text-3xl font-extrabold text-[#ff4d01] block mb-1">22+</span>
                  <span className="text-gray-400 text-xs sm:text-sm">Years of Leadership Experience</span>
                </div>
                <div className="p-5 rounded-xl bg-gray-950 border border-gray-900">
                  <span className="text-3xl font-extrabold text-[#ff4d01] block mb-1">8</span>
                  <span className="text-gray-400 text-xs sm:text-sm">Multidisciplinary Professionals</span>
                </div>
                <div className="p-5 rounded-xl bg-gray-950 border border-gray-900">
                  <span className="text-3xl font-extrabold text-[#ff4d01] block mb-1">100+</span>
                  <span className="text-gray-400 text-xs sm:text-sm">Enterprise Software Projects</span>
                </div>
                <div className="p-5 rounded-xl bg-gray-950 border border-gray-900">
                  <span className="text-3xl font-extrabold text-[#ff4d01] block mb-1">70%</span>
                  <span className="text-gray-400 text-xs sm:text-sm">Report & Query Speedup</span>
                </div>
              </div>
            </div>

            {/* Visual block */}
            <div className="lg:col-span-5 space-y-6">
              {/* Founder Photo */}
              <div className="relative rounded-2xl border border-gray-800 bg-gray-950 overflow-hidden shadow-2xl group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src="/images/professional-fullbody-solo.png" 
                    alt="Hemant Mehta - Founder & Senior Architect" 
                    className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[#ff4d01] text-xs font-bold uppercase tracking-wider block mb-1">Founder & Lead Architect</span>
                  <h3 className="text-xl font-bold text-white">Hemant Mehta</h3>
                </div>
              </div>

              {/* Engineering Core Card */}
              <div className="relative rounded-2xl border border-gray-800 bg-gray-950 overflow-hidden shadow-2xl p-6 space-y-4">
                <h3 className="text-md font-bold text-white">Our Engineering Core</h3>
                <div className="space-y-3 text-xs font-sans text-gray-400">
                  <div className="flex items-center gap-3">
                    <FaCode className="text-[#ff4d01] text-md" />
                    <span>React, Flutter, React Native, C# (.NET Core), Golang</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaServer className="text-[#ff4d01] text-md" />
                    <span>PostgreSQL, SQL Server, MongoDB, Query Optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaMobileAlt className="text-[#ff4d01] text-md" />
                    <span>Cloud APIs, AWS Infrastructure, CI/CD pipelines</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-24 bg-[#080b13] border-t border-gray-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Core Principles
            </h3>
            <p className="text-gray-400 text-sm sm:text-base font-sans">
              These fundamental values guide how our team codes, coordinates, and supports our clients globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => (
              <div 
                key={idx} 
                className="glass-card p-8 rounded-2xl space-y-4 hover:scale-[1.01] transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-950 border border-gray-800 flex items-center justify-center">
                  {v.icon}
                </div>
                <h4 className="text-lg font-bold text-white">{v.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed font-sans">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bottom Call-To-Action */}
      <section className="py-20 bg-[#0b0f19] border-t border-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Need an Engineering Partner to Scale Your System?
          </h3>
          <p className="text-gray-400 font-sans text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Discuss your development plans directly with our founders. Let's design a secure, database-optimized roadmap for your app.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#ff4d01] hover:bg-[#ff5d1a] text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-[#ff4d01]/10 hover:shadow-[#ff4d01]/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Connect With Us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
