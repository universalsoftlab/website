import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const { pathname } = useLocation();

  // Reset scroll and update dynamic SEO headers on route transitions
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const seoMap = {
      "/": {
        title: "Universal Soft Lab | Product Engineering & Custom Software Development",
        desc: "Custom software development & product engineering company backed by 22+ years of experience. We build scalable web, mobile, and cloud apps using React, Flutter, .NET, and PostgreSQL."
      },
      "/about": {
        title: "About Our Agency | Universal Soft Lab",
        desc: "Backed by 22+ years of leadership, Universal Soft Lab is an elite 8-member engineering squad specializing in custom enterprise applications and legacy WinForms modernization."
      },
      "/services": {
        title: "Product Engineering Services | Universal Soft Lab",
        desc: "Explore our software engineering capabilities: React/Node.js web portals, Flutter mobile apps, database performance tuning, and agile SaaS MVP development packages."
      },
      "/products": {
        title: "Case Studies & SaaS Projects Portfolio | Universal Soft Lab",
        desc: "Read our outcomes-focused case studies. Review real-world project outcomes where we resolved core cooperative banking lag, cotton mill inventory delays, and PostgreSQL indexing."
      },
      "/team": {
        title: "Our Engineering Team Board | Universal Soft Lab",
        desc: "Meet the 8 multidisciplinary professionals at Universal Soft Lab. Solution architects, mobile engineers, full-stack C#/.NET developers, database tune-up leads, and QA specialists."
      },
      "/gallery": {
        title: "Office Workspace & Culture Gallery | Universal Soft Lab",
        desc: "Look inside our Indore engineering labs, developer sprint plan checks, database optimization certifications, and strategy huddle logs."
      },
      "/contact": {
        title: "Contact Us & Scopes Scanned | Universal Soft Lab",
        desc: "Connect directly with founder Hemant Mehta and our solution architects to scoping your React/Flutter mobile app, .NET API development, or legacy migration."
      },
      "/Contect": {
        title: "Contact Us & Scopes Scanned | Universal Soft Lab",
        desc: "Connect directly with founder Hemant Mehta and our solution architects to scoping your React/Flutter mobile app, .NET API development, or legacy migration."
      },
      "/privacy-policy": {
        title: "Privacy Policy | Universal Soft Lab",
        desc: "Privacy Statement and Information handling protocols of Universal Soft Lab (Technology Brand of Universal Tradecom Pvt. Ltd.)."
      },
      "/terms": {
        title: "Terms & Conditions | Universal Soft Lab",
        desc: "Terms of service, engineering retainer conditions, and codebase intellectual property ownership terms."
      },
      "/terms-conditions": {
        title: "Terms & Conditions | Universal Soft Lab",
        desc: "Terms of service, engineering retainer conditions, and codebase intellectual property ownership terms."
      }
    };

    const currentSeo = seoMap[pathname] || seoMap["/"];
    
    // Apply Document Title
    document.title = currentSeo.title;
    
    // Apply Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", currentSeo.desc);
    }
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-[#0b0f19] text-gray-100 antialiased overflow-x-hidden">
      {/* Dynamic ambient backgrounds */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#ff4d01] opacity-[0.03] rounded-full filter blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600 opacity-[0.03] rounded-full filter blur-[120px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '-4s' }}></div>

      {/* Global Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow pt-16">
        <Outlet />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
