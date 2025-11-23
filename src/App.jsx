import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Technologies from './components/Technologies';
import Hobbies from './components/Hobbies';
import Cryptography from './components/Cryptography';
import Contact from './components/Contact';

function App() {
    return (
        <div className="App">
            <Hero />
            <About />
            <Education />
            <Technologies />
            <Hobbies />
            <Cryptography />
            <Contact />
        </div>
    );
}

export default App;
