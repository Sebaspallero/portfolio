import CV from '../../assets/CV SEBASTIAN PALLERO ENGLISH.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCircle, faSquare } from '@fortawesome/free-solid-svg-icons'
import { Send } from 'lucide-react'
import { motion } from "framer-motion"
import './styles.css'

const Hero = () => {

    const MotionFontAwesomeIcon = motion.create(FontAwesomeIcon);

    return (
        <section className='hero-section'>
            <div className='hero-section-main'>
                <span id='hero' className='anchor-hero'></span>
                <div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="hero-subtitle"
                    >
                        Hello there, I'm
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="hero-title-box"
                    >
                        <p className='hero-title'>Sebastián</p>
                        <span className='hero-title'>Pallero
                            <FontAwesomeIcon className='hero-title-dot' icon={faCircle} />
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="hero-subtitle"
                    >
                        Software Developer
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="hero-buttons-box"
                >
                    <a
                        href="#contact"
                        className="contact-button"
                    >
                        <span className="contact-button-content">
                            CONTACT ME
                            <Send className="translate-move" />
                        </span>
                    </a>

                    <a
                        href={CV}
                        className="cv-button"
                        download="CV SEBASTIÁN PALLERO ENGLISH"
                    >
                        <span className="contact-button-content">
                            DOWNLOAD CV
                        </span>
                    </a>
                </motion.div>

                <div className='hero-image-box'>
                    <MotionFontAwesomeIcon
                        className="image-x"
                        icon={faXmark}
                        initial={{ opacity: 0, x: 100, rotate: -20 }}
                        animate={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    />
                    <MotionFontAwesomeIcon
                        className='image-circle'
                        icon={faCircle}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    />
                    <MotionFontAwesomeIcon
                        className='image-square'
                        icon={faSquare}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    />
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="scroll-indicator"
            >
                <span className="scroll-text">Scroll down</span>
                <div className="scroll-mouse">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                        className="scroll-dot"
                    ></motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero