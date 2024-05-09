import React from 'react';
import './Card.css'; // Import your CSS file for styling

interface CardProps {
  logoUrl: string;
  projectName: string;
  description: string;
  buttons: { text: string; onClick: () => void }[];
}

const Card: React.FC<CardProps> = ({ logoUrl, projectName, description, buttons }) => {
  return (
    <div className="card">
      <div className="logo-container">
        <img src={logoUrl} alt="Project Logo" className="logo" />
      </div>
      <div className="content">
        <h2>{projectName}</h2>
        <p>{description}</p>
        <div className="button-container">
          {buttons.map((button, index) => (
            <button key={index} onClick={button.onClick}>
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
