import React from 'react';
import Intro from './components/Intro'
import IntroTemp from './components/IntroTemp'
import Libraries from './components/Libraries';
import Projects from './components/Projects'

function App() {
  return (
    <React.Fragment>
      <Intro />
      <IntroTemp />
      <Libraries />
      <Projects/>
    </React.Fragment>
  );
}

export default App;
