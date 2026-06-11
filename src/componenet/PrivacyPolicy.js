import React from "react";
import { FaShieldAlt, FaFileContract, FaLock, FaUserShield } from "react-icons/fa";

function PrivacyPolicy() {
  const sections = [
    {
      icon: <FaUserShield className="text-2xl text-[#ff4d01]" />,
      title: "1. Information We Collect",
      text: "We collect information required to deliver custom software engineering services. This includes company name, representative email addresses, phone contacts, billing information, and technical project brief requirements shared during scoping calls."
    },
    {
      icon: <FaLock className="text-2xl text-[#ff4d01]" />,
      title: "2. Client Data Confidentiality & NDAs",
      text: "As a software engineering partner, we respect your proprietary codebases, data records, and algorithms. Universal Soft Lab enforces strict internal protocols and signs standard non-disclosure agreements (NDAs) before gaining access to private GitHub/GitLab repositories, database instances, or development servers."
    },
    {
      icon: <FaShieldAlt className="text-2xl text-[#ff4d01]" />,
      title: "3. Data Security & Storage",
      text: "We employ industry-standard encryption, multi-factor authentication, and secure access tokens on all development workstations. Scoping documents, database backups, and environment configurations are stored in secure cloud containers with access limited to authorized project scrum members."
    },
    {
      icon: <FaFileContract className="text-2xl text-[#ff4d01]" />,
      title: "4. Cookies & Tracking",
      text: "Our website uses essential analytics cookies to monitor visits, traffic volume, and page navigations. We do not sell, trade, or distribute your email contacts or website activities to third-party advertising companies."
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
            Privacy Policy
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-sm sm:text-base">
            How Universal Soft Lab handles information, client repositories, and codebase confidentiality.
          </p>
        </div>
      </section>

      {/* 2. Policy Sections */}
      <section className="py-24 bg-[#0b0f19]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            
            {/* Context block */}
            <div className="space-y-4">
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Last Updated: June 11, 2026</span>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Universal Soft Lab, the technology brand of Universal Tradecom Pvt. Ltd., is committed to protecting the integrity of your codebases, system logs, and business metrics. This Privacy Policy details our operational data handling procedures.
              </p>
            </div>

            {/* Detailed sections */}
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

            {/* Footer-Contact Notice */}
            <div className="pt-8 border-t border-gray-900 text-center space-y-4">
              <h3 className="text-white font-bold text-lg font-sans">Questions Regarding Data Safety?</h3>
              <p className="text-sm max-w-md mx-auto">
                If you have queries regarding code containment, NDA signing, or data storage, please write directly to:
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
}

export default PrivacyPolicy;
