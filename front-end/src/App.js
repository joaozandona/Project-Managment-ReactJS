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

  async function handleAddProject(){
    const title1 = document.getElementById('projectName').value;
    const owner1  = document.getElementById('projectOwner').value;

    const response = await api.post('projects', {
      title: `${title1}` ,
      owner: `${owner1}`
    });

    const project = response.data;

    setProjects([ ... projects, project]);
    
  }
  
  return (
            <>
              <Header title="Homepage"/>
                <ul>
                  {projects.map(project => <li key={project.id}>{project.title}</li>)}
                  <label>Nome do projeto:</label>
                  <input type="text" id="projectName" name="projectName"/>
                  <label>Dono do projeto:</label>
                  <input type="text" id="projectOwner" name="projectOwner"/>
                  <button type="button" onClick= {handleAddProject}>Adicionar Projeto</button>
                </ul>
            </>
          );
}

export default App;