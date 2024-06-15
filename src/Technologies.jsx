import React from "react";
import { BsBootstrapFill } from "react-icons/bs";
import { FaCss3Alt, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandBootstrap } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";

function Technologies() {
  return (
    <div className="mt-8 flex flex-wrap lg:gap-16 gap-12 justify-center items-center lg:p-8 p-4">
      {/* <FaHtml5 className="techIcons" /> */}
      <TiHtml5 className="techIcons" />
      <FaCss3Alt className="techIcons" />
      <IoLogoJavascript className="techIcons" />
      <RiTailwindCssFill className="techIcons" />
      <FaGithub className="techIcons" />
      <BsBootstrapFill className="techIcons" />
      <FaReact className="techIcons" />
    </div>
  );
}

export default Technologies;
