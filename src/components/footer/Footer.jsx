import React from 'react'
import "./footer.css"
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
    <a href='#' className='footer__logo'>m7md</a>
    <ul className='permaLinks'>
    <li><a href='#'>Home</a></li>
    <li><a href='#about'>About</a></li>
    <li><a href='#experience'>Experience</a></li>
    <li><a href='#services'>Services</a></li>
    <li><a href='#portfolio'>Portfolio</a></li>
    <li><a href='#testimonials'>Testimonials</a></li>
    <li><a href='#contact'>Contact</a></li>
    </ul>
    <div className='footer__social'>
      <a href='#' target='_blank'><FaFacebookF/></a>
      <a href='#' target='_blank'><FaInstagram/></a>
      <a href='#' target='_blank'><RiTwitterXLine/></a>
    </div>
    <div className='footer__copyright'>
      <small>&copy;All Right Reserved</small>
    </div>
    </footer>
  )
}

export default Footer