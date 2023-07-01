import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import './styles.css'

const Footer = () => {

    const [active, setActive] = useState(false)
    const copyText = (text) =>{
        setActive(true)
        navigator.clipboard.writeText(text);
        setTimeout(()=>{
            setActive(false)
        },2000)
       
    }

  return (
    <footer>
        <span className='anchor-footer' id='contact'></span>
        <p className='footer-title'>LET'S CONNECT</p>
        <div className='footer-contact-box'>
            <button className={active ? 'footer-contact-link is-active' : 'footer-contact-link'} onClick={()=> copyText('+54 11 6780-5752')}>+54 11 6780-5752</button>
            <button className='footer-contact-link' onClick={()=> copyText('sebastianoria@hotmail.com')}>sebastianoria@hotmail.com</button>
        </div>
        <div className='footer-social-box'>
            <a href='https://www.linkedin.com/in/sebastian-pallero-or%C3%ADa-a911591a1/' target="_blank" rel="noreferrer" className='footer-social'>
                <span className='social-divider'></span>
                <div className='social-text-box'>
                    <p className='social-text'>Linkedin</p>
                    <FontAwesomeIcon className='social-text-icon' icon={faLinkedin}/>
                </div> 
            </a>
            <a href='https://github.com/Sebaspallero' target="_blank" rel="noreferrer" className='footer-social'>
                <span className='social-divider'></span>
                <div className='social-text-box'>
                    <p className='social-text'>Github</p>
                    <FontAwesomeIcon className='social-text-icon' icon={faGithub}/>
                </div> 
            </a>
        </div> 
        {/* <span className='divider'></span> */}
        <div className='author-box'>
            <p  className='author-text'>@2023, Sebastián Pallero Portfolio</p>
            <p  className='author-text'>developed by <span>Sebastian</span></p>
        </div>
    </footer>
  )
}

export default Footer