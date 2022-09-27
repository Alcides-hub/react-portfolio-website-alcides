import React from 'react'
import './experience.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Skills</h2>
      <div className='container container__skills'>
        <div className='skills__frontend'>
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <AiOutlineCheckCircle className="experience-icon" />
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <AiOutlineCheckCircle className="experience-icon"/>
                <h4>CSS</h4>
              </div> 
            </article>
            <article className="experience__details">
              <div>
                <AiOutlineCheckCircle className="experience-icon"/>
                <h4>Javascript</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <AiOutlineCheckCircle className="experience-icon"/>
                <h4>React</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <AiOutlineCheckCircle className="experience-icon"/>
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <AiOutlineCheckCircle className="experience-icon"/>
                <h4>Ruby</h4>
              </div>
            </article>
          </div>
        </div>
        <div className='tech__stack'>
          <h3>Tech Stack</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <AiOutlineCheckCircle className="experience-icon"/>
                <h4>ChromeDevTools</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <AiOutlineCheckCircle className="experience-icon"/>
                <h4>Github</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <AiOutlineCheckCircle className="experience-icon"/>
                <h4>Adobe</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <AiOutlineCheckCircle className="experience-icon"/>
                <h4>Figma</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience