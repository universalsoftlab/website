import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaArrowRight, 
  FaFigma, 
  FaLaptopCode, 
  FaMobileAlt, 
  FaDatabase, 
  FaSync, 
  FaCheckDouble, 
  FaQuoteLeft, 
  FaRegLightbulb, 
  FaAward, 
  FaUsers,
  FaShieldAlt
} from "react-icons/fa";

function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const stats = [
    { value: "22+", label: "Years Experience", icon: <FaAward className="text-2xl text-[#ff4d01]" /> },
    { value: "8", label: "Elite Engineers", icon: <FaUsers className="text-2xl text-[#ff4d01]" /> },
    { value: "100+", label: "Delivered Products", icon: <FaLaptopCode className="text-2xl text-[#ff4d01]" /> },
    { value: "99%", label: "Client Retention", icon: <FaShieldAlt className="text-2xl text-[#ff4d01]" /> }
  ];

  const services = [
    {
      icon: <FaFigma className="text-4xl text-[#ff4d01]" />,
      title: "Product Discovery & Design",
      desc: "Transform ideas into functional wireframes, pixel-perfect Figma UI/UX designs, and interactive prototypes tailored for user success.",
      techs: ["Figma", "Wireframing", "Interactive Prototypes", "Design Systems"]
    },
    {
      icon: <FaLaptopCode className="text-4xl text-[#ff4d01]" />,
      title: "Web App Development",
      desc: "Build scalable, responsive web solutions with high performance using modern frontend and backend architectures.",
      techs: ["React", "ASP.NET Core", "Node.js", "Golang (Gin)"]
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#ff4d01]" />,
      title: "Mobile App Development",
      desc: "Launch feature-rich cross-platform iOS and Android apps with native-grade speed and responsive interactions.",
      techs: ["Flutter", "React Native", "API Integrations", "App Store Publishing"]
    },
    {
      icon: <FaDatabase className="text-4xl text-[#ff4d01]" />,
      title: "Database Engineering",
      desc: "Design enterprise databases, implement clustering, tune stored procedures, and optimize slow queries for maximum speed.",
      techs: ["PostgreSQL", "SQL Server", "MongoDB", "Query Tuning"]
    },
    {
      icon: <FaSync className="text-4xl text-[#ff4d01]" />,
      title: "Legacy Modernization",
      desc: "Upgrade legacy desktop Windows Forms apps and outdated .NET Framework portals to modern React/cloud microservices.",
      techs: ["WinForms to React", ".NET Modernization", "Monolith splitting"]
    },
    {
      icon: <FaCheckDouble className="text-4xl text-[#ff4d01]" />,
      title: "QA & Test Automation",
      desc: "Deliver stable builds and maintain regression security through comprehensive unit, integration, and API testing suites.",
      techs: ["Jest", "Vitest", "API Testing", "Regression Checks"]
    }
  ];

  const testimonials = [
    {
      company: "SBI Bank Employee Society",
      sector: "Banking & Finance",
      text: "The customized banking and credit software designed by Universal Soft Lab streamlined our member deposits and automated interest calculations. Their security implementation and domain knowledge are exceptional.",
      author: "Society Secretary"
    },
    {
      company: "Hardiya Ete Hospital",
      sector: "Healthcare System",
      text: "Our patient registry, pharmacy stock, and billing processes are now fully unified. The modern dashboard and cloud stability delivered by their engineering squad transformed our day-to-day operations.",
      author: "Chief Operations Director"
    },
    {
      company: "M.P. Police Department",
      sector: "Government Security",
      text: "They designed a robust case-tracking and personnel database system that handles high loads. Universal Soft Lab demonstrated high engineering competence, working in tight security compliance.",
      author: "Superintendent"
    }
  ];

  const clientsList = [
    "SBI Bank Society",
    "M.P. Police Dept",
    "Hardiya Hospital",
    "IPC Bank Society",
    "Sarafa Association",
    "J.N. Soot Mill",
    "Indore Municipal Corp"
  ];

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#ff4d01]/10 to-indigo-600/10 rounded-full filter blur-[100px] pointer-events-none animate-pulse-slow"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-900 border border-gray-800 text-xs font-semibold text-gray-300">
            <span className="w-2 h-2 rounded-full bg-[#ff4d01]"></span>
            Custom Software & Product Engineering Partner
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Product Engineering & <br />
            <span className="text-gradient">Legacy Modernization</span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed font-sans">
            Backed by <span className="text-white font-medium">22+ years of software excellence</span>, we help startups and enterprises design, build, and optimize scalable digital products.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-4xl mx-auto">
            <Link
              to="/contact?subject=Free%20Database%20Performance%20Review&message=Hi%20Hemant%2C%20I%20would%20like%20to%20request%20a%20free%20Database%20Performance%20Review%20for%20our%20system.%20Here%20are%20some%20details%20about%20our%20database%20technology%20and%20current%20performance%20bottlenecks%3A"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#ff4d01] hover:bg-[#ff5d1a] text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-[#ff4d01]/25 transition-all duration-300 transform hover:-translate-y-0.5 text-sm md:text-base text-center"
            >
              <span>Request a Free Database Performance Review</span>
              <FaArrowRight className="text-xs flex-shrink-0" />
            </Link>
            <Link
              to="/contact?subject=Legacy%20Code%20Modernization%20Audit&message=Hi%20Hemant%2C%20I%20would%20like%20to%20schedule%20a%20Legacy%20Code%20Modernization%20Audit%20for%20our%20application.%20Here%20are%20some%20details%20about%20our%20existing%20desktop/web%20systems%20and%20modernization%20goals%3A"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-gray-900 hover:bg-gray-850 text-white border border-gray-800/80 px-6 py-4 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-0.5 text-sm md:text-base text-center hover:border-gray-700"
            >
              <span>Schedule a Legacy Code Modernization Audit</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Trusted By Banner (Infinite Scroll Effect) */}
      <section className="bg-gray-950 py-10 border-y border-gray-900/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-4">
          <p className="text-center text-xs font-bold uppercase tracking-wider text-gray-500">
            Trusted by Reputable Brands & Organizations
          </p>
        </div>
        <div className="relative w-full overflow-hidden flex items-center">
          <div className="flex whitespace-nowrap animate-scroll-infinite gap-16 py-2">
            {/* Direct and duplicated items for scrolling wrap */}
            {[...clientsList, ...clientsList].map((client, index) => (
              <span 
                key={index} 
                className="text-gray-400 hover:text-white font-bold text-lg sm:text-xl tracking-tight transition-colors cursor-default"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Stats Section */}
      <section className="py-20 bg-[#090d16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white">{stat.value}</span>
                  {stat.icon}
                </div>
                <p className="text-gray-400 text-sm sm:text-base font-medium font-sans">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Service Capabilities */}
      <section className="py-24 bg-[#0b0f19] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-[#ff4d01] text-xs font-bold uppercase tracking-widest">Our Expertise</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Comprehensive Product Engineering Services
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              We cover the entire lifecycle of software engineering, utilizing cutting-edge stacks to build resilient web portals, cross-platform apps, and high-performance databases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="glass-card p-8 rounded-2xl flex flex-col justify-between relative group overflow-hidden"
              >
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-[#ff4d01]/30 transition-colors">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-[#ff4d01] transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-sans">
                    {service.desc}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-900 flex flex-wrap gap-2">
                  {service.techs.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[11px] bg-gray-900 border border-gray-800/80 text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Differentiators Section */}
      <section className="py-24 bg-[#080b13] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[#ff4d01] text-xs font-bold uppercase tracking-widest">Why Partner With Us?</span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Deep Database Mastery & Legacy Transitions
              </h3>
              <p className="text-gray-400 leading-relaxed font-sans">
                Many development firms code standard features. Universal Soft Lab sets itself apart by mastering complex backend refactoring, SQL optimization, and migration of highly coupled monolithic programs to decoupled cloud structures.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded bg-[#ff4d01]/10 flex items-center justify-center text-[#ff4d01] flex-shrink-0">✓</div>
                  <p className="text-gray-300 font-sans text-sm sm:text-base">
                    <strong>Advanced Database Tuning:</strong> We design complex query plans and index tuning to speed up database responses by up to 70%.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded bg-[#ff4d01]/10 flex items-center justify-center text-[#ff4d01] flex-shrink-0">✓</div>
                  <p className="text-gray-300 font-sans text-sm sm:text-base">
                    <strong>Zero-Risk Migration:</strong> Safe ports from local WinForms or old .NET platforms to robust web containers with minimal downtime.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded bg-[#ff4d01]/10 flex items-center justify-center text-[#ff4d01] flex-shrink-0">✓</div>
                  <p className="text-gray-300 font-sans text-sm sm:text-base">
                    <strong>Dedicated Squad Models:</strong> Team compositions of senior UI, React/Flutter devs, C# architects, and QA professionals billed on standard monthly schedules.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="glass-card p-6 sm:p-10 rounded-2xl relative">
                <div className="absolute top-4 right-4 w-24 h-24 bg-indigo-600/10 rounded-full filter blur-xl pointer-events-none"></div>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <FaRegLightbulb className="text-[#ff4d01]" />
                  <span>The Enterprise Engineering Difference</span>
                </h4>
                <div className="space-y-6 text-sm font-sans text-gray-400 leading-relaxed">
                  <div className="p-4 rounded-xl bg-gray-950 border border-gray-900">
                    <span className="text-white font-bold block mb-1">Database Optimization Focus</span>
                    Slow database responses destroy conversions. Our database engineers target long-running procedures, optimize transaction logs, and isolate indexes to maintain stability.
                  </div>
                  <div className="p-4 rounded-xl bg-gray-950 border border-gray-900">
                    <span className="text-white font-bold block mb-1">Architecture-First Coding</span>
                    We map domain boundaries and data structures before coding, utilizing automated tests with Jest and Vitest to secure continuous code integration.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section className="py-24 bg-[#090d16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-[#ff4d01] text-xs font-bold uppercase tracking-widest">Client Feedback</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Validated Success Metrics
            </h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 sm:p-12 rounded-2xl relative shadow-2xl">
              <FaQuoteLeft className="absolute top-6 left-6 text-6xl text-[#ff4d01]/10 pointer-events-none" />
              <div className="space-y-6 relative z-10">
                <p className="text-lg sm:text-xl text-gray-200 italic leading-relaxed font-sans">
                  "{testimonials[activeTestimonial].text}"
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-gray-800 pt-6 gap-4">
                  <div>
                    <h4 className="text-white font-bold text-lg">{testimonials[activeTestimonial].company}</h4>
                    <p className="text-[#ff4d01] text-sm font-medium">{testimonials[activeTestimonial].sector}</p>
                  </div>
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                    — {testimonials[activeTestimonial].author}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((t, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                    activeTestimonial === idx 
                      ? "bg-[#ff4d01] w-8" 
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                  aria-label={`Testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA Banner */}
      <section className="py-20 bg-gradient-to-br from-[#0b0f19] to-gray-950 relative border-t border-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 z-10">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            Ready to Accelerate Your Product Timeline?
          </h3>
          <p className="max-w-2xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed font-sans">
            Connect directly with founder Hemant Mehta and our solution architects to structure your technology roadmap, allocate dedicated engineers, or explore legacy modernization.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#ff4d01] hover:bg-[#ff5d1a] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-[#ff4d01]/10 hover:shadow-[#ff4d01]/25 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Schedule Free Strategy Call</span>
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
