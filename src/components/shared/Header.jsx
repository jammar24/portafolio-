import React from 'react'
import { Link } from 'react-router-dom'
import  './styles/header.css'
import Body from '../../pages/Body'

const Header = () => {
  return (
    <>
    <header className='header'>
        <div>
            <Link to='/'  ><img  className='header__img' src={'./images/logo.png'} alt=""/></Link>
        </div>
        <nav className='header__nav'>
            <ul id='menuList'>
                <li>
                <Link to='/'  ><i className='bx bxs-castle'></i> Home </Link>
                </li>
                <li>
                    <Link  to='/'> Aboutme</Link>
                </li>
                <li>
                    <Link  to='/proyects'> Proyects</Link>
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
    <Body/>
    </>
  )
}

export default Header