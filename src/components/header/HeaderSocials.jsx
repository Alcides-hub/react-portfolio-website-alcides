import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
            <div className='socials'><a href="http://linkedin.com" target="_blank"><AiOutlineLinkedin/></a></div>
            <div className='socials'><a href="http://github.com" target="_blank"><BsGithub/></a></div>
            <div className='socials'><a href="http://dribbble.com" target="_blank"><FiDribbble/></a></div>
            <div className='socials'><a href="http://instagram.com" target="_blank"><FiInstagram/></a></div>
            <div className='socials'><a href="http://twitter.com" target="_blank"><BsTwitter/></a></div>

    </div>
  )
}

export default HeaderSocials