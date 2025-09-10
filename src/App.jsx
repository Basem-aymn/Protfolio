import { Fragment } from "react";
import { motion } from "framer-motion";
import PillNav from "./components/PillNav";
import HeroSection from "./components/HeroSection";
import SpotlightCard from "./components/SpotlightCard";
import SecSection from "./components/SecSection";
import ProSection from "./components/ProSection";

function App() {
  return (
    <div className="container">
      <div>
        <PillNav
          items={[
          { label: "Home", href: "#hero" },
            { label: "About", href: "/about" },
            { label: "Skills", href: "#skills" },
            { label: "Contact", href: "/contact" },
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        />
      </div>
      <div id="hero">
        <HeroSection />
      </div>
      <motion.div
        id="about"
        className="w-[100%] h-auto mt-90 md:mt-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
       
      </motion.div>
      <motion.section
        id="skills"
        className="w-[100%] h-auto mt-90 md:mt-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-center text-3xl text-white mb-4 custom-class" style={{ fontFamily: '"Fugaz One", sans-serif' }}>
          Skills
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {[
            { name: "HTML5 & CSS3", desc: "Building modern web pages" },
            {
              name: "JavaScript (ES6+)",
              desc: "Interactive and dynamic websites",
            },
            { name: "React.js", desc: "Building reusable UI components" },
            {
              name: "Tailwind CSS & Bootstrap",
              desc: "Fast responsive styling",
            },
            {
              name: "UI/UX & Figma",
              desc: "Designing user-friendly interfaces",
            },
            {
              name: "Libraries Integration",
              desc: "Using React libraries like React Bits",
            },
            { name: "Git & GitHub", desc: "Version control and collaboration" },
            {
              name: "Next.js",
              desc: "React framework for server-side rendering",
            },
            {
              name: "API Handling",
              desc: "Working with RESTful and GraphQL APIs",
            },
          ].map((skill, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.2 }} viewport={{ once: true }}>
              <SpotlightCard
                className="custom-spotlight-card"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div className="text-center">
                  <h2 className="text-white text-xl font-bold">{skill.name}</h2>
                  <p className="text-gray-300 text-sm">{skill.desc}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <motion.div
        id="secsection"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <SecSection />
      </motion.div>
      <motion.div
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <ProSection />
      </motion.div>
    </div>
  );
}

export default App;
