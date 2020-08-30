import React from 'react';
import Intro from './components/Intro'
import Libraries from './components/Libraries';
import Projects from './components/Projects'

function App() {
  window.onload = () => {
    document.getElementById('loading').remove()
    let root = document.getElementById('root')
    root.setAttribute('style', 'opacity: 1; transition: all 0.5s ease')
  }
  return (
    <React.Fragment>
      <Intro />
      <Libraries />
      <Projects/>
    </React.Fragment>
  );
}

export default App;
