import React from 'react'
import '../css/projects.css'
const data=[
    {
        id:1,
        title:"Project 1",
        description:"Project 1 description",
        image:"https://via.placeholder.com/150",
        link:"https://www.google.com"
    },
    {
        id:2,
        title:"Project 2",
        description:"Project 2 description",
        image:"https://via.placeholder.com/150",
        link:"https://www.google.com"
    },
    {
        id:3,
        title:"Project 3",
        description:"Project 3 description",
        image:"https://via.placeholder.com/150",
        link:"https://www.google.com"
    },
    {
        id:4,
        title:"Project 4",
        description:"Project 4 description",
        image:"https://via.placeholder.com/150",
        link:"https://www.google.com"
    },
]
export const Projects = () => {
  return (
    <section className="project-container">
        <h2>Projects</h2>
        <div className="project-content">
           {
            data.map((project)=>(
                <div className="project-card" key={project.id}>
                    <img src={project.image} alt={project.title} />
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </div>
            ))
           }
        </div>
    </section>
  )
}
