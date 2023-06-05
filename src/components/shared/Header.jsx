import React from 'react'
import { Link } from 'react-router-dom'
import  './styles/header.css'


const Header = () => {
  return (
    <>
    <header className='header'>
        
        <nav className='header__nav'>
            <ul id='menuList'>
                <li>
                <Link to='/'  ><i className='bx bxs-castle'></i> Home </Link>
                </li>
                <li>
                    <Link  to='/'> Aboutme</Link>
                </li>
                <li>
                    <Link  to='/projects'> Proyects</Link>
                </li>
                 {/*<li>
                    <Link to= '/'>Project Gallery</Link>
                 </li>
                <li>
                    <Link to='/'> Blog</Link>
                </li>*/  }
                <li>
                    <Link to='/contact'> Contact</Link>
                </li>
                
            </ul>
        </nav>
        <div id='links'>
        <a href="#" id="linkedin" data-url="" className="links__wb"></a>
                  
        </div>
    </header>
   
    </>
  )
}

export default Header