import React, { useState, useEffect } from 'react';
import api from './services/api';

import "./App.css";
import backgroundImage from "./assets/image1.jpg";

import Header from './components/Header.js';

function App(){
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  function handleAddProject(){

    setProjects([ ... projects , `Novo Projeto ${Date.now()}`]);

    console.log(projects);
  }
  
  return (
            <>
              <Header title="Homepage"/>
                <ul>
                  {projects.map(project => <li key={project.id}>{project.title}</li>)}

                  <button type="button" onClick= {handleAddProject}>Adicionar Projeto</button>
                </ul>
            </>
          );
}

export default App;