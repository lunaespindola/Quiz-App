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
