import React from 'react';
import './Card.css'

export interface Project {
  title: string;
  subtitle: string;
  imageUrl: string;
  description: string;
  link: string;
}



const redirect = (url: string) => {
  window.location.href = url
}

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
            <a className='projcard-btn' href={project.link}>More</a>
          </div>
        </div>
      </div>
    </div>
  );
};



export default ProjectCard;