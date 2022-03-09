import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {World} from "./World";
import Services from "./Services";
import ProductComponent from './Product';
import "./pages/World.css";
import {transform} from "./utils";

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
      <div className="header">
            <div className = "logo"> 
            <div className ="titre">
            PROMO 2023 CAPITALIST
            </div>
            </div>
            <div className="box1"> 
            1 Crédit ECTS 
            </div>
            <div className="box2" style={{transform: 'translate(+380%)'}}> 
            <div className ="argent">
            <span dangerouslySetInnerHTML={{__html: transform(world.money)}}></span>
            </div>
            </div>
            <div className='id'> 
            Votre ID : 15482
            </div>
        </div>
        <hr></hr>
        <br></br>
    <div className="main">
        <div className="bouton"> 
        <p>
        <a className={`button boutonManager`} href="/managers" >
        MANAGERS
        </a>
        </p>
        <p style={{marginTop:'150px'}}>
        <a className={`button boutonUnlocks`} href="/unlocks" >
        UNLOCKS
        </a>
        </p>
        <p style={{marginTop:'150px'}}>
        <a className={`button boutonCash`} href="/cash" >
        CASH UPGRADES
        </a>
        </p>
        <p style={{marginTop:'150px'}}>
        <a className={`button boutonAngel`} href="/angel" >
        ANGEL UPGRADES
        </a>
        </p>
        <p style={{marginTop:'150px'}}>
        <a className={`button boutonInvestors`} href="/investors" >
        INVESTORS
        </a>
        </p>
        </div>
        <div className="product">
      <ProductComponent prod={ world.products.product[0]} services={ services }/> 
      <ProductComponent prod={ world.products.product[1]} services={ services }/>
      <ProductComponent prod={ world.products.product[2]} services={ services }/> 
      <ProductComponent prod={ world.products.product[3]} services={ services }/> 
      <ProductComponent prod={ world.products.product[4]} services={ services }/> 
      <ProductComponent prod={ world.products.product[5]} services={ services }/> 
    </div>
    </div>
    </div>
  );
}

export default App;
