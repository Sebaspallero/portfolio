import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, Github, Linkedin, ArrowRight, Copy, Check } from "lucide-react"
import "./FooterSection.css"

const FooterSection = () => {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
    const currentYear = new Date().getFullYear();

    const copyToClipboard = (text, elementId) => {
        navigator.clipboard.writeText(text)

        const element = document.getElementById(elementId)
        if (element) {
            element.classList.add("copied")

            setTimeout(() => {
                element.classList.remove("copied")
            }, 2000)
        }
    }

    return (
        <footer id="contact" className="contact-section" ref={sectionRef}>
            <div className="contact-container">
                <motion.div
                    className="contact-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="contact-title">
                        LET'S
                        <br />
                        CONNECT
                    </h2>
                    <div className="title-decoration"></div>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="info-item" onClick={() => copyToClipboard("+54 11 6780-5752", "phone-copy")}>
                            <div className="info-icon">
                                <Phone strokeWidth={1.5} />
                            </div>
                            <div className="info-text">
                                <span className="info-label">Phone</span>
                                <span className="info-value">+54 11 6780-5752</span>
                            </div>
                            <div className="copy-icon" id="phone-copy">
                                <Copy className="icon-copy" strokeWidth={1.5} />
                                <Check className="icon-check" strokeWidth={1.5} />
                            </div>
                        </div>

                        <div className="info-item" onClick={() => copyToClipboard("sebastianpallerodev@gmail.com", "email-copy")}>
                            <div className="info-icon">
                                <Mail strokeWidth={1.5} />
                            </div>
                            <div className="info-text">
                                <span className="info-label">Email</span>
                                <span className="info-value">sebastianpallerodev@gmail.com</span>
                            </div>
                            <div className="copy-icon" id="email-copy">
                                <Copy className="icon-copy" strokeWidth={1.5} />
                                <Check className="icon-check" strokeWidth={1.5} />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="social-links"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <a href="https://www.linkedin.com/in/sebastian-pallero-oria/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <div className="social-link-container">
                                <span className="social-text">LinkedIn</span>
                                <div className="social-icon-container">
                                    <Linkedin className="social-icon" strokeWidth={1.5} />
                                </div>
                            </div>

                            <ArrowRight className="arrow-icon" strokeWidth={1.5} />
                        </a>

                        <a href="https://github.com/Sebaspallero" target="_blank" rel="noopener noreferrer" className="social-link">
                            <div className="social-link-container">
                                <span className="social-text">Github</span>
                                <div className="social-icon-container">
                                    <Github className="social-icon" strokeWidth={1.5} />
                                </div>
                            </div>
                            <ArrowRight className="arrow-icon" strokeWidth={1.5} />
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    className="contact-footer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <p className="copyright">@{currentYear}, Sebastián Pallero Portfolio</p>
                    <div className="credit">
                        developed by{" "}
                        <span className="credit-name">
                            Sebastian<span className="green-dot">.</span>
                        </span>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}

export default FooterSection;