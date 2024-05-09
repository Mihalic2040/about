import React from 'react';
import './About.css'
import avatar from '../../assets/avatar.png'; // Import your avatar image

const About = () => {
    return (
        <div className="about-container">
            <div className="avatar-container">
                <img src={avatar} alt="Avatar" className="avatar-image" />
            </div>
            <div className="about-content">
                <h2>Михайло Бевза</h2>
                <h3 className='secondName'>Mihalic2040</h3>
                <p>Hello, I have already told you my name, so I will tell you about what I do.</p>
                <p>My passion is building perfect and stable p2p networks. I put my soul and a lot of humor into my projects. Also, you can't forget about the time I spend on it! Learn more about my projects on <a href="https://github.com/Mihalic2040">Github</a> or in the <a href="/projects">Projects tab</a>.</p>
            </div>
        </div>
    );
}

export default About;
