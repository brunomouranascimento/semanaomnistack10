import React, { useEffect, useState } from 'react';
import './scss/App.scss';

import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';

import api from './services/api';

export function App () {

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setgithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);

      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, [])


  const handleChangeCoordinates = (e) => {
    if (e.id === "latitude") setLatitude(e.value);
    if (e.id === "longitude") setLongitude(e.value);
    if (e.id === "github_username") setgithubUsername(e.value);
    if (e.id === "techs") setTechs(e.value);
  }

  const handleAddDev = async (e) => {
    e.preventDefault();
    const response = api.post('/devs', {
      github_username,
      techs,
      longitude,
      latitude
    });

    console.log(response.data);

  }

  return (
    <div id="app">
      <Sidebar 
        latitude={latitude} 
        longitude={longitude} 
        github_username={github_username} 
        techs={techs} 
        onSubmit={handleAddDev}
        onChange={e => handleChangeCoordinates(e.target)}
      >
      </Sidebar>
      <Main></Main>
    </div>
  );
}
export default App;
