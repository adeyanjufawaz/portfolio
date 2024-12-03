import React from "react";
import { BsBootstrapFill } from "react-icons/bs";
import { FaCss3Alt, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { motion } from "framer-motion";

function Technologies() {
  return (
    <div className="mt-8 flex flex-wrap lg:gap-16 gap-12 justify-center items-center lg:p-8 p-4">
      {/* <FaHtml5 className="techIcons" /> */}
      <motion.div
        initial={{ x: "40%", opacity: 0 }} // Start off-screen to the right
        whileInView={{ x: 0, opacity: 1 }} // Move to the original position
        transition={{
          duration: 0.7, // Animation duration (in seconds)
          ease: "easeInOut", // Easing function
        }}
      >
        <TiHtml5 className="techIcons" />
      </motion.div>
      <motion.div
        initial={{ x: "40%", opacity: 0 }} // Start off-screen to the right
        whileInView={{ x: 0, opacity: 1 }} // Move to the original position
        transition={{
          duration: 0.7, // Animation duration (in seconds)
          ease: "easeInOut", // Easing function
        }}
      >
        <FaCss3Alt className="techIcons" />
      </motion.div>
      <motion.div
        initial={{ x: "40%", opacity: 0 }} // Start off-screen to the right
        whileInView={{ x: 0, opacity: 1 }} // Move to the original position
        transition={{
          duration: 0.7, // Animation duration (in seconds)
          ease: "easeInOut", // Easing function
        }}
      >
        <IoLogoJavascript className="techIcons" />
      </motion.div>
      <motion.div
        initial={{ x: "40%", opacity: 0 }} // Start off-screen to the right
        whileInView={{ x: 0, opacity: 1 }} // Move to the original position
        transition={{
          duration: 0.7, // Animation duration (in seconds)
          ease: "easeInOut", // Easing function
        }}
      >
        <RiTailwindCssFill className="techIcons" />
      </motion.div>
      <motion.div
        initial={{ x: "40%", opacity: 0 }} // Start off-screen to the right
        whileInView={{ x: 0, opacity: 1 }} // Move to the original position
        transition={{
          duration: 0.7, // Animation duration (in seconds)
          ease: "easeInOut", // Easing function
        }}
      >
        <FaGithub className="techIcons" />
      </motion.div>
      <motion.div
        initial={{ x: "40%", opacity: 0 }} // Start off-screen to the right
        whileInView={{ x: 0, opacity: 1 }} // Move to the original position
        transition={{
          duration: 0.7, // Animation duration (in seconds)
          ease: "easeInOut", // Easing function
        }}
      >
        <BsBootstrapFill className="techIcons" />
      </motion.div>
      <motion.div
        initial={{ x: "40%", opacity: 0 }} // Start off-screen to the right
        whileInView={{ x: 0, opacity: 1 }} // Move to the original position
        transition={{
          duration: 0.7, // Animation duration (in seconds)
          ease: "easeInOut", // Easing function
        }}
      >
        <FaReact className="techIcons" />
      </motion.div>
      <motion.div
        initial={{ x: "40%", opacity: 0 }} // Start off-screen to the right
        whileInView={{ x: 0, opacity: 1 }} // Move to the original position
        transition={{
          duration: 0.7, // Animation duration (in seconds)
          ease: "easeInOut", // Easing function
        }}
      >
        <FaReact className="techIcons" />
      </motion.div>
    </div>
  );
}

export default Technologies;
