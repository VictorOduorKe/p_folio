import React from 'react'
import '../css/skills.css'
import skill_mage from "../assets/portfolio.png"
const data=[
    {
        id:1,
        title:"Web Design",
        description:"Am proficient in designing Modern cutting edge websites",
        image:skill_mage,
    },
    {
        id:2,
        title:"Software Developer",
        description:"i have 1 year experience in developing oustanding functional systems in PHP as the backend",
        image:skill_mage,
    },
    {
        id:3,
        title:"System Adminsitration",
        description:"Skill 3 description",
        image:skill_mage,
    },
    {
        id:3,
        title:"Database Management",
        description:"Skill 3 description",
        image:skill_mage,
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
                                <h3>{skill.title}</h3>
                                <img src={skill.image} alt={skill.title} />
                                <p>{skill.description}</p>
                            </div>
                        ))
                    }
                </div>

            </section>
  )
}

export default Skillss