import { motion } from 'framer-motion';
import { FaDatabase, FaBrain, FaUserSecret } from 'react-icons/fa';
import './Hobbies.css';

const hobbiesData = [
    {
        id: 1,
        title: 'Data Science',
        icon: FaDatabase,
        image: `${import.meta.env.BASE_URL}assets/data_science.jpg`,
        description: 'Analyzing complex data to extract meaningful insights and drive decision-making'
    },
    {
        id: 2,
        title: 'Pentesting',
        icon: FaUserSecret,
        image: `${import.meta.env.BASE_URL}assets/pentesting.png`,
        description: 'Exploring vulnerabilities and strengthening information security'
    },
    {
        id: 3,
        title: 'Machine Learning',
        icon: FaBrain,
        image: `${import.meta.env.BASE_URL}assets/machine_learning.jpg`,
        description: 'Exploring algorithms that enable systems to learn from data and make predictions'
    }
];

const Hobbies = () => {
    return (
        <section id="hobbies" className="section hobbies-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Hobbies
                </motion.h2>

                <div className="hobbies-grid">
                    {hobbiesData.map((hobby, index) => (
                        <motion.div
                            key={hobby.id}
                            className="hobby-card glass"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div className="hobby-image-wrapper">
                                <img src={hobby.image} alt={hobby.title} className="hobby-image" />
                                <div className="hobby-overlay">
                                    <hobby.icon className="hobby-icon" />
                                </div>
                            </div>
                            <div className="hobby-content">
                                <h3 className="hobby-title">{hobby.title}</h3>
                                <p className="hobby-description">{hobby.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div >
        </section >
    );
};

export default Hobbies;
