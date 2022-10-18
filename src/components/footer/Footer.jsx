import React from 'react'
import './footer.css'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className="footer__logo">BOOMG</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer__socials'>
      <a href="https://www.instagram.com"><FiInstagram/></a>
      <a href="https://www.twitter.com"><BsTwitter/></a>
      <a href="https://www.linkedin.com"><AiOutlineLinkedin/></a>
      <a href="https://www.dribbble.com"><FiDribbble/></a>
      <a href="https://www.github.com"><BsGithub/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; BOOMG portfolio. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer