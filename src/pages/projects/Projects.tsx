import Card from '../../components/card/Card';
import './Projects.css'


const Projects = () => {
    const project = {
        logoUrl: 'https://raw.githubusercontent.com/Rosa-Devs/.github/main/images/Logo.svg',
        projectName: 'Sample Project',
        description: 'This is a sample project description.',
        buttons: [
        { text: 'Learn More', onClick: () => console.log('Learn More clicked') },
        { text: 'GitHub', onClick: () => console.log('GitHub clicked') },
        ],
    };
    return (
        <div className="card-container">
            <Card
                logoUrl={project.logoUrl}
                projectName={project.projectName}
                description={project.description}
                buttons={project.buttons}
            />
        </div>
        
    )
}

export default Projects;