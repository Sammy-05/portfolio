import './App.css';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom'
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import ProjectDesc from './components/ProjectDesc/ProjectDesc';
import CustomCursor from './components/Cursor/Cursor';
import { useState } from 'react';

function App() {

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className='bg-pageBackground'>
      <CustomCursor />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/projects' element={<Projects setSelectedProject={setSelectedProject} />}></Route>
        <Route path='/projectdesc' element={<ProjectDesc selectedProject={selectedProject} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
