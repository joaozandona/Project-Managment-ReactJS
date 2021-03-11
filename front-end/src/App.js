import React, { useState } from 'react';

import "./App.css";
import backgroundImage from "./assets/image1.jpg";

import Header from './components/Header.js';

function App(){
  const [projects, setProjects] = useState(['Desenvolvimento de app',  'Front-end web']);
  
  function handleAddProject(){

    setProjects([ ... projects , `Novo Projeto ${Date.now()}`]);

    console.log(projects);
  }
  
  return (
            <>
              <Header title="Homepage"/>
              <img width={250} src={backgroundImage}/>
                <ul>
                  {projects.map(project => <li key={project}>{project}</li>)}

                  <button type="button" onClick= {handleAddProject}>Adicionar Projeto</button>
                </ul>
            </>
          );
}

export default App;