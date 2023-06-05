import './App.css'
import Header from './components/shared/Header'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Footer from './pages/Footer'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'
import Aboutme from './pages/Aboutme'


function App() {


  return (
    <div className="App">
      <>
      <Header/>
       <Routes> 
        <Route  path='/'   element={<Home/>}/>
        <Route  exact path='/sobremi'   element={<Aboutme/>}/>
        <Route  exact path='/proyectos'   element={<Projects/>}/>
        <Route  exact path='/contacto'   element={<Contact/>}/>
        </Routes>
        <Footer/>

        <div> 
<ul className="background">
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
</ul>
</div>
     </>
    </div>
  )
}

export default App
