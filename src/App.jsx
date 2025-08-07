import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import './App.css';
import logo from './assets/my-logo.png';
import Programming from './assets/Programming.png';
import secondimg from './assets/secondimg.png';
import html5 from './assets/html5.jpg';
import css from './assets/css.jpeg';
import js from './assets/js-logo.png';
import bootstrap from './assets/bootstrap.png';
import react1 from './assets/react1.png';
import github from './assets/github.jpeg';
import myntra from './assets/myntra.jpeg';
import ttt from './assets/ttt.jpg';
import rps from './assets/r-p-s.png';
import weather from './assets/weather.jpg';
import contactImg from './assets/Development.png';
import './components/Navbar.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const formRef = useRef();
  const [formMessage, setFormMessage] = useState('');

  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_s516s5d',
      'template_onenkyk',
      formRef.current,
      'kCBDQSaLjahLpHb4B' // Public key
    )
      .then(
        (result) => {
          setFormMessage('Message sent successfully!');
          setTimeout(() => setFormMessage(''), 3000);
          formRef.current.reset();
        },
        (error) => {
          setFormMessage('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="body">
        
      <header>
      <nav className="navbar">
        <div className="main">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <div className={`links ${menuOpen ? 'show' : ''}`}>
            <ul>
              <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
              <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            </ul>
          </div>

          <button id="contact-btn" onClick={() => { scrollToContact(); setMenuOpen(false); }}>
            Contact Me
          </button>

          <i
            className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} menu-icon`}
            onClick={() => setMenuOpen(!menuOpen)}
          ></i>
        </div>
      </nav>
    </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-left">
            <img src={Programming} alt="coding" />
          </div>
          <div className="hero-right">
            <h1>Hi, I'm Nishant Koundal</h1>
            <p>Frontend Developer | HTML, CSS, JavaScript, React</p>
            <div className="hero-buttons">
              <a href="images/Resume_NishantKoundal.pdf" download className="btn">Download Resume</a>
              <a href="https://github.com/Nishantkoundal" className="btn btn-github" target="_blank" rel="noreferrer">GitHub Profile</a>
            </div>
          </div>
        </section>
      </main>

      <section id='about1'>
        <div className="about" id="about">
        <div className="about-section">
          <div className="about-container">
            <div className="about-text">
              <h1>About Me</h1>
              <p>
  Hi, I’m a passionate <strong style={{ color: "rgb(43, 124, 245)" }}>Frontend Developer</strong> who loves turning ideas into clean, responsive, and interactive web experiences.
  I completed my 10+2 and currently pursuing <strong style={{ color: "rgb(43, 124, 245)" }}>B.Com from IGNOU</strong>. Though my academic path is not in tech, I’ve worked hard to build a strong foundation in <strong style={{ color: "rgb(43, 124, 245)" }}>HTML</strong>, <strong style={{ color: "rgb(43, 124, 245)" }}>CSS</strong>, <strong style={{ color: "rgb(43, 124, 245)" }}>JavaScript</strong>, and <strong style={{ color: "rgb(43, 124, 245)" }}>React</strong>.
  I enjoy solving real problems with code, creating smooth UI interactions, and building layouts that look good on any device. Every day, I aim to improve my skills, learn new tools, and create websites people love to use.
  Whether it's pixel-perfect design or seamless user experience, I’m all in when it comes to frontend.
</p>

            </div>
            <div className="about-image">
              <img src={secondimg} alt="Frontend Developer Illustration" />
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <h2>My Skills</h2>
        <div className="skills-container">
          {[
            { img: html5, title: "HTML5", desc: "Structure the web using semantic and accessible markup." },
            { img: css, title: "CSS3", desc: "Style pages with animations, layouts, and responsive design." },
            { img: js, title: "JavaScript", desc: "Make websites dynamic and interactive using core JS skills." },
            { img: bootstrap, title: "Bootstrap", desc: "Build responsive layouts faster with Bootstrap framework." },
            { img: react1, title: "React", desc: "Create modern single-page apps using reusable components." },
            { img: github, title: "GitHub", desc: "Collaborate and manage code with version control on GitHub." },
          ].map((skill, i) => (
            <div className="skill-box" key={i}>
              <img src={skill.img} alt={skill.title} />
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="projects-section">
          <h2>My Projects</h2>
          {[
            {
              img: myntra,
              title: "Myntra Clone",
              desc: "A basic clone of the Myntra website using HTML & CSS only.",
              live: "http://myprojectmyntrraa-060326.netlify.app/",
              git: "https://github.com/yourusername/myntra-clone"
            },
            {
              img: ttt,
              title: "Tic Tac Toe",
              desc: "Fun two-player Tic Tac Toe game built with JavaScript.",
              live: "http://tic-tac-toe-my18.netlify.app/",
              git: "https://github.com/yourusername/tic-tac-toe"
            },
            {
              img: rps,
              title: "Rock Paper Scissors",
              desc: "Interactive rock-paper-scissors game using JS logic.",
              live: "http://weather-app-my18.netlify.app/",
              git: "https://github.com/yourusername/rock-paper-scissors"
            },
            {
              img: weather,
              title: "Weather App",
              desc: "Get real-time weather updates by city using API & JS.",
              live: "http://weather-app-my18.netlify.app/",
              git: "https://github.com/yourusername/weather-app"
            },
          ].map((proj, i) => (
            <div className={`project-card${i % 2 ? ' right' : ''}`} key={i}>
              <div className="project-img">
                <img src={proj.img} alt={proj.title} />
              </div>
              <div className="project-content">
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
                <a href={proj.live} className="btn" target="_blank" rel="noreferrer">Live Preview</a>
                <a href={proj.git} className="btn" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id='contact1'>
        <div className="contact-section" id="contact">
        <div className="contact-container">
          <div className="contact-form">
            <h2>Contact Me</h2>
            <form id="contact-form" ref={formRef} onSubmit={sendEmail}>
              <input type="text" name="from_name" placeholder="Your Name" required />
              <input type="email" name="from_email" placeholder="Your Email" required />
              <input type="tel" name="phone" placeholder="Your Phone Number" required />
              <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
            <p id="form-message" style={{ marginTop: '10px', color: 'lime' }}>{formMessage}</p>
          </div>
          <div className="contact-image">
            <img src={contactImg} alt="Contact Illustration" />
          </div>
        </div>
        </div>
      </section>

      <footer>
        <div className="footer">
          <div className="footer-icons">
            <a href="https://www.instagram.com/i.nishxxt" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/nishant-koundal-09343a2b3/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/Nishantkoundal" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="mailto:nishantkoundal69@gmail.com"><i className="fas fa-envelope"></i></a>
          </div>
          <p className="footer-text">© 2025 Nishant Koundal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

