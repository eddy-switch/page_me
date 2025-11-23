import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <FaUser className="title-icon" /> About Me
                </motion.h2>

                <div className="about-content">
                    <motion.div
                        className="about-card glass"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="about-text">
                            Computer Systems Engineering student at the National Polytechnic Institute (IPN), currently in the 6th semester. I am passionate about cybersecurity, with experience in projects focused on Point of Sale (POS) system security.
                        </p>
                        <p className="about-text">
                            I am a self-motivated learner, currently developing my skills in Pentesting and computer networks. I enjoy collaborative work environments, continuous learning, and I’m also exploring interests in machine learning and business development.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
