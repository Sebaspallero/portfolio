import { skillList } from "./skills-list"
import MarqueeLogo from "../MarqueeLog/MarqueeLogo"
import { motion } from "framer-motion"
import './styles.css'

const Skills = () => {
  return (
    <section className="skills-section">
        <span id='skills' className='anchor-skills'></span>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className='section-title-box'
            >
            <h2 className='section-title'>Skills</h2><span className='section-title-dot'></span>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className='skill-list-box'
            >
           {skillList.map((skill) =>{
                return(
                    <div className="skill" key={skill.id}>{skill.name}</div>
                )
            })}
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}>
            <MarqueeLogo/>
        </motion.div>
        
    </section>
  )
}

export default Skills