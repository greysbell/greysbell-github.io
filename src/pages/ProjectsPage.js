import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import './ProjectsPage.css';

const Projects = () => {
  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (modalId) => {
    setOpenModal(modalId); 
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };


  const projectData = [
    {
      id: 1,
      title: 'Chatbot with Google Generative AI',
      shortDescription: 'Developed a responsive AI chatbot powered by Google Generative AI, deployed with a custom backend server for seamless communication.',
      modalDescription: 'This project involved building an intelligent chatbot using Google Generative AI, designed to answer questions about my experience, skills, and projects. The chatbot was integrated into a web application with a smooth and responsive UI, featuring a dynamic, conversational interface. The backend server, deployed with Render, handles API requests and interactions with the Generative AI model, enabling the bot to deliver concise and personalized responses. The chatbot was designed with user experience in mind, including custom styling for a friendly aesthetic, a history load feature, and a dynamic response format. This project enhanced my skills in backend development, API handling, and the deployment of server-based AI solutions, showcasing my ability to create engaging, interactive web applications with real-time communication capabilities.',
      colorClass: 'box-1'
    },
    {
      id: 2,
      title: 'Python Anti-Recoil Script for FPS Games',
      shortDescription: 'Developed a Python script that reads mouse recoil patterns, generates an inverse vector, and applies it to neutralize recoil in FPS games.',
      modalDescription: 'For this project, I created an anti-recoil Python script that reads and analyzes the recoil patterns of various firearms in first-person shooter (FPS) games. The script captures mouse movement data during recoil, converts it into a vector, and then inverts this vector to create an anti-recoil effect. When activated, the script moves the mouse in the opposite direction of the recoil to neutralize it, allowing for precise aiming and near-zero recoil. This project improved my skills in vector math, data capture from hardware inputs, and the ethical considerations of creating game scripts. It was an exciting intersection of gaming and programming.',
      colorClass: 'box-2'
    },
    {
      id: 3,
      title: 'Multi-Language "War" Card Game Development',
      shortDescription: 'Created the classic card game "War" in Rust, SmallTalk, Ruby, and Elixir, enhancing my understanding of different programming paradigms.',
      modalDescription: 'This project was an exploration of diverse programming paradigms. I implemented the card game "War" in four distinct languages: Rust (for its performance and memory safety), SmallTalk (to explore object-oriented programming in its purest form), Ruby (to leverage its simplicity and elegance), and Elixir (to take advantage of its concurrency model). Each version of the game followed the same rules but required unique approaches due to the characteristics of the languages. This project not only strengthened my proficiency in these languages but also provided valuable insights into their different runtime behaviors, garbage collection methods, and error handling mechanisms.',
      colorClass: 'box-3'
    },
    {
      id: 4,
      title: 'Bowling Score Tracker Terminal in Python',
      shortDescription: 'Built a command-line Python application to track and calculate bowling scores with a focus on real-time accuracy and user interaction.',
      modalDescription: 'This Python project was aimed at creating a command-line application that accurately tracks bowling scores while handling edge cases such as strikes and spares. The terminal application features a user-friendly interface that allows multiple players to input their scores, and it calculates running totals, applying the rules of bowling for perfect accuracy. I implemented logic to manage the special cases in the game, like consecutive strikes or spares, ensuring proper score calculations. This project enhanced my problem-solving skills, especially in dealing with scoring algorithms and real-time data processing.',
      colorClass: 'box-4'
    },
  ];
  

  return (
    <div className="project-page">
      <header className="hero-section-nav">
        <nav className="menu">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <ul className="nav-links">
            <li><NavLink to="/landing" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
            <li><NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink></li>
            <li><NavLink to="/experience" className={({ isActive }) => isActive ? "active" : ""}>Experience</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
          </ul>
        </nav>
      </header>

      <div className="container">
     
        {projectData.map((project) => (
          <div className={`box ${project.colorClass}`} key={project.id}>
            <span></span>
            <div className="content">
              <h2>{project.title}</h2>
              <p>{project.shortDescription}</p>
              <button className="link-1" onClick={() => handleOpenModal(project.id)}>Read More</button>
            </div>
          </div>
        ))}
      </div>

      {projectData.map((project) => (
        openModal === project.id && (
          <div className="modal-container" key={`modal-${project.id}`}>
            <div className="modal">
              <button className="modal__btn-close" onClick={handleCloseModal}>&times;</button>
              <h1 className="modal__title">{project.title}</h1>
              <p>{project.modalDescription}</p>
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default Projects;
