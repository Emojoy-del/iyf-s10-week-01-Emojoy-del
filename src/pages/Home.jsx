import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Joy</h1>
          <p className="hero-subtitle">Fullstack Developer specializing in React.js, HTML & CSS</p>
          <p className="hero-description">
            Creative learner and aspiring web developer. I enjoy building simple, accessible websites and exploring new ideas online.
          </p>
          <a href="#about" className="cta-button">Learn More About Me</a>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400" alt="Joy's profile" />
        </div>
      </section>

      <section id="about" className="preview-section">
        <h2>Welcome</h2>
        <p>This site shows who I am, what I can do, and how to get in touch. Use the links below to learn more.</p>
        <div className="quick-links">
          <a href="/about" className="link-card">
            <h3>About Me</h3>
            <p>Learn about my background and skills</p>
          </a>
          <a href="/projects" className="link-card">
            <h3>Projects</h3>
            <p>Explore my recent work</p>
          </a>
          <a href="/contact" className="link-card">
            <h3>Contact</h3>
            <p>Get in touch with me</p>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;