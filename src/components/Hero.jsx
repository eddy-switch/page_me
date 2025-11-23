import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="section hero-section">
            <div className="container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="hero-avatar"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                        <div className="avatar-wrapper glass">
                            <img src={`${import.meta.env.BASE_URL}assets/profile.png`} alt="Luis Eduardo Patlan Gualo" className="avatar-image" />
                        </div>
                    </motion.div>

                    <motion.h1
                        className="hero-name"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Luis Eduardo Patlan Gualo
                    </motion.h1>

                    <motion.div
                        className="hero-education glass"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <FaGraduationCap className="education-icon" />
                        <p>Computer Systems Engineer</p>
                        <p className="institution">Escuela Superior de Cómputo ESCOM</p>
                    </motion.div>

                    <motion.div
                        className="hero-navigation"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <a href="#hobbies" className="btn btn-primary">Learn More</a>
                        <a href="#contact" className="btn btn-secondary">Contact</a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
