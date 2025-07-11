import React from 'react'
import '../css/Projects.css'
import portfolio_image from "../assets/portfolio.png"
const data=[
    {
        id:1,
        title:"Project 1",
        description:"Project 1 description",
        image:portfolio_image,
        link:"https://www.google.com"
    },
    {
        id:2,
        title:"Project 2",
        description:"Project 2 description",
        image:portfolio_image,
        link:"https://www.google.com"
    },
    {
        id:3,
        title:"Project 3",
        description:"Project 3 description",
        image:portfolio_image,
        link:"https://www.google.com"
    },
    {
        id:4,
        title:"Project 4",
        description:"Project 4 description",
        image:portfolio_image,
        link:"https://www.google.com"
    },
]
export const Projects = () => {
  return (
    <section className="project-container" id='projects'>
        <h2>Projects</h2>
        <div className="project-content">
           {
            data.map((project)=>(
                <div className="project-card" key={project.id}>
                    <h3>{project.title}</h3>
                    <img src={project.image} alt={project.title} />
                    <p>{project.description}</p>
                    <a href={project.link}>See More...</a>
                </div>
            ))
           }
        </div>
    </section>
  )
}
