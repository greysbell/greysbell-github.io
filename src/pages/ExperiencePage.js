import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import './Experience.css'; 

const experiences = [
  {
    company: 'Hatch',
    jobTitle: 'Software Developer',
    time: '2024',
    description: 'Leveraged front-end development expertise in TypeScript and Angular to design and implement a robust product setup and creation page, streamlining the user experience for adding and managing products. This enhancement improved workflow efficiency by 30%, significantly reducing the time required for product setup by team members. Exhibited a keen interest in UI/UX design principles, resulting in a more intuitive and responsive interface. This led to a 25% increase in user satisfaction and a 15% reduction in error rates during product entry.',
  },
  {
    company: 'RBC',
    jobTitle: 'Data Scientist',
    time: '2023',
    description: 'Developed an ETL pipeline leveraging Python\'s pandas library to efficiently extract data from Excel sheets, applying a custom algorithm to identify non-compliant employee vacation dates for a workforce of 10,000 employees. Integrated the data into an SQL database for further analysis. Created a Tableau dashboard visualizing non-compliant vacation patterns, enabling HR teams to enforce policies effectively, saving 8 hours of human labor per week and reducing unauthorized time-off incidents by 40%.',
  },
  {
    company: 'Hatch',
    jobTitle: 'Data Scientist',
    time: '2022',
    description: 'Migrated a MATLAB-based project to Python for an oil and gas rig, enhancing computational efficiency and scalability. The project involved integrating cloud-based processing, where data from Excel sheets was ingested, processed in HYSYS, and visualized in XMPRO. Optimized the end-to-end data processing pipeline, enabling real-time data analysis and decision-making. This transformation significantly reduced costs by eliminating MATLAB licenses.',
  },
];

const skills = ['HTML, CSS, JAVACRIPT', 'Angular, React', 'Python, Java, SQL', 'GraphQL, C, C++, Rust'];

const hobbies = [
    'I love playing chess, which helps me develop critical thinking and strategic planning skills.',
    'I enjoy composing and writing my own music, blending different genres to create unique sounds and experiences.',
  ];
  

const ExperiencePage = () => {
  return (
    <div className="experience">
         <header className="hero-section-nav">
        <nav style={{background:"black"}} className="menu">
        <img src={logo} alt="Logo" className="navbar-logo" />
          <ul className="nav-links">
            <li><NavLink to="/landing" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
            <li><NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink></li>
            <li><NavLink to="/experience" className={({ isActive }) => isActive ? "active" : ""}>Experience</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
          </ul>
        </nav>
      </header>

      <div className="wrapper">
        <h3 className="section-title">Experience</h3>
        <div className="experience-wrapper">
        {experiences.map((exp, index) => (
          <React.Fragment key={index}>
            <div className='item'>
            <div className="company-wrapper clearfix">
              <div className="experience-title">{exp.company}</div>
              <div className="time">{exp.time}</div>
            </div>
            <div className="job-wrapper clearfix">
              <div className="experience-title">{exp.jobTitle}</div>
              <div className="company-description">
                <p>{exp.description}</p>
              </div>
            </div>
            </div>
          </React.Fragment>
        ))}
      </div>

     
      <div  style={{width:"40%"}}className="section-wrapper clearfix">
        <h3 className="section-title">Skills</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index} className="skill-percentage">{skill}</li>
          ))}
        </ul>
      </div>

   
      <div className="section-wrapper clearfix">
        <h3 className="section-title">Hobbies</h3>
        {hobbies.map((hobby, index) => (
          <p key={index}>{hobby}</p>
        ))}
      </div>
      </div>
      <footer className="footer">
        <p>© 2024 My Portfolio | Designed by Greyston</p>
      </footer>
    </div>
  );
};

export default ExperiencePage;
