import React from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import Loader from "./Loader";

const ConSection = () => {
  return (
    <motion.div
      className="w-auto h-auto  mt-64 md:mt-0 flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h1
        className="text-center text-3xl text-white mb-4"
        style={{ fontFamily: '"Fugaz One", sans-serif' }}
      >
        contact me
      </h1>
      <p
        className="text-center text-2xl text-white mb-4"
        style={{ fontFamily: '"Instrument Sans", sans-serif' }}
      >
        Let's Work Togther !
      </p>
      <div className="flex flex-row justify-center items-center gap-1 md:gap-16">
        <ContactForm />
        <Loader />
      </div>
    </motion.div>
  );
};

export default ConSection;
