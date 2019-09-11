import React from 'react';
import Main from './components/Layout/Main';
import Home from './components/Pages/Home';

function App() {
  return (
    <div className="App">
      <Main>
        <Home />
      </Main>
    </div>
  );
}

export default App;
