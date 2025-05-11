import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import profilePic1 from '../../assets/profile-pic-1.png'
import { motion } from 'framer-motion'
import './styles.css'

const About = () => {
  return (
    <section className='about-section'>
        <span id='about' className='anchor-about'></span>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className='section-title-box'>
            <h2 className='section-title'>About</h2>
            <span className='section-title-dot'></span>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className='profile-box'>
            <img src={profilePic1} className='profile-pic'/>
            <div className='about-icon-box'>
                <a href='https://github.com/Sebaspallero' target="_blank" rel="noreferrer"><FontAwesomeIcon className='about-icon' icon={faGithub}/></a>
                <a href='https://www.linkedin.com/in/sebastian-pallero-oria/' target="_blank" rel="noreferrer"><FontAwesomeIcon className='about-icon' icon={faLinkedin}/></a>
            </div> 
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className='profile-info-box'>
            <p className='profile-info-p'>Hey! I'm Sebastián Pallero, a full stack developer based in Buenos Aires, Argentina. I'm passionate about creating robust and scalable web applications that offer real value to users. I'm currently looking for a challenging opportunity where I can contribute my skills in both frontend and backend development, collaborate with a professional team, and keep growing while building impactful software.</p>
            <p className='profile-info-p'>My current stack includes technologies from both worlds: Java, Spring Boot, .NET, React.js, Next.js, and TypeScript. I also work with SQL databases like MySQL and PostgreSQL, and I'm experienced with tools like Git, Prisma, and Firebase. On the UI side, I use Tailwind CSS, SCSS, and component libraries like Material UI or ShadCN. I'm comfortable working with REST APIs, JWT authentication, OAuth 2, and clean architectural patterns across the stack.</p>
        </motion.div>
    </section>
  )
}

export default About