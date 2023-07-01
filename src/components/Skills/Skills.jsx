import { skillList } from "./skills-list"
import './styles.css'

const Skills = () => {
  return (
    <section className="skills-section">
        <span id='skills' className='anchor-skills'></span>
        <div className='section-title-box'>
            <h2 className='section-title'>Skills</h2><span className='section-title-dot'></span>
        </div>
        <div className="skill-list-box">
            {skillList.map((skill) =>{
                return(
                    <div className="skill" key={skill.id}>{skill.name}</div>
                )
            })}
        </div>
    </section>
  )
}

export default Skills