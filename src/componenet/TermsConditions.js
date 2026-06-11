import React from "react";
import { FaGavel, FaLightbulb, FaExchangeAlt, FaBalanceScale } from "react-icons/fa";

const TermsConditions = () => {
  const sections = [
    {
      icon: <FaLightbulb className="text-2xl text-[#ff4d01]" />,
      title: "1. Intellectual Property & Code Ownership",
      text: "All custom source code, design systems, Figma prototypes, and database structures developed specifically for a project pass to the Client upon full clearance of all outstanding milestone invoices. Universal Soft Lab retains the right to reuse standard code modules and boilerplate frameworks developed internally."
    },
    {
      icon: <FaExchangeAlt className="text-2xl text-[#ff4d01]" />,
      title: "2. Service Engagement Models",
      text: "We offer dedicated Scrum Teams, SaaS MVP build agreements, and hourly/monthly contracts. Dedicated resources require advance retainer clearances at the beginning of each monthly billing cycle. Scope deviations are handled through formal Change Request logs signed off by both project leads."
    },
    {
      icon: <FaBalanceScale className="text-2xl text-[#ff4d01]" />,
      title: "3. Limitation of Liability",
      text: "Universal Soft Lab builds and tests software according to quality industry parameters. However, we are not liable for business revenue losses, hosting portal server crashes, database corruptions, or cyber security incidents occurring outside of our directly controlled dev environments."
    },
    {
      icon: <FaGavel className="text-2xl text-[#ff4d01]" />,
      title: "4. Governing Jurisdiction",
      text: "These terms, scoping briefs, and subsequent service agreements are governed in accordance with the laws of India. Any technical, legal, or payment disputes shall be filed exclusively under the local court jurisdictions of Indore, Madhya Pradesh, India."
    }
  ];

  return (
    <div className="w-full font-sans text-gray-400">
      {/* 1. Header Hero */}
      <section className="relative pt-20 pb-16 bg-[#090d16] border-b border-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[#ff4d01] text-xs font-bold uppercase tracking-widest">Legal Notice</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Terms & Conditions
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-sm sm:text-base">
            Terms of service governing scoping contracts, developer squads, and source code ownership.
          </p>
        </div>
      </section>

      {/* 2. Terms Content */}
      <section className="py-24 bg-[#0b0f19]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            
            {/* Introductory text */}
            <div className="space-y-4">
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Last Updated: June 11, 2026</span>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Welcome to Universal Soft Lab. These terms apply to all scoping contracts, dedicated developer allocations, and code modernization services provided by Universal Soft Lab (a technology division of Universal Tradecom Pvt. Ltd.).
              </p>
            </div>

            {/* List sections */}
            <div className="space-y-10 pt-4">
              {sections.map((sec, idx) => (
                <div key={idx} className="glass-card p-6 sm:p-8 rounded-2xl space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-950 border border-gray-800 flex items-center justify-center">
                      {sec.icon}
                    </div>
                    <h2 className="text-lg font-bold text-white tracking-tight font-sans">
                      {sec.title}
                    </h2>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed font-sans pl-1">
                    {sec.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Inquiries bottom */}
            <div className="pt-8 border-t border-gray-900 text-center space-y-4">
              <h3 className="text-white font-bold text-lg font-sans">Scoping Questions?</h3>
              <p className="text-sm max-w-md mx-auto">
                If you have questions regarding payment milestones, Scrum retainers, or code ownership transitions, please write to:
              </p>
              <div className="text-white text-sm font-semibold">
                info@universalsoftlab.com
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
