import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {World} from "./World";
import Front from "./pages/Front";
import Services from "./Services";
//import 'Product.tsx';
import Product from "./Product";

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

// const savedCallback = useRef(calcScore)
// useEffect(() => savedCallback.current = calcScore)
// useEffect(() => {
//  let timer = setInterval(() => savedCallback.current(), 100)
//  return function cleanup() {
//  if (timer) clearInterval(timer)
//  }
// }, [])

// useEffect(() => {
//   let timer = setInterval(() => sacalcScore(), 100)
//   return function cleanup() {
//   if (timer) clearInterval(timer)
//   }
//  }, [])

// setInterval(() => scalcScore(), 100)

  return (
    <div className="App">
      <img src={services.server + world.logo}/>
      <Front/>
      <Product prod={ world.products.product[0] } services={ services }/>
    </div>
  );
}

export default App;
