import React, { useState } from 'react';

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
                <ul>
                  {projects.map(project => <li key={project}>{project}</li>)}

                  <button type="button" onClick= {handleAddProject}>Adicionar Projeto</button>
                </ul>
            </>
          );
}

export default App;