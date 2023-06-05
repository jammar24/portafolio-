import './App.css'
import Header from './components/shared/Header'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Footer from './pages/Footer'
import Name from './pages/Name'
import Contact from './pages/Contact'
import HomeName from './pages/HomeName'
import Body from './pages/Body'
import HeadLogo from './components/shared/HeadLogo'


function App() {


  return (
    <div className="App">
      <Header/>
       <HeadLogo/>  
         <Name/> 
            <HomeName/>
      <Home/> 
        <Body/>
     <Projects/>

       <Contact/>
        <Footer/>
     
   
    </div>
  )
}

export default App
