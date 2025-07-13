import React, { useState } from 'react'
import './index.css'
import About from './components/About'
import { Projects } from './components/Projects'
import Skillss from './components/Skillss'
import Contact from './components/Contact'
const App = () => {
  const [menu,setMenu]=useState(false);
  return (
    <>
      <header>
        <h1><a href="/">My Portfolio</a></h1>
        <nav>
          <div className="nav-btn" onClick={()=>(setMenu(!menu))}>
            <i className='fa fa-bars'></i>
          </div>
          <ul className={menu?"show-nav":"nav-list"}>
            <li onClick={()=>(setMenu(!menu))}><a href="#about">About</a></li>
            <li onClick={()=>(setMenu(!menu))}><a href="#skills">Skills</a></li>
            <li onClick={()=>(setMenu(!menu))}><a href="#projects">Projects</a></li>
            <li onClick={()=>(setMenu(!menu))}><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        
          <About />
          <Skillss />
        <Projects />
        <Contact/>
      </main>
      <footer>
        <p>Copyright &copy; 2025 Victor Oduor</p>
        <p>All rights reserved</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/victor.oduor.5494" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/victor.oduor.5494" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/victor-oduor-5494" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.twitter.com/victor.oduor.5494" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-twitter"></i>
</a>

        </div>
      </footer>
    </>
  )
}

export default App