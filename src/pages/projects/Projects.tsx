import CardGenerator from '../../components/card/Card';
import ProjectCard from '../../components/card/Card';
import Card, { Project } from '../../components/card/Card';
import './Projects.css'
import invetory from '../../assets/invetory.png'



const Projects = () => {
    const projects: Project[] = [
        {
            title: "Rosa",
            subtitle: "\"Messaging Redefined - Secure, Swift, Decentralized.\"",
            imageUrl: "https://github.com/Rosa-Devs/.github/raw/main/images/Logo.svg",
            description: "Project aims to create a decentralized messaging platform that prioritizes user safety and network speed. Inspired by the limitations of traditional client-server architectures used by popular messengers, this project seeks to provide a more reliable and secure communication service.",
            link: 'https://github.com/Rosa-Devs'
        },{
            title: "Invetory",
            subtitle: "\"A company program that actively monitors the flow of official company items.\"",
            imageUrl: invetory,
            description: "The web application is mobile-oriented. Designed to quickly determine which employee has the official item. The logic of transferring items through special transfer codes ensures fast work without delays for employees.",
            link: '/projects'
        }
            // },{
        //     title: "Cupping Therapy Sessions",
        //     subtitle: "\"Unlocking the power of the mind for a brighter, more fulfilling life.\"",
        //     imageUrl: "https://picsum.photos/800/600?image=1041",
        //     description: "Our cupping therapy sessions are designed to alleviate muscle tension, improve blood flow, and promote overall relaxation. Using traditional cupping techniques, our experienced practitioners create a soothing and therapeutic experience to help you feel rejuvenated and revitalized.",
        //     link: 'github.com'
        // }
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