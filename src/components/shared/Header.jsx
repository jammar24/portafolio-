import React from 'react'
import { NavLink } from 'react-router-dom'
import  './styles/header.css'
import HeadLogo from '../shared/HeadLogo'



const Header = () => {
  return (
    <>
    <header className='header'>
        
        <nav className='header__nav'>
            <ul id='menuList'>
                <li>
                <NavLink  to='/' > Home</NavLink>
                </li>
                <li>
                    <NavLink  to='/sobremi' > Sobre mi</NavLink>
                </li>
                <li>
                    <NavLink to= '/proyectos'> Proyectos</NavLink>
                </li>
                 {/*<li>
                    <Link to= '/'>Project Gallery</Link>
                 </li>
                <li>
                    <Link to='/'> Blog</Link>
                </li>*/}
                <li>
                    <NavLink to='/contacto' > Contacto</NavLink>
                </li>
                
            </ul>
        </nav>
    </header>
    <HeadLogo/>        

    </>
  )
}

export default Header