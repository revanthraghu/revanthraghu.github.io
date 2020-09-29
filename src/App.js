import React from 'react';
import Intro from './components/Intro'
import Contact from './components/Contact'
import Libraries from './components/Libraries';
import Projects from './components/Projects'

function App() {
  return (
    <React.Fragment>
      <Intro />
      <Libraries />
      <Projects/>
      <Contact />
    </React.Fragment>
  );
}

export default App;
