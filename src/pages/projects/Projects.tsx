import CardGenerator from '../../components/card/Card';
import ProjectCard from '../../components/card/Card';
import Card, { Project } from '../../components/card/Card';
import './Projects.css'



const Projects = () => {
    const projects: Project[] = [
        {
            title: "Cupping Therapy Sessions",
            subtitle: "\"Unlocking the power of the mind for a brighter, more fulfilling life.\"",
            imageUrl: "https://picsum.photos/800/600?image=1041",
            description: "Our cupping therapy sessions are designed to alleviate muscle tension, improve blood flow, and promote overall relaxation. Using traditional cupping techniques, our experienced practitioners create a soothing and therapeutic experience to help you feel rejuvenated and revitalized."
        },{
            title: "Cupping Therapy Sessions",
            subtitle: "\"Unlocking the power of the mind for a brighter, more fulfilling life.\"",
            imageUrl: "https://picsum.photos/800/600?image=1041",
            description: "Our cupping therapy sessions are designed to alleviate muscle tension, improve blood flow, and promote overall relaxation. Using traditional cupping techniques, our experienced practitioners create a soothing and therapeutic experience to help you feel rejuvenated and revitalized."
        },{
            title: "Cupping Therapy Sessions",
            subtitle: "\"Unlocking the power of the mind for a brighter, more fulfilling life.\"",
            imageUrl: "https://picsum.photos/800/600?image=1041",
            description: "Our cupping therapy sessions are designed to alleviate muscle tension, improve blood flow, and promote overall relaxation. Using traditional cupping techniques, our experienced practitioners create a soothing and therapeutic experience to help you feel rejuvenated and revitalized."
        }
        ];

   return (
    <div className="card-container">
        <div className="projcard-container">
        {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
        ))}
        </div>
    </div>   
   ); 
}

export default Projects;