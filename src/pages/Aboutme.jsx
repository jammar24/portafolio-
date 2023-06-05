import React, { useState } from 'react'
import'./styles/aboutme.css'

const Aboutme = () => {
    const [skills, setSkills] = useState([
        {
          id: 1,
          name: 'HTML',
          icon: 'https://cdn-icons-png.flaticon.com/128/919/919827.png',
          progress: 90,
          description:
            'Amplia experiencia en el desarrollo de estructura y semántica web utilizando HTML5.',
        },
        {
          id: 2,
          name: 'CSS',
          icon: 'https://cdn-icons-png.flaticon.com/128/919/919826.png',
          progress: 85,
          description:
            'Habilidades avanzadas en el diseño de estilos y maquetación de sitios web con CSS3.',
        },
        {
          id: 3,
          name: 'JavaScript',
          icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968292.png',
          progress: 80,
          description:
            'Dominio de JavaScript y capacidad para crear interacciones dinámicas y funcionales.',
        },
        {
          id: 4,
          name: 'React',
          icon: 'https://t3.ftcdn.net/jpg/03/04/97/12/240_F_304971233_mQ4xlfnBGSszgzJPYzQnZtWI04ZNmuuP.jpg',
          progress: 75,
          description:
            'Experiencia en el desarrollo de aplicaciones web modernas utilizando React y React Hooks.',
        },
      ]);
    
      const toggleSkillDetails = (id) => {
        setSkills((prevSkills) =>
          prevSkills.map((skill) =>
            skill.id === id ? { ...skill, showDetails: !skill.showDetails } : skill
          )
        );
      };
  return (
    <div className="about-me">
    <div className="about-content">
      <h2 className="section-title">Acerca de mí</h2>
      <p className="about-description">
      Soy un apasionado desarrollador web especializado en la creación de sitios web interactivos y receptivos. Con experiencia en lenguajes como HTML, CSS y JavaScript, mi objetivo es combinar diseño elegante y funcionalidad para ofrecer soluciones web de alta calidad. Explora mi portafolio y descubre cómo puedo ayudarte a alcanzar tus objetivos en línea. ¡Contáctame y trabajemos juntos para crear algo asombroso!
      </p>
    </div>

    <div className="skills">
      <h3 className="skills-title">Habilidades</h3>
      <ul className="skills-list">
        {skills.map((skill) => (
          <Skill key={skill.id} skill={skill} toggleSkillDetails={toggleSkillDetails} />
        ))}
      </ul>
    </div>
  </div>
);
};

const Skill = ({ skill, toggleSkillDetails }) => {
const { id, name, icon, progress, description, showDetails } = skill;

return (
  <li className="skill" onClick={() => toggleSkillDetails(id)}>
    <div className="skill-icon">
    <img src={icon} alt={name} />
    </div>
    <div className="skill-details">
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <div className={`skill-toggle ${showDetails ? 'open' : ''}`}>&#x25B2;</div>
      </div>
      {showDetails && (
        <div className="skill-description">
          <p>{description}</p>
        </div>
      )}
      <div className="skill-bar">
        <div className="skill-progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  </li>

  )
}

export default Aboutme