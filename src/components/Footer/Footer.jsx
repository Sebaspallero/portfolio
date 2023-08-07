import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCircle} from '@fortawesome/free-solid-svg-icons'
import './styles.css'

const Footer = () => {

    const [phone, setPhone] = useState(false)
    const [mail, setMail] = useState(false)
    const copyPhone = (text) =>{
        setPhone(true)
        navigator.clipboard.writeText(text);
        setTimeout(()=>{
            setPhone(false)
        },2000)
    }

    const copyMail = (text) =>{
        setMail(true)
        navigator.clipboard.writeText(text);
        setTimeout(()=>{
            setMail(false)
        },2000)
    }

  return (
    <footer>
        <span className='anchor-footer' id='contact'></span>
        <p className='footer-title'>LET'S CONNECT</p>
        <div className='footer-contact-box'>
            <button className={phone ? 'footer-phone-link phone-active' : 'footer-phone-link'} onClick={()=> copyPhone('+54 11 6780-5752')}>+54 11 6780-5752</button>
            <button className={mail ? 'footer-mail-link mail-active' : 'footer-mail-link'} onClick={()=> copyMail('sebastianpallerodev@gmail.com')}>sebastianpallerodev@gmail.com</button>
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
        <div className='author-box'>
            <p  className='author-text'>@2023, Sebastián Pallero Portfolio</p>
            <p className='author-text'>developed by <span className='author-text-bold'>Sebastian<FontAwesomeIcon className='footer-dot' icon={faCircle}/></span></p>
        </div>
    </footer>
  )
}

export default Footer