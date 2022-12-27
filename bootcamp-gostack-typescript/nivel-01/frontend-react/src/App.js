import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './app.css';
import api from './services/api';


function App() {

  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    api.get("/projects").then(response => {
      setProjects(response.data)
      console.log(response)
    })
  }, [projects])


  async function handleAddProject(){
    setProjects([...projects, `Novo Projeto ${Date.now()}`]);

    const project = await api.post('/projects', {
      title: 'Teste01',
      owner: "Gustavo"
    });

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Homepage">
        <ul>
          <li>HomePage</li>
          <li>HomePage</li>
        </ul>
      </Header>
      
      <ul>
        { projects.map(project => <li key={project.id}>{project.title}</li>) }
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  )
}

export default App;