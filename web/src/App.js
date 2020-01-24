import React, { useState, useEffect } from 'react';
import api from './services/api';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/Devitem';
import DevItem from './components/DevForm';

//component
//state
//propriedade


function App() {

  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

        setDevs(response.data);

    }
    loadDevs();
  }, [])

  async function handleAddDev(e) {

    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude
    });

    setGithubUsername('');
    setTechs('');

    setDevs([...devs, response.data]);
  }
  

    return ( 
      <div id="app">
        <aside>
          <strong className="">Cadastrar</strong>
  
        </aside>
        <main>
          <ul>
              {devs.map(dev => (
                  <DevItem key={dev._id} dev={props} />
              ))}
           
          </ul>
        </main>
      </div>
    )
}

export default App;