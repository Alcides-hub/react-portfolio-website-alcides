import React from 'react'
import './Project.css'
import picture1 from '../../assets/notes-taking-ui.jpg'
import picture2 from '../../assets/name-tag-generator.png'

const Project = () => {
  return (
    <section id="project">
        <h5>My favorite projects</h5>
        <h2>Top Projects</h2>
        <div className="container container_project">
            <article className="fade-left">
                <div className="image-holder">
                    <image>
                        <img src={picture1} alt="Notes-Taking_Ui"/>
                    </image>
                </div>
                <div className='project-container'>
                <span className='title'>Super Sticky Notes</span><br></br>
                <span className='project-item'>SkillCrush Project</span><br></br>
                <span className='project-text'>This sticky note ui was built using React.js, CSS3, and HTML5. This is a sticky note UI greenfield project. Starting from scratch from rending it static to making the components interactive handling user data to relevant components, passing props and state. She sticky not can add, edit and search notes on the fly.</span>
                </div>
            </article>
            <article className="fade-right">
            <div className="image-holder">
                    <image>
                        <img src={picture2} alt="Notes-Taking_Ui"/>
                    </image>
                </div>
                <div className='project-container'>
                <span className='title'>Name Tag Generator</span><br></br>
                <span className='project-item'>SkillCrush Project</span><br></br>
                <span className='project-text'>This project is a name tag generator that was created using React.js, HTML5, and CSS3. Interactive name tag generator app using React.js, receives user input by generating a new name tag. In this project, we made components to create new name tags with user input and to remove the tag names.</span>
                </div>
            </article>
            <article className="fade-left">
            <div className="image-holder">
                    <image>
                        <img></img>
                    </image>
                </div> 
            </article>
            <article className="fade-right">
            <div className="image-holder">
                    <image>
                        <img></img>
                    </image>
                </div> 
            </article>
        </div>
    </section>
  )
}

export default Project