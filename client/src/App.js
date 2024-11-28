/*Final Project: Quiz Application with Microservices
  Date: 30/05/2023
  Authors:
            A01750624 Paulina Guadalupe Alva Martinez
            A01751117 Luna Abril Gallegos Espinola
            A01378450 Jorge Alberto Penagos Mendez
            A01750363 Naomi Anciola Calderon */

import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="App-content">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
