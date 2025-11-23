import { motion } from 'framer-motion';
import { FaEnvelope, FaInstagram, FaLinkedin, FaFilePdf, FaKey } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Contact
                </motion.h2>

                <div className="contact-content">
                    <motion.div
                        className="contact-email glass"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <FaEnvelope className="contact-icon" />
                        <h3>Email</h3>
                        <a href="mailto:lpatlang1700@alumno.ipn.mx" className="email-link">
                            lpatlang1700@alumno.ipn.mx
                        </a>
                    </motion.div>

                    <motion.div
                        className="social-links"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <a
                            href="https://www.instagram.com/_eddy028/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-btn glass"
                        >
                            <FaInstagram className="social-icon" />
                            <span>Instagram</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/patlan-gualo-luis-eduardo-6b5230306"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-btn glass"
                        >
                            <FaLinkedin className="social-icon" />
                            <span>LinkedIn</span>
                        </a>
                    </motion.div>

                    <motion.div
                        className="download-links"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <a
                            href="/assets/resume_lepg.pdf"
                            download
                            className="download-btn btn-primary"
                        >
                            <FaFilePdf className="btn-icon" />
                            <span>Download CV</span>
                        </a>

                        <a
                            href="/assets/id_rsa.pub"
                            download
                            className="download-btn btn-secondary"
                        >
                            <FaKey className="btn-icon" />
                            <span>My RSA Public Key</span>
                        </a>
                    </motion.div>
                </div>

                <motion.footer
                    className="footer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                >
                    <p>© 2024 Luis Eduardo Patlan Gualo. All rights reserved.</p>
                </motion.footer>
            </div>
        </section>
    );
};

export default Contact;
