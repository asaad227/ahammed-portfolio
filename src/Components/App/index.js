import React from 'react';
import   './index.css';
import {Route,  Routes} from "react-router-dom";
import Home from '../Home';
import Project from '../Project/projectData';
import About from '../About';
import Resume from '../Resume';

export default function App() {
  return (
   <div className='App'>
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
