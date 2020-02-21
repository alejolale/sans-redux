import React, { useState } from 'react';
import './App.css';
import LightComponent from './LightComponent';
import NavBar from './NavBar';

const App = () => {

  //state & function to acces all components

  const [light, setLight]= useState('on');
    
  const onSwitch = () => {
    light === 'on' ? setLight('off') : setLight('on');
  }


  return (
    <div className="App">
      <NavBar light={ light } />
      <LightComponent light={ light } onSwitch={ onSwitch } />
    </div>
  );
}

export default App;
