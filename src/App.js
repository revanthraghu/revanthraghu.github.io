import React from 'react';
import Intro from './components/Intro'
import Libraries from './components/Libraries';
import Projects from './components/Projects'

function App() {
  return (
    <React.Fragment>
      <Intro />
      <Libraries />
      <Projects/>
    </React.Fragment>
  );
}

export default App;
