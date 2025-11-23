import { motion } from 'framer-motion';
import { FaLock, FaAward } from 'react-icons/fa';
import './Cryptography.css';

const Cryptography = () => {
    return (
        <section id="cryptography" className="section cryptography-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <FaLock className="title-icon" /> Cryptography
                </motion.h2>

                <div className="crypto-content">
                    <motion.div
                        className="crypto-figure glass"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="figure-image-wrapper">
                            <img
                                src="/assets/yevgeniy-dodis.jpg"
                                alt="Yevgeniy Dodis"
                                className="figure-image"
                            />
                        </div>
                        <h3 className="figure-name">Yevgeniy Dodis</h3>
                        <p className="figure-title">Professor of Computer Science</p>
                        <p className="figure-institution">New York University</p>
                    </motion.div>

                    <motion.div
                        className="crypto-bio glass"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bio-header">
                            <FaAward className="bio-icon" />
                            <h3>Notable Contributions</h3>
                        </div>

                        <div className="bio-content">
                            <p>
                                Yevgeniy Dodis is a prominent cryptographer and Professor of Computer Science
                                at New York University (NYU). His work has been fundamental in the development
                                of modern cryptography.
                            </p>

                            <div className="highlight-box">
                                <h4>Research Areas:</h4>
                                <ul>
                                    <li>Randomness extractors</li>
                                    <li>Provable security</li>
                                    <li>Public-key cryptography</li>
                                    <li>Secure cryptographic protocols</li>
                                </ul>
                            </div>

                            <p>
                                His contributions have been internationally recognized, and he has received numerous
                                awards for his research in the field of information security and cryptography.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Cryptography;
