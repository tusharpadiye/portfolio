//import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Screens/Home';
import Contact from './Screens/Contact';
import About from './Screens/About';
import Projects from './Screens/Projects';




function App() {
  return (
    
      <div >
          <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/contact' element={<Contact/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/projects' element={<Projects/>}/>

          </Routes>
          
          
          
      </div>


  );
}

export default App;
