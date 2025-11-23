import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaBrain } from 'react-icons/fa';
import './Education.css';

const educationData = [
    {
        id: 1,
        institution: 'Escuela Superior de Cómputo',
        degree: 'Computer Systems Engineering',
        years: '2023 - Present (6th semester)',
        areas: 'Cybersecurity, Data Analysis, Networks, Programming, and Artificial Intelligence',
        acronym: 'IPN'
    },
    {
        id: 2,
        institution: 'CECyT 7 "Cuauhtémoc"',
        degree: 'Automotive Systems Technician',
        years: '2019-2022',
        areas: 'Automotive mechanics, electrical and electronic systems of the automobile',
        acronym: 'IPN'
    }
];

const Education = () => {
    return (
        <section id="education" className="section education-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <FaGraduationCap className="title-icon" /> Education
                </motion.h2>

                <div className="education-timeline">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            className="education-card glass"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="edu-header">
                                <div className="edu-badge">{edu.acronym}</div>
                                <div className="edu-years">
                                    <FaCalendarAlt className="year-icon" />
                                    <span>{edu.years}</span>
                                </div>
                            </div>

                            <h3 className="edu-institution">{edu.institution}</h3>
                            <p className="edu-degree">{edu.degree}</p>

                            <div className="edu-areas">
                                <FaBrain className="areas-icon" />
                                <p className="areas-text">
                                    <strong>Areas of interest:</strong> {edu.areas}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
