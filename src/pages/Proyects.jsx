import React, { useEffect } from 'react';
import './styles/proyects.css';
import $ from 'jquery';
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
 

const Proyects = () => {

  useEffect(() => {
   //* const handleMouseLeave = () => {
     // $(this).removeClass("hover");
   // };

    //$(".hover").mouseleave(handleMouseLeave);

   
  //  return () => {
    //  $(".hover").off("mouseleave", handleMouseLeave);
  //  };*//
  }, []);
    
  return (
    <>   
  <div  className='card__container'> 
<figure className="card">

  <img src={img1} alt="img1"/>

  <div className="date"><span class="day">3</span><span class="month">Mar</span></div><i className='bx bxl-react'></i>
  <figcaption>
    <h3>POKEAPI</h3>
    <p>
      I don't need to compromise my principles, because they don't have the slightest bearing on what happens to me anyway.
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
      I don't need to compromise my principles, because they don't have the slightest bearing on what happens to me anyway.
    </p>
    <button>Ver Proyecto</button>
  </figcaption><a href="https://userapp-for-jamar-masias.netlify.app/"></a>
</figure>




<figure className="card">
<img src={img3} alt="img3"/> 
 <div className="date"><span class="day">10</span><span class="month">Feb</span></div><i className='bx bxl-react'></i>
  <figcaption>
    <h3>Rick and Morty API</h3>
    <p>
      I don't need to compromise my principles, because they don't have the slightest bearing on what happens to me anyway.
    </p>
    <button>Ver Proyecto</button>
  </figcaption><a href="https://rick-and-morty-for-jamar-masias.netlify.app/"></a>
</figure>
</div>
</>
  );
};

export default Proyects;
