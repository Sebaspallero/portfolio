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
            <p className='profile-info-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non expedita eligendi reiciendis laborum accusamus aliquam exercitationem, quos atque dolores dolorem. Dolore alias officiis, qui quo voluptas consequatur hic asperiores nesciunt.</p>
            <p className='profile-info-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus reiciendis veniam perspiciatis obcaecati quaerat culpa sapiente explicabo assumenda, debitis quas inventore aperiam labore in corporis rerum fugiat laborum voluptatem voluptates!</p>
        </div>
    </section>
  )
}

export default About