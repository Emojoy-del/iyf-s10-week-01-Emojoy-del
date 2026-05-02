import './About.css';

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h1>About Joy</h1>

        <section className="about-section">
          <h2>Background</h2>
          <p>
            I am Joy, a passionate learner who enjoys web development, creative projects, and sharing ideas.
            I love turning concepts into clean code and building experiences that feel simple and welcoming.
          </p>
        </section>

        <section className="about-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend Development</h3>
              <ul>
                <li>React.js</li>
                <li>HTML5 & CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>Responsive Design</li>
                <li>Modern CSS (Flexbox, Grid)</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend Development</h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>RESTful APIs</li>
                <li>Database Design</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Tools & Technologies</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>npm/yarn</li>
                <li>Vite</li>
                <li>Webpack</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Soft Skills</h3>
              <ul>
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
                <li>Continuous Learning</li>
                <li>Attention to Detail</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Education & Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2024</div>
              <div className="timeline-content">
                <h3>Completed Introductory Web Development Course</h3>
                <p>Built several small websites and learned the fundamentals of web development.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2025</div>
              <div className="timeline-content">
                <h3>Personal Projects Focus</h3>
                <p>Worked on personal projects focused on user interface design and accessibility.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2026</div>
              <div className="timeline-content">
                <h3>Continued Growth in Front-end Development</h3>
                <p>Growing skills in front-end development and web standards, with a focus on React and modern JavaScript.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;