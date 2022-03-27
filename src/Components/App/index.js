import React from 'react';
import   './index.css';
import {Route,  Routes} from "react-router-dom";
import Home from '../Home';
import Project from '../Project';
import About from '../About';

export default function App() {
  return (
   <div className='App'>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/project' element={<Project/>}/>
    <Route path='/about' element={<About/>}/>
    </Routes>
 
    </div>
  )
}
