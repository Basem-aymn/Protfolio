import React from "react";
import { motion } from "framer-motion";
import ChromaGrid from "./ChromaGrid";

const ProSection = () => {
  return (
    <motion.div
      className="w-full h-screen flex flex-col justify-center items-center mt-96 md:mt-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h1
        className="text-center text-3xl text-white mb-4"
        style={{ fontFamily: '"Fugaz One", sans-serif' }}
      >
        Projects
      </h1>
      <div style={{ height: "auto", position: "relative", width: "60%" }}>
        <ChromaGrid
          className="flex justify-between "
          items={[
            {
              image: "/screenshot-2025-09-10-195336.png",
              title: "Sarah Johnson",
              subtitle: "Frontend Developer",
              handle: "@BASEM AYMN",
              borderColor: "#3B82F6",
              gradient: "linear-gradient(145deg, #3B82F6, #000)",
              url: "https://demo-1-cfwn.vercel.app",
              imageClass: "w-[400px] h-[250px] object-cover",
            },
            {
              image: "/src/assets/Screenshot 2025-09-20 152902.png",
              title: "TO DO LIST",
              subtitle: "TO DO LIST APP ",
              handle: "@BASEM AYMN",
              borderColor: "#10B981",
              gradient: "linear-gradient(180deg, #10B981, #000)",
              url: "https://to-do-list-ochre-alpha-28.vercel.app/",
              imageClass: "w-[400px] h-[250px] object-cover",
            },
            {
              image: "/src/assets/Screenshot 2025-09-29 181236.png",
              title: "Taxi website",
              subtitle: "Taxi website",
              handle: "@BASEM AYMN",
              borderColor: "#F59E0B",
              gradient: "linear-gradient(165deg, #F59E0B, #000)",
              url: "https://repo-delta-eight.vercel.app/",
              imageClass: "w-[400px] h-[250px] object-cover",
            },
          ]}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div>
    </motion.div>
  );
};

export default ProSection;
