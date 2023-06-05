import React, { useEffect } from 'react';
import './styles/projects.css';
import $ from 'jquery';
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
 

const Projects = () => {

  useEffect(() => {
    const handleMouseLeave = () => {
      $(this).removeClass("hover");
    };

    $(".hover").mouseleave(handleMouseLeave);

   
    return () => {
      $(".hover").off("mouseleave", handleMouseLeave);
   };
  }, []);
    
  return (
    <>   
  <div  className='card__container' > 
<figure className="card">

  <img src={img1} alt="img1"/>

  <div className="date"><span class="day">3</span><span class="month">Mar</span></div><i className='bx bxl-react'></i>
  <figcaption>
    <h3>POKEAPI</h3>
    <p>
    Desarrollé un proyecto utilizando React y JavaScript para interactuar con la API de PokeAPI. Implementé funcionalidades como búsqueda, filtrado  de Pokémon. Utilicé componentes de React para mostrar detalles como nombres, imágenes y tipos. Demostré habilidades en desarrollo web y trabajo con APIs externas.
    </p>
    <button>Ver Proyecto</button>
  </figcaption><a href="https://pokedex-jamar-masias.netlify.app/"></a>
</figure>


<figure className="card">
<img src={img2} alt="img2"/> 
 <div className="date"><span class="day">17</span><span class="month">Feb</span></div><i className='bx bxl-react'></i>
  <figcaption>
    <h3>CRUD</h3>
    <p>
    Desarrollé un proyecto CRUD utilizando React y JavaScript, permitiendo crear, leer, actualizar y eliminar datos en una aplicación web. Utilicé componentes de React para una experiencia interactiva y demostré habilidades en desarrollo web y manipulación de datos en tiempo real.
    </p>
    <button>Ver Proyecto</button>
  </figcaption><a href="https://userapp-for-jamar-masias.netlify.app/"></a>
</figure>




<figure className="card">
<img src={img3} alt="img3"/> 
 <div className="date"><span class="day">10</span><span class="month">Feb</span></div><i className='bx bxl-react'></i>
  <figcaption>
    <h3>Rick y Morty API</h3>
    <p>
    Desarrollé un proyecto utilizando React y JavaScript para hacer una solicitud a la API de Rick and Morty. Implementé funcionalidades para mostrar detalles de personajes, ubicaciones y episodios. Utilicé componentes de React para renderizar los datos obtenidos y demostré habilidades en desarrollo web y consumo de APIs.
    </p>
    <button>Ver Proyecto</button>
  </figcaption><a href="https://rick-and-morty-for-jamar-masias.netlify.app/"></a>
</figure>
</div>
</>
  );
};

export default Projects;
