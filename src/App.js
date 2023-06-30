//import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Screens/Home';
import Contact from './Screens/Contact';
import About from './Screens/About';
import Projects from './Screens/Projects';
import Education from './Screens/Education';




function App() {
  return (
    
      <div >
          <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/contact' element={<Contact/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/projects' element={<Projects/>}/>
             <Route path='/education' element={<Education/>}/>
          </Routes>
          
          
          
      </div>


  );
}

export default App;
