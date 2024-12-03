import React, { useEffect, useRef, useState } from "react";
import "../src/components/navbar.css";
import profileImg from "../public/img/me1.jpeg";
import { Typewriter } from "react-simple-typewriter";
import Technologies from "./Technologies";
import { CiMenuFries } from "react-icons/ci";
import Contact from "./components/Contact";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";

function App() {
  const [displayNav, setDisplaynav] = useState(true);
  const [navHeight, setNavHeight] = useState(false);

  const changeBg = () => {
    const navHgt = window.scrollY;
    navHgt >= 70 ? setNavHeight(true) : setNavHeight(false);
  };
  window.addEventListener("scroll", changeBg);
  const toggleNav = () => setDisplaynav((prev) => !prev);

  // DIV REFS
  const aboutRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();
  const homeRef = useRef();

  const scrollToElement = (el) => {
    window.scrollTo({
      top: el.current?.offsetTop,
      behavior: "smooth",
    });
    setDisplaynav((prev) => !prev);
  };

  return (
    <div>
      <nav className={navHeight ? "navbar active" : "navbar"}>
        <h1
          className="logo gradient whileInView-bounce"
          onClick={() => {
            // scrollToElement(homeRef)
            window.scrollTo({
              top: homeRef.current?.offsetTop,
              behavior: "smooth",
            });
          }}
        >
          eliteDev
        </h1>
        <ul id="menuList" className={displayNav ? "navNone" : "navBlock"}>
          <li
            className="text-lg uppercase"
            onClick={() => scrollToElement(aboutRef)}
          >
            About
          </li>
          <li
            className="text-lg uppercase"
            onClick={() => scrollToElement(portfolioRef)}
          >
            Projects
          </li>
          <li
            className="text-lg uppercase"
            onClick={() => scrollToElement(contactRef)}
          >
            Contact Me
          </li>
        </ul>
        <div id="menuIcons" onClick={toggleNav}>
          <CiMenuFries
            style={{ color: "black", fontSize: "1.5em", fontWeight: "bold " }}
          />
        </div>
      </nav>
      <section
        className=" p-10 grid lg:grid-cols-2 gap-2 grid-cols-1 justify-center items-start "
        ref={homeRef}
      >
        <div className=" ">
          <h2
            style={{ color: "#f32170", fontWeight: "500", fontSize: "28px" }}
            className=""
          >
            HELLO,
          </h2>
          <h1 className="mt-6 text-4xl">
            I'm <span className="font-medium ">Fawaz</span> <br /> a{" "}
            <span
              style={{ color: "#f32170", fontWeight: "500" }}
              className="whileInView-pulse"
            >
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[" Front End Developer"]}
                loop={1}
                typeSpeed={100}
                delaySpeed={1200}
              />
            </span>
          </h1>
          <p className="mt-6 text-lg">
            <Typewriter
              words={[
                `  I translate design mockups and wireframes into fully functional and
            efficient web pages using Html, Css, JavaScript, React and other front end framweorks . I work closely
            with designers, back-end developers, and other stakeholders to
            deliver a cohesive and engaging user experience.`,
              ]}
              loop={1}
              typeSpeed={30}
              delaySpeed={1200}
            />
          </p>
        </div>
        <div className=" h-[300px] w-[300px] md:h-[400px] md:w-[400px]  self-center place-self-center lg:self-end lg:place-self-end rounded-[50%]">
          <img src={profileImg} alt="MyImage" className="image" />
        </div>
      </section>

      <section
        className="lg:px-12 px-6 py-16 overflow-hidden bg-dark text-pry"
        ref={aboutRef}
      >
        <div className="allAbtMe">
          <motion.h1
            initial={{ x: "10%", opacity: 0 }} // Start off-screen at the bottom and invisible
            whileInView={{ x: 0, opacity: 1 }} // Move to its original position and become visible
            transition={{
              duration: 0.5, // Animation duration (in seconds)
              ease: "easeOut", // Easing function
            }}
            className="text-5xl uppercase font-bold text-red-500"
          >
            About Me
          </motion.h1>
          <motion.h2
            initial={{ x: "10%", opacity: 0 }} // Start off-screen at the bottom and invisible
            whileInView={{ x: 0, opacity: 1 }} // Move to its original position and become visible
            transition={{
              duration: 0.5, // Animation duration (in seconds)
              ease: "easeOut", // Easing function
            }}
            className=" my-6 text-2xl font-semibold"
          >
            Hi! I'm Fawaz
          </motion.h2>
          <motion.p
            initial={{ x: "10%", opacity: 0 }} // Start off-screen at the bottom and invisible
            whileInView={{ x: 0, opacity: 1 }} // Move to its original position and become visible
            transition={{
              duration: 0.5, // Animation duration (in seconds)
              ease: "easeOut", // Easing function
            }}
            className="leading-9 text-xl"
          >
            Welcome to my corner of the web. I’m a front-end developer with a
            love for storytelling through code. My journey began with a
            curiosity for how websites are made and has since grown into a
            full-fledged career where I get to build engaging and dynamic online
            experiences.
          </motion.p>
        </div>
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="myJourney "
        >
          <h2 className=" my-6 text-4xl font-semibold text-red-500">
            My Journey:
          </h2>
          <ul>
            <motion.li
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="leading-9 text-xl"
            >
              Early Days: Started with basic HTML and CSS, experimenting with
              web design in 2022.
            </motion.li>

            <motion.li
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:leading-9 leading-7 text-xl mt-6"
            >
              <h3>Growth:</h3>
              <ul>
                <p className="ml-8">
                  - Delved into JavaScript and React enhancing my skills and
                  taking on larger projects.
                </p>
                <p className="ml-8 lg:my-0 my-6 ">
                  {" "}
                  - A certified graduate of front end enineering at AltSchool
                  Africa in 2023{" "}
                </p>
                <p className="ml-8 lg:my-0 my-6 ">
                  {" "}
                  - Currently, I am pursuing a Bachelor of Technology (BTech) in
                  Software engineering at Federal University of Technology,
                  Akure (FUTA), with an expected graduation in 2025.
                </p>
              </ul>
            </motion.li>
            <motion.li
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="leading-9 text-xl mt-6"
            >
              Today: Focused on creating performant and accessible websites that
              delight users.
            </motion.li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className=" my-6 text-4xl font-semibold text-red-500">
            Technical Expertise:
          </h2>
          <ul>
            <li className="leading-9 text-xl">
              - Languages: HTML, CSS, JavaScript, Typescript, NextJs
            </li>
            <li className="leading-9 text-xl">
              - Frameworks: React, Boostrap, Tailwind
            </li>
            <li className="leading-9 text-xl">
              - Tools: Git, Webpack, SASS/SCSS
            </li>
          </ul>
        </motion.div>
        <Technologies />
      </section>

      <motion.section
        initial={{ y: 30, opacity: 0, scale: 0.3 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="p-8 pb-14 bg-pry "
        ref={portfolioRef}
      >
        <h2 className="text-4xl text-center my-6 font-semibold text-red-500">
          My projects
        </h2>
        <div className="flex gap-5 lg:gap-16 flex-wrap  justify-center items-center">
          {/* Card */}
          <div className="bg-white p-2 rounded-lg shadow-md shadow-gray-300 w-30 lg:w-64">
            <div className="h-12 lg:h-32 w-full bg-cover bg-center  bg-[url('../public/img/project1.png')]"></div>
            <div className="mt-3 flex flex-col gap-2">
              <h2 className="font-semibold text-red-500 text-sm lg:text-xl">
                Cinemanest
              </h2>
              <a
                href="https://github.com/adeyanjufawaz/CinemaNest"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 text-white p-1 text-sm hover:opacity-75"
              >
                <div className="lg:text-base flex items-center gap-2 text-xs">
                  <FaGithub />
                  <p>Github Link</p>
                </div>
              </a>
              <a
                href="https://cinemanest.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sec text-white p-1 text-sm hover:opacity-75"
              >
                <div className="lg:text-base flex items-center gap-2 text-xs">
                  <CiLink />
                  <p>Live Demo</p>
                </div>
              </a>
            </div>
          </div>
          {/* Card */}
          <div className="bg-white p-2 rounded-lg shadow-md shadow-gray-300 w-30 lg:w-64">
            <div className="h-12 lg:h-32 w-full bg-cover bg-center  bg-[url('../public/img/project2.png')]"></div>
            <div className="mt-3 flex flex-col gap-2">
              <h2 className="font-semibold text-red-500 text-sm lg:text-xl">
                Melodify
              </h2>
              <a
                href="https://github.com/adeyanjufawaz/melodify"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 text-white p-1 text-sm hover:opacity-75"
              >
                <div className="lg:text-base flex items-center gap-2 text-xs">
                  <FaGithub />
                  <p>Github Link</p>
                </div>
              </a>
              <a
                href="https://melodiffy.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sec text-white p-1 text-sm hover:opacity-75"
              >
                <div className="lg:text-base flex items-center gap-2 text-xs">
                  <CiLink />
                  <p>Live Demo</p>
                </div>
              </a>
            </div>
          </div>
          {/* Card */}
          <div className="bg-white p-2 rounded-lg shadow-md shadow-gray-300 w-30 lg:w-64">
            <div className="h-12 lg:h-32 w-full bg-cover bg-center  bg-[url('../public/img/project3.png')]"></div>
            <div className="mt-3 flex flex-col gap-2">
              <h2 className="font-semibold text-red-500 text-sm lg:text-xl">
                Chatter
              </h2>
              <a
                href="https://github.com/adeyanjufawaz/Component-Sidebae"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 text-white p-1 text-sm hover:opacity-75"
              >
                <div className="lg:text-base flex items-center gap-2 text-xs">
                  <FaGithub />
                  <p>Github Link</p>
                </div>
              </a>
              <a
                href="https://chatter001.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sec text-white p-1 text-sm hover:opacity-75"
              >
                <div className="lg:text-base flex items-center gap-2 text-xs">
                  <CiLink />
                  <p>Live Demo</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      <section
        className=" px-6 py-12 flex flex-col justify-center items-center bg-dark"
        ref={contactRef}
      >
        <h2 className="text-4xl font-semibold text-red-500">
          I'd love to hear from you
        </h2>
        <Contact />
      </section>
    </div>
  );
}

export default App;
