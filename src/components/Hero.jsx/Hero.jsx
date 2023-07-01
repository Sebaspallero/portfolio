import './styles.css'
import CV from '../../assets/CV-SEBASTIAN-PALLERO.pdf'

const Hero = () => {
  return (
    <section>
        <div>
            <p className='hero-subtitle'>Hello there, I'm</p>
            <div className='hero-title-box'>
                <p className='hero-title'>Sebastián</p><span className='hero-title-dot hero-title'>Pallero</span>{/* <span className='hero-title-dot'></span> */}
            </div>
            <p className='hero-subtitle'>Frontend Developer</p>
        </div>
        <div className='hero-buttons-box'>
            <button className='contact-button'>CONTACT ME</button>
            <a href={CV} className='cv-button' download="CV SEBASTIÁN PALLERO">DOWLOAD CV</a>
        </div>
        {/* <marquee direction="right" scrollamount="5" behavior="scroll">Probando Maquee</marquee> */}
    </section>
  )
}

export default Hero