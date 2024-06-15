import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { RiTwitterXFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";

function Contact() {
  const form = useRef();
  const [succSubmit, setSuccSubmit] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSuccessSubmit = () => {
    setSuccSubmit(true);
    setTimeout(() => {
      setSuccSubmit(false);
    }, 2500);
  };

  const sendMail = (e) => {
    e.preventDefault();
    setFormData({ user_name: "", user_email: "", message: "" });

    emailjs
      .sendForm("service_pxhna2k", "template_2pd8suu", form.current, {
        publicKey: "02ug9Lx-dB3lcnHWp",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          handleSuccessSubmit();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className="my-6 lg:my-12 p-12 bg-white rounded-lg lg:w-[75%] w-full ">
      <div
        className={
          succSubmit
            ? "min-h-10vh p-2 text-center bg-success text-white opacity-95 rounded-md block w-[20%] fixed top-0 right-0 z-[99999999999]"
            : "hidden"
        }
      >
        Message Sent
      </div>
      <form
        action=""
        ref={form}
        onSubmit={sendMail}
        className="flex flex-col  gap-10"
      >
        <label htmlFor="user_name">
          <input
            type="text"
            className="contactInput"
            name="user_name"
            onChange={handleChange}
            value={formData.user_name}
            placeholder="Name / Company name"
          />
        </label>
        <label htmlFor="user_name">
          <input
            type="text"
            className="contactInput"
            name="user_email"
            value={formData.user_email}
            placeholder="Email / Company Email"
            onChange={handleChange}
          />
        </label>
        <textarea
          id="w3review"
          name="message"
          rows="2"
          cols="50"
          className="textArea"
          placeholder="Drop a message"
          value={formData.message}
          onChange={handleChange}
        />
        <button className="py-3 max-w-52 text-center hover:opacity-65 rounded-md text-lg shadow-md bg-red-500 text-white">
          Submit
        </button>

        <div className="flex flex-wrap lg:justify-start justify-center mt-2 items-center gap-5">
          <a href="mailto:adeyanjufawaz999@gmail.com">
            <SiGmail className="inline socialIcons" />
          </a>

          <a href="https://x.com/AdeyanjuFawaz1">
            <RiTwitterXFill className="inline socialIcons" />
          </a>

          <a href="https://github.com/adeyanjufawaz">
            <FaGithub className="inline socialIcons" />
          </a>

          <a href="https://www.linkedin.com/in/adeyanju-fawaz">
            <ImLinkedin className="inline socialIcons" />
          </a>
        </div>
      </form>
    </div>
  );
}

export default Contact;
