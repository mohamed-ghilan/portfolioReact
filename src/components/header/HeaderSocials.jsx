import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub  } from "react-icons/fa";
import { FaSquareDribbble } from "react-icons/fa6";

const headerSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank"><FaLinkedin/></a>
      <a href="https://github.com" target="_blank"><FaGithub /></a>
      <a href="https://dribbble.com" target="_blank"><FaSquareDribbble /></a>
    </div>
  );
};

export default headerSocials;
