import { motion } from 'framer-motion';
import { SiC, SiMysql, SiGithub, SiJavascript, SiLinux, SiPython, SiReact, SiNodedotjs } from 'react-icons/si';
import './Technologies.css';

const technologies = [
    { name: 'C', icon: SiC, color: '#A8B9CC' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'GitHub', icon: SiGithub, color: '#181717' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Linux', icon: SiLinux, color: '#FCC624' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
];

const Technologies = () => {
    return (
        <section id="technologies" className="section technologies-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Technologies & Tools
                </motion.h2>

                <motion.div
                    className="tech-grid"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            className="tech-card glass"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                            whileHover={{ y: -5, scale: 1.05 }}
                        >
                            <tech.icon className="tech-icon" style={{ color: tech.color }} />
                            <span className="tech-name">{tech.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Technologies;
