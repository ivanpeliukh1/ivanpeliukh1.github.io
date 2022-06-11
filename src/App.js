import React from 'react';
import { 
  BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { Memes } from './features/memes/Memes';
import { HotMemes } from './features/memes/HotMemes';
import './App.css';
import Navigation from './components/Navigation';
import AddMem from './features/memes/AddMem'


function RouteApp() {
  return useRoutes([
    {path: '/regular', element: <Memes />},
    {path: '/hot', element: <HotMemes />},
    {path: '/add', element: <AddMem />},
    {path: '*', element: <Memes />},
  ])
}

function App() {

  return (
    <div className="App">
      <div className="App-container">
        <Router>
          <Navigation />
          <RouteApp />
        </Router>
      </div>
    </div>
  );
}

export default App;
