import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import HireMe from "./HireMe";
import ProfileCard from "./ProfileCard";
import TextType from "./TextType";

const HeroSection = () => {
  return (
    <motion.div
      className="w-[100%] h-[100vh] flex flex-col md:flex-row pt-20 md:pt-0 gap-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="w-full md:w-[50%] h-[100%] px-10 pt-10 md:pt-0 flex justify-center md:justify-end items-center">
        <ProfileCard
          name="Javi A. Torres"
          title="Software Engineer"
          handle="javicodes"
          status="Online"
          contactText="Contact Me"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log("Contact clicked")}
        />
      </div>
      <div className="w-full md:w-[50%] h-[100%] flex justify-center items-start pl-10 pt-10 md:pt-0 flex-col">
        <h1 className="text-5xl text-blue-200">Hi I am</h1>
        <p className="text-2xl text-blue-200">
          Bassem <span className="text-blue-500">Ayman</span>
        </p>
        <TextType
          text={["web developer", "frontend expert"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="text-5xl text-blue-500"
        />
        <Button />
        <div className="mt-4">
          <HireMe />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
