import React from 'react';
import { Button, globalReact8BitStyles } from '@irubingu/react-8bit-ui';

function App() {
  globalReact8BitStyles();
  return (
    <div className="App">
      <Button color="success">YEAAAH</Button>
    </div>
  );
}

export default App;
