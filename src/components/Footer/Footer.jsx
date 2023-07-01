import './styles.css'

const Footer = () => {
  return (
    <footer>
        <p className='footer-title'>LETS'S CONNECT</p>
        <div className='footer-contact-box'>
            <a href='https://wa.me/541167805752' target="_blank" rel="noreferrer" className='footer-contact-link'>Whatsapp me</a>
            <a href='mailto:sebastianoria@hotmail.com' className='footer-contact-link'>Mail me</a>
        </div>
        <div>
            <span></span>
            <span></span>
            <span></span>
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