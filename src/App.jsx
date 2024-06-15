import React, { useEffect, useRef, useState } from "react";
import "../src/components/navbar.css";
import profileImg from "../src/img/profile-pic.png";
import { Typewriter } from "react-simple-typewriter";
import { FaHtml5 } from "react-icons/fa";
import Technologies from "./Technologies";
import { CiMenuFries } from "react-icons/ci";
import Contact from "./components/Contact";

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
          className="logo gradient"
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
            Contac Me
          </li>
        </ul>
        <div id="menuIcons" onClick={toggleNav}>
          <CiMenuFries
            style={{ color: "black", fontSize: "1.5em", fontWeight: "bold " }}
          />
        </div>
      </nav>
      <section
        className=" p-12 grid lg:grid-cols-2 grid-cols-1 justify-center items-center "
        ref={homeRef}
      >
        <div className="p-5 ">
          <h2 style={{ color: "#f32170", fontWeight: "500", fontSize: "18px" }}>
            HELLO
          </h2>
          <h1 className="mt-6 text-4xl">
            I'm <span className="font-medium ">Fawaz</span> <br /> a{" "}
            <span style={{ color: "#f32170", fontWeight: "500" }}>
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
            I translate design mockups and wireframes into fully functional and
            efficient web pages using HTML, CSS, and JavaScript. I work closely
            with designers, back-end developers, and other stakeholders to
            deliver a cohesive and engaging user experience.
          </p>
        </div>
        <div className=" h-[450px] ">
          <img src={profileImg} alt="MyImage" className="image" />
        </div>
      </section>
      <section className="lg:px-12 px-6 py-16 bg-dark text-pry" ref={aboutRef}>
        <div className="allAbtMe">
          <h1 className="text-5xl uppercase font-bold text-red-500">
            About Me
          </h1>
          <h2 className=" my-6 text-2xl font-semibold">Hi! I'm Fawaz</h2>
          <p className="leading-9 text-xl">
            Welcome to my corner of the web. I’m a front-end developer with a
            love for storytelling through code. My journey began with a
            curiosity for how websites are made and has since grown into a
            full-fledged career where I get to build engaging and dynamic online
            experiences.
          </p>
        </div>
        <div className="myJourney ">
          <h2 className=" my-6 text-4xl font-semibold text-red-500">
            My Journey:
          </h2>
          <ul>
            <li className="leading-9 text-xl">
              Early Days: Started with basic HTML and CSS, experimenting with
              web design in 2021.
            </li>

            <li className="lg:leading-9 leading-7 text-xl mt-6">
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
                  Software engineering at Federal University of Technology, Akure (FUTA), with an
                  expected graduation in 2025.
                </p>
              </ul>
            </li>
            <li className="leading-9 text-xl mt-6">
              Today: Focused on creating performant and accessible websites that
              delight users.
            </li>
          </ul>
        </div>
        <div className="myJourney ">
          <h2 className=" my-6 text-4xl font-semibold text-red-500">
            Technical Expertise:
          </h2>
          <ul>
            <li className="leading-9 text-xl">
              - Languages: HTML, CSS, JavaScript
            </li>
            <li className="leading-9 text-xl">
              - Frameworks: React, Boostrap, Tailwind
            </li>
            <li className="leading-9 text-xl">
              - Tools: Git, Webpack, SASS/SCSS
            </li>
          </ul>
        </div>
        <Technologies />
      </section>
      <section
        className="min-h-[100vh] flex flex-col gap-12 justify-center items-center bg-pry "
        ref={portfolioRef}
      >
        <h1 className="text-6xl">My projects</h1>
        <h2>Coming soon ........</h2>
      </section>

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
