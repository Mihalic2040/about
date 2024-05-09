import { useState } from 'react';
import menuItems from './MenuItes';
import './NavBar.css'

const NavBar = () => {
  const [name, setName] = useState(Generator())


  return (
    <nav className="navbar">
        <div className="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
                {/* <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Category</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Testimonial</a></li>
                <li><a href="#">Contact</a></li> */}
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.url}>
                      {item.title}
                    </a>
                  </li>
                ))}
            </ul>
            <h1 className="logo" onClick={() => {
              setName(Generator())
            }}>{name}</h1>
        </div>
    </nav>
  );
}

function Generator() {
  const phrases = [
    "Dev life",
    "Code ninja",
    "Tech wizard",
    "JS master",
    "CSS sucks",
    "HTML hero",
    "Code monkey",
    "Bug hunter",
    "Syntax sorcerer",
    "Logic legend",
    "Error whisperer",
    "Data wizard",
    "Algorithm artist",
    "Code crafter",
    "Digital magician",
    "Pixel perfectionist",
    "Function fiend",
    "API ace",
    "Backend boss",
    "Frontend fiend",
    "Database deity",
    "Design diva",
    "Version control virtuoso",
    "Agile aficionado",
    "Debugging dynamo",
    "Performance prophet",
    "Security sentinel",
    "Internet innovator",
    "Web wanderer",
    "Cyber samurai",
    "Networking ninja",
    "Cloud connoisseur",
    "AI enthusiast",
    "Blockchain buff",
    "Digital disruptor",
    "Innovation instigator",
    "Startup savant",
    "Entrepreneur extraordinaire",
    "Tech trendsetter",
    "Influential innovator",
    "Coding connoisseur",
    "Dev darling",
    "API architect",
    "Automation aficionado",
    "Tech trendsetter",
    "Code connoisseur",
    "Testing titan",
    "Deployment devotee",
    "Script sorcerer",
    "Database diva",
    "Not frontend",
    "Backend boss",
    "Data dynamo",
    "Tech titan",
    "Code commander",
    "Dev genius",
    "Innovation icon",
    "Startup superstar",
    "Digital dynamo",
    "Web wizard",
    "Cyber champion",
    "Cloud commander", 
    "Blockchain brawler",
    "Code connoisseur",
    "Testing titan",
    "Deployment devotee",
    "Script sorcerer",
    "Database diva",
    "Frontend fanatic",
    "Backend boss",
    "Data dynamo",
    "Design devotee",
    "Tech titan",
    "Code commander",
    "Dev genius",
    "Innovation icon",
    "Startup superstar",
    "Digital dynamo",
    "Web wizard",
    "Cyber champion",
    "Cloud commander",
    "Blockchain brawler",
    "Internet impresario",
    "Innovation instigator",
    "Tech trailblazer",
    "Coding champion",
    "Scripting sorcerer",
    "Algorithm architect",
    "Server superstar"
  ];

  return phrases[Math.floor(Math.random() * phrases.length)]
}

export default NavBar