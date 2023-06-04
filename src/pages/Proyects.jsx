import React, { useEffect } from 'react';
import './styles/proyects.css';
import $ from 'jquery';
 

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

  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample66.jpg" alt="sample66"/>

  <div className="date"><span class="day">28</span><span class="month">Oct</span></div><i className="ion-film-marker"></i>
  <figcaption>
    <h3>The World Ended Yesterday</h3>
    <p>
      I don't need to compromise my principles, because they don't have the slightest bearing on what happens to me anyway.
    </p>
    <button>Read More</button>
  </figcaption><a href="#"></a>
</figure>


<figure className="card">
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample66.jpg" alt="sample66"/>
  <div className="date"><span class="day">28</span><span class="month">Oct</span></div><i className="ion-film-marker"></i>
  <figcaption>
    <h3>The World Ended Yesterday</h3>
    <p>
      I don't need to compromise my principles, because they don't have the slightest bearing on what happens to me anyway.
    </p>
    <button>Read More</button>
  </figcaption><a href="#"></a>
</figure>




<figure className="card">
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample66.jpg" alt="sample66"/>
  <div className="date"><span class="day">28</span><span class="month">Oct</span></div><i className="ion-film-marker"></i>
  <figcaption>
    <h3>The World Ended Yesterday</h3>
    <p>
      I don't need to compromise my principles, because they don't have the slightest bearing on what happens to me anyway.
    </p>
    <button>Read More</button>
  </figcaption><a href="#"></a>
</figure>
</div>
</>
  );
};

export default Proyects;
