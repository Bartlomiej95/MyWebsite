import React from 'react';
import MainTemplate from './templates/MainTemplate';
import HomePage from './views/HomePage';


function App() {
  return (
    <div className="App">
      <MainTemplate>
        <HomePage />
      </MainTemplate>
      
    </div>
  );
}

export default App;
