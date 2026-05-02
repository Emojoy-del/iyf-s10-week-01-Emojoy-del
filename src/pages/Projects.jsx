import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application built with React.js, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Firebase.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400',
      technologies: ['React', 'Firebase', 'Material-UI', 'React DnD'],
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather and forecasts for multiple cities. Integrates with OpenWeatherMap API and features beautiful data visualizations.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400',
      technologies: ['React', 'Chart.js', 'OpenWeatherMap API', 'CSS Grid'],
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills. Built with React and deployed on Vercel with continuous integration.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
      technologies: ['React', 'Vite', 'CSS Modules', 'Vercel'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <div className="projects">
      <div className="projects-container">
        <h1>Projects Showcase</h1>
        <p className="projects-intro">
          Here are some of the projects I've worked on. Each project demonstrates different aspects of fullstack development,
          from frontend user interfaces to backend APIs and database integration.
        </p>

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href={project.demo} className="project-link demo-link" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;