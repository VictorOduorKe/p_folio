import React from 'react'
import '../css/skills.css'
const data=[
    {
        id:1,
        title:"Skill 1",
        description:"Skill 1 description",
        image:"https://via.placeholder.com/150",
    },
    {
        id:2,
        title:"Skill 2",
        description:"Skill 2 description",
        image:"https://via.placeholder.com/150",
    },
    {
        id:3,
        title:"Skill 3",
        description:"Skill 3 description",
        image:"https://via.placeholder.com/150",
    },
    {
        id:3,
        title:"Skill 3",
        description:"Skill 3 description",
        image:"https://via.placeholder.com/150",
    },
]   
const Skillss = () => {
        return (
            <section className="skill-container">
                <h2>Skills</h2>
                <div className="skill-content">
                    {
                        data.map((skill)=>(
                            <div className="skill-card" key={skill.id}>
                                <img src={skill.image} alt={skill.title} />
                                <h3>{skill.title}</h3>
                                <p>{skill.description}</p>
                            </div>
                        ))
                    }
                </div>

            </section>
  )
}

export default Skillss