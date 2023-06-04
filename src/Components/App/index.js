import React,{useState} from 'react';
import   './index.css';
import {Route,  Routes} from "react-router-dom";
import Home from '../Home';
import Project from '../Project/projectData';
import About from '../About';
import Resume from '../Resume';
import DarkMode from '../DarkMode';

export default function App() {
  const [toggle, setToggle] = useState(false);
  return (
   <div className='App'>
   <DarkMode toggle={toggle} setToggle={setToggle}/>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="*" element={<h1>404 Not Found</h1>}/>
    <Route path='/project' element={<Project/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/resume' element={<Resume/>}/>
    </Routes>
 
    </div>
  )
}
