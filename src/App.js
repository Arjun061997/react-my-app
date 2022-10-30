import React from 'react'

import NavbarExample from './components/NavbarView'
import ControlledCarousel from './components/Carousel'
import CardExample from './components/Cards';
import { Card } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      
      <NavbarExample/>
      <ControlledCarousel/>
      <CardExample/>

</div>
  );
}

export default App;
