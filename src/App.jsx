import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Blog from './components/blog/Blog'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Project from './components/projects/Project'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
 
const App = () => {
  return (
    <div>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Blog />
        <Portfolio />
        <Project />
        <Contact />
        <Footer />
    </div>
  )
}

export default App