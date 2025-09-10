import React from "react";
import { motion } from "framer-motion";
import TiltedCard from "./TiltedCard";
import DecryptedText from "./DecryptedText";
import CountUp from "./CountUp";

const SecSection = () => {
  return (
    <motion.div
      id="about-section"
      className="mx-auto mt-8 p-4 md:p-0 flex flex-col md:flex-row flex-wrap h-auto md:h-[80vh] w-[90%] md:w-[70%]"
      style={{
        boxShadow: "0 10px 20px rgba(0, 193, 255, 0.3)",
        borderRadius: "8px",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {" "}
      <div className="w-full md:w-[40%] h-auto md:h-full flex items-center justify-center">
        <div className="w-48 h-48 md:w-72 md:h-72">
          <TiltedCard
            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
            altText="BASEM AYMN - FWD Album Cover"
            captionText="BASEM AYMN - FWD"
            containerHeight="100%"
            containerWidth="100%"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">BASEM AYMN - FWD</p>
            }
          />
        </div>
      </div>
      <div className="w-full md:w-[60%] h-auto md:h-full text-center text-4xl md:text-6xl text-white flex flex-col">
        <h1 style={{ fontFamily: '"Fugaz One", sans-serif' }}>about me </h1>
        <div
          className="text-base md:text-xl min-h-[400px]"
          style={{
            fontFamily: '"Instrument Sans", sans-serif',
            marginTop: "1rem",
            textAlign: "left",
            color: "#fff",
            lineHeight: "1.6",
            flexGrow: 1,
          }}
        >
          <p style={{ marginBottom: "1rem" }}>
            <DecryptedText
              text="I’m a passionate Front-End Web Developer with a strong focus on creating clean, responsive, and user-friendly web applications. Over the past period, I’ve built solid experience working with HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, and Bootstrap, which allows me to deliver modern interfaces that adapt to different devices and screen sizes."
              animateOn="view"
              sequential={true}
              useOriginalCharsOnly={true}
              revealDirection="start"
              speed={10}
              maxIterations={10}
              className=""
              encryptedClassName="text-gray-500"
            />
          </p>
          <p style={{ marginBottom: "1rem" }}>
            <DecryptedText
              text="Alongside development, I have a good foundation in UI/UX design and work with tools like Figma to craft intuitive user experiences before bringing them to life in code. I also integrate libraries such as React Bits and others to accelerate development and add advanced functionality without sacrificing quality."
              animateOn="view"
              sequential={true}
              useOriginalCharsOnly={true}
              revealDirection="start"
              speed={10}
              maxIterations={10}
              className=""
              encryptedClassName="text-gray-500"
            />
          </p>
        </div>
        <div
          className="mt-2 flex justify-center gap-8 text-3xl mb-4"
          style={{ fontFamily: '"Instrument Sans", sans-serif' }}
        >
          <div className="text-center">
            <p>
              <CountUp to={20} from={0} direction="up" duration={1} className="text-3xl" /><span style={{ color: "rgba(0, 193, 255, 1)" }}>+</span>
            </p>
            <p>Projects Finished</p>
          </div>
          <div className="text-center">
            <p>
              1<span style={{ color: "rgba(0, 193, 255, 1)" }}>+</span>
            </p>
            <p>Year Experience</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SecSection;
