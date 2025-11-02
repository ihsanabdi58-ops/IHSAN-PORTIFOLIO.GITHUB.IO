import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function IhsanPortfolio() {
  const [activeSection, setActiveSection] = useState('summary');
  const sectionRefs = {
    summary: useRef(null),
    competencies: useRef(null),
    experience: useRef(null),
    achievements: useRef(null),
    languages: useRef(null),
  };

  const sections = [
    { id: 'summary', label: 'Professional Summary' },
    { id: 'competencies', label: 'Core Competencies' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Key Achievements' },
    { id: 'languages', label: 'Languages' },
  ];

  const scrollToSection = (id) => {
    sectionRefs[id].current.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  const handleScroll = () => {
    const offsets = sections.map(sec => ({
      id: sec.id,
      offset: sectionRefs[sec.id].current.getBoundingClientRect().top,
    }));
    const current = offsets.find(sec => sec.offset >= 0 && sec.offset < window.innerHeight / 2);
    if (current) setActiveSection(current.id);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6 md:p-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Ihsan Abdi Hassen</h1>
        <p className="text-lg text-gray-600">Financial Analyst | Procurement & Logistics Specialist | Researcher</p>
        <p className="text-gray-500 mt-1">Email: ihsanabdi58@gmail.com | Phone: +251 919 527 436 | Ethiopia</p>
      </header>

      <nav className="flex justify-center gap-4 mb-10 sticky top-0 bg-gray-50 py-2 z-10">
        {sections.map(section => (
          <button
            key={section.id}
            className={`px-4 py-2 rounded-md ${activeSection === section.id ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            onClick={() => scrollToSection(section.id)}
          >
            {section.label}
          </button>
        ))}
      </nav>

      <main>
        <motion.div ref={sectionRefs.summary} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card className="mb-8">
            <CardHeader><CardTitle>Professional Summary</CardTitle></CardHeader>
            <CardContent>
              <p>
                I am a results-oriented <strong>Financial Analyst</strong> with extensive experience in <strong>Procurement, Logistics, Accounting, and Entrepreneurship</strong>. I specialize in financial reporting, supply chain optimization, and strategic business planning. My diverse background has equipped me with strong analytical, organizational, and leadership skills that drive efficiency, transparency, and sustainable growth.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div ref={sectionRefs.competencies} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <Card className="mb-8">
            <CardHeader><CardTitle>Core Competencies</CardTitle></CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside">
                <li>Financial Analysis & Reporting</li>
                <li>Procurement & Supply Chain Management</li>
                <li>Logistics & Inventory Control</li>
                <li>Accounting & Auditing</li>
                <li>Budgeting & Forecasting</li>
                <li>Risk Assessment & Management</li>
                <li>Business Strategy & Entrepreneurship</li>
                <li>Leadership & Mentorship</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div ref={sectionRefs.experience} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <Card className="mb-8">
            <CardHeader><CardTitle>Professional Experience</CardTitle></CardHeader>
            <CardContent>
              <h3 className="font-semibold text-lg">Financial Analyst</h3>
              <p className="text-gray-600 mb-3">Various Organizations & Banks — Ethiopia</p>
              <ul className="list-disc list-inside mb-4">
                <li>Conducted financial analyses, audits, and performance assessments.</li>
                <li>Prepared reports and forecasts to guide strategic decisions.</li>
                <li>Ensured compliance with financial policies and standards.</li>
              </ul>

              <h3 className="font-semibold text-lg">Procurement and Logistics Officer</h3>
              <p className="text-gray-600 mb-3">Various Organizations — Ethiopia</p>
              <ul className="list-disc list-inside mb-4">
                <li>Oversaw procurement operations and supplier management.</li>
                <li>Implemented logistics systems and optimized inventory control.</li>
                <li>Achieved cost savings through strategic sourcing and planning.</li>
              </ul>

              <h3 className="font-semibold text-lg">Entrepreneur & Business Founder</h3>
              <p className="text-gray-600 mb-3">Self-Founded Ventures — Ethiopia</p>
              <ul className="list-disc list-inside">
                <li>Established and managed small and medium enterprises.</li>
                <li>Supervised procurement, financial, and logistics operations.</li>
                <li>Promoted youth entrepreneurship and financial literacy.</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div ref={sectionRefs.achievements} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <Card className="mb-8">
            <CardHeader><CardTitle>Key Achievements</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Improved financial accountability and reporting standards.</li>
                <li>Strengthened procurement and logistics efficiency frameworks.</li>
                <li>Enhanced operational transparency and cost control.</li>
                <li>Contributed to research on community-based risk management.</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div ref={sectionRefs.languages} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <Card>
            <CardHeader><CardTitle>Languages</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Somali — Native</li>
                <li>Amharic — Fluent</li>
                <li>English — Fluent</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
