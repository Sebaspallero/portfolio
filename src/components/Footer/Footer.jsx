import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import './styles.css'

const Footer = () => {
  return (
    <footer>
        <span className='anchor-footer' id='contact'></span>
        <p className='footer-title'>LET'S CONNECT</p>
        <div className='footer-contact-box'>
            <p className='footer-contact-link'>+54 11 6780-5752</p>
            <p className='footer-contact-link'>sebastianoria@hotmail.com</p>
        </div>
        <div className='footer-social-box'>
            <div className='footer-social'>
                <span className='social-divider'></span>
                <div className='social-text-box'>
                    <p className='social-text'>Linkedin</p>
                    <FontAwesomeIcon className='social-text-icon' icon={faLinkedin}/>
                </div> 
            </div>
            <div className='footer-social'>
                <span className='social-divider'></span>
                <div className='social-text-box'>
                    <p className='social-text'>Github</p>
                    <FontAwesomeIcon className='social-text-icon' icon={faGithub}/>
                </div> 
            </div>
        </div> 
        <span className='divider'></span>
        <div className='author-box'>
            <p  className='author-text'>@2023, Sebastián Pallero Portfolio</p>
            <p  className='author-text'>developed by <span>Sebastian</span></p>
        </div>
    </footer>
  )
}

export default Footer