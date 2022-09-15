import React from 'react'
import {TbBrandCss3} from 'react-icons/tb'
import {TbBrandHtml5} from 'react-icons/tb'
import {DiJavascript1} from 'react-icons/di'
import {FaReact} from 'react-icons/fa'
import {DiRubyRough} from 'react-icons/di'
import {BsBootstrap} from 'react-icons/bs'

const HeaderSkills = () => {
  return (
    <div className='header__skills'>
        <input type="button" value="touch"></input>
          <div className='box'>
            <div id='card'className='front'><a><TbBrandCss3 size="25"/></a></div>
            <div id='card'className='back'><a><TbBrandHtml5 size="25"/></a></div>
            <div id='card'className='left'><a><DiJavascript1 size="25"/></a></div>
            <div id='card'className='right'><a><FaReact size="25"/></a></div>
            <div id='card'className='top'><a><DiRubyRough size="25"/></a></div>
            <div id='card'className='bottom'><a><BsBootstrap size="25"/></a></div>
          </div>
    </div>
  )
}

export default HeaderSkills