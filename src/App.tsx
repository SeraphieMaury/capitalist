import React, {ChangeEvent, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {World} from "./World";
import Front from "./pages/Front";
import Services from "./Services";

function App() {
  const [services, setServices] = useState(new Services(""))
  const [world, setWorld] = useState(new World())

  useEffect(() => {
    let services = new Services("")
    setServices(services)
    services.getWorld().then(response => {
    setWorld(response.data)
    }
    )
}, [])
  return (
    <div className="App">
      <Front/>
    </div>
  );
}

export default App;
