import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import profilePic1 from '../../assets/profile-pic-1.png'
import './styles.css'

const About = () => {
  return (
    <section className='about-section'>
        <span id='about' className='anchor-about'></span>
        <div className='section-title-box'>
            <h2 className='section-title'>About</h2><span className='section-title-dot'></span>
        </div>
        <div className='profile-box'>
            <img src={profilePic1} className='profile-pic'/>
            <div className='about-icon-box'>
                <a href='https://github.com/Sebaspallero' target="_blank" rel="noreferrer"><FontAwesomeIcon className='about-icon' icon={faGithub}/></a>
                <a href='https://www.linkedin.com/in/sebastian-pallero-or%C3%ADa-a911591a1/' target="_blank" rel="noreferrer"><FontAwesomeIcon className='about-icon' icon={faLinkedin}/></a>
            </div> 
        </div>
        <div className='profile-info-box'>
            <p className='profile-info-p'>Hey! I'm Sebastián Pallero, a frontend dev specialized in React.js, based in Buenos Aires - Argentina. Currently I'm looking for a challenging working experience, where I can add my knowledge in web development to work with a team and create great products for users!</p>
            <p className='profile-info-p'>My current stack is centered in the React ecosystem - React.js, React Native and Next.js - but I can also work with other frontend frameworks such as Angular; In addition I have some basic knowledge in backend and data bases such as Firebase, SQL or Prisma. When it comes to design I'm proficient in vanilla CSS, SCSS, Tailwind and many UI libraries.</p>
        </div>
    </section>
  )
}

export default About