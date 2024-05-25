import React from 'react';
import './Card.css'

export interface Project {
  title: string;
  subtitle: string;
  imageUrl: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "Cupping Therapy Sessions",
    subtitle: "\"Unlocking the power of the mind for a brighter, more fulfilling life.\"",
    imageUrl: "https://picsum.photos/800/600?image=1041",
    description: "Our cupping therapy sessions are designed to alleviate muscle tension, improve blood flow, and promote overall relaxation. Using traditional cupping techniques, our experienced practitioners create a soothing and therapeutic experience to help you feel rejuvenated and revitalized."
  }
  // Add more projects here if needed
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="projcard projcard-blue">
      <div className="projcard-innerbox">
        <img className="projcard-img" src={project.imageUrl} alt={project.title} />
        <div className="projcard-textbox">
          <div className="projcard-title">{project.title}</div>
          <div className="projcard-subtitle">{project.subtitle}</div>
          <div className="projcard-bar"></div>
          <div className="projcard-description">{project.description}</div>
          <div className="projcard-tagbox">
            <button><a href="#">Contact</a></button>
          </div>
        </div>
      </div>
    </div>
  );
};



export default ProjectCard;