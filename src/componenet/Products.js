import React from "react";
import { Link } from "react-router-dom";
import { 
  FaUniversity, 
  FaDatabase, 
  FaIndustry, 
  FaHospital, 
  FaBuilding, 
  FaCheck,
  FaArrowRight
} from "react-icons/fa";

function Products() {
  const caseStudies = [
    {
      icon: <FaUniversity className="text-3xl text-[#ff4d01]" />,
      title: "COSMOS — Core Banking & Loan Management",
      category: "Banking & Finance",
      challenge: "A credit cooperative society had manual record-keeping for deposits, leading to ledger discrepancies and long auditing queues.",
      solution: "Developed COSMOS, an ASP.NET Core & SQL Server core banking dashboard to automate ledger entries, loan interest calculations, and audit exports.",
      techs: ["ASP.NET Core", "C#", "SQL Server", "Reporting Services"],
      outcome: "Eliminated accounting ledger discrepancies, auto-run interest processing completes in under 5 minutes, 100% auditing compliance."
    },
    {
      icon: <FaDatabase className="text-3xl text-[#ff4d01]" />,
      title: "High-Volume Database Performance Tuning",
      category: "Database Engineering",
      challenge: "Query response delays exceeding 15 seconds on reports for millions of transaction records, overloading backend servers.",
      solution: "Re-indexed critical tables, rewritten nested stored procedures, optimized query compilation plans, and isolated transactional locks in PostgreSQL.",
      techs: ["PostgreSQL", "Query Tuning", "Execution Plan Analysis", "Stored Procs"],
      outcome: "Improved overall query speed by 70%, reduced database server CPU usage from 90% to 25% under peak loads."
    },
    {
      icon: <FaIndustry className="text-3xl text-[#ff4d01]" />,
      title: "Cotton Mill Manufacturing ERP",
      category: "Manufacturing & Logistics",
      challenge: "Raw cotton intake, grade sorting, mill capacity logs, and customer invoicing were managed manually across three separate warehouses.",
      solution: "Constructed an end-to-end manufacturing ERP portal in React, integrated with Node.js backends and hardware weighing APIs for live mill metrics.",
      techs: ["React", "Node.js", "Express", "REST APIs", "AWS"],
      outcome: "A 40% increase in operational scheduling speed, reducing monthly inventory reconciliation cycles from 3 days to real-time."
    },
    {
      icon: <FaHospital className="text-3xl text-[#ff4d01]" />,
      title: "Hospital Operations Management Portal",
      category: "Healthcare",
      challenge: "Slow patient registration queues, overlapping doctor slots, and manual drug counts leading to pharmacy supply leakages.",
      solution: "Engineered a patient portal, integrating doctor calendar schedules, billing systems, and real-time pharmacy inventory tracking.",
      techs: ["React", "C# .NET Core", "PostgreSQL", "Tailwind CSS"],
      outcome: "Reduced patient registration wait times by 50% and closed pharmacy inventory leaks to zero."
    },
    {
      icon: <FaBuilding className="text-3xl text-[#ff4d01]" />,
      title: "Municipal Citizen Service System",
      category: "Government & Governance",
      challenge: "Indore Municipal Corporation Society citizen data records and tax ledger logs were siloed, causing long retrieval delays.",
      solution: "Created an online citizen database engine with indexed property records and bulk ledger Excel importing APIs.",
      techs: ["ASP.NET Core", "SQL Server", "Bulk Import Engines", "Responsive Web"],
      outcome: "Enabled 30% faster document retrievals and increased society tax collection compliance due to modern tracking."
    }
  ];

  return (
    <div className="w-full">
      {/* 1. Header Hero */}
      <section className="relative pt-20 pb-16 bg-[#090d16] border-b border-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[#ff4d01] text-xs font-bold uppercase tracking-widest font-sans">Our Track Record</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Case Studies & <br />
            <span className="text-gradient">Engineered Outcomes</span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-400 font-sans text-sm sm:text-base leading-relaxed">
            We don't just write code; we deliver real-world business results. Explore our case files mapping challenges to high-performing technical solutions.
          </p>
        </div>
      </section>

      {/* 2. Case Files Grid */}
      <section className="py-24 bg-[#0b0f19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((caseFile, idx) => (
              <div 
                key={idx} 
                className="glass-card rounded-2xl p-6 sm:p-10 hover:border-[#ff4d01]/30 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute top-4 right-4 w-32 h-32 bg-indigo-600/5 rounded-full filter blur-2xl pointer-events-none"></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Metadata Column */}
                  <div className="lg:col-span-4 space-y-6">
                    <span className="inline-block text-xs font-bold uppercase tracking-wider bg-[#ff4d01]/10 text-[#ff4d01] border border-[#ff4d01]/20 px-3 py-1 rounded-full">
                      {caseFile.category}
                    </span>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gray-950 border border-gray-800 rounded-xl flex items-center justify-center">
                        {caseFile.icon}
                      </div>
                      <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#ff4d01] transition-colors leading-tight">
                        {caseFile.title}
                      </h2>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Technologies</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {caseFile.techs.map((tech, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="bg-gray-950 border border-gray-800 text-gray-300 px-2 py-1 rounded text-[11px] font-sans font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Narrative Column */}
                  <div className="lg:col-span-8 space-y-6 font-sans">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#ff4d01]">The Challenge</span>
                        <p className="text-gray-400 text-sm leading-relaxed">{caseFile.challenge}</p>
                      </div>
                      <div className="space-y-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">The Solution</span>
                        <p className="text-gray-400 text-sm leading-relaxed">{caseFile.solution}</p>
                      </div>
                    </div>

                    {/* Outcome Highlight Box */}
                    <div className="p-5 rounded-xl bg-gray-950 border border-gray-800 flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                        <FaCheck />
                      </div>
                      <div>
                        <span className="text-white text-xs font-bold uppercase tracking-widest block mb-1">Measurable Business Outcome</span>
                        <p className="text-gray-300 text-sm font-medium leading-relaxed">
                          {caseFile.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Custom MVP CTA Section */}
      <section className="py-20 bg-[#080b13] border-t border-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Have a Technical Bottleneck to Resolve?
          </h2>
          <p className="text-gray-400 font-sans text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Leverage our 22+ years of database architecture and legacy transition experience to audit, plan, and deploy your software solutions.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#ff4d01] hover:bg-[#ff5d1a] text-white px-8 py-3.5 rounded-xl font-bold shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>Schedule Technical Consultation</span>
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
