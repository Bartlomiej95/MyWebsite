import React from 'react';
import MainTemplate from './templates/MainTemplate';
import HomePage from './views/HomePage';


function App() {
  return (
    <div className="App">
      <MainTemplate>
        <h1>Witaj na mojej stronie</h1>
        <HomePage />
      </MainTemplate>
      
    </div>
  );
}

export default App;
