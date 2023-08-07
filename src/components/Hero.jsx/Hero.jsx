import './styles.css'
import CV from '../../assets/CV-SEBASTIAN-PALLERO-ENGLISH.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCircle, faSquare} from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <section className='hero-section'>
        <span id='hero' className='anchor-hero'></span>
        <div>
            <div>
                <p className='hero-subtitle'>Hello there, I'm</p>
                <div className='hero-title-box'>
                    <p className='hero-title'>Sebastián</p><span className='hero-title'>Pallero<FontAwesomeIcon className='hero-title-dot' icon={faCircle}/></span>
                </div>
                <p className='hero-subtitle'>Frontend Developer</p>
            </div>
            <div className='hero-buttons-box'>
                <a href='#contact' className='contact-button'>CONTACT ME</a>
                <a href={CV} className='cv-button' download="CV SEBASTIÁN PALLERO ENGLISH">DOWLOAD CV</a>
            </div>
        </div>
        <div className='hero-image-box'>
            <FontAwesomeIcon className='image-x' icon={faXmark}/>
            <FontAwesomeIcon className='image-circle' icon={faCircle}/>
            <FontAwesomeIcon className='image-square' icon={faSquare}/>
        </div>
    </section>
  )
}

export default Hero