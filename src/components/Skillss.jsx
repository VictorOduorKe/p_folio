import React from 'react'
import '../css/skills.css'
const data=[
    {
        id:1,
        title:"Web Design",
        description:"Am proficient in designing Modern cutting edge websites",
        image:"https://via.placeholder.com/150",
    },
    {
        id:2,
        title:"System Developer",
        description:"i have 1 year experience in developing oustanding functional systems in PHP as the backend",
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
            <section className="skill-container" id='skills'>
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