import React from 'react';
import logo from './logo.svg';
import { Button, globalReact8BitStyles } from '@irubingu/react-8bit-ui';

function App() {
  globalReact8BitStyles();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button color="error">YEAAAH</Button>
      </header>
    </div>
  );
}

export default App;
