import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Product, World} from "./World";
import {Pallier} from "./World";
import Services from "./Services";
import ProductComponent from './Product';
import "./pages/World.css";
import {transform} from "./utils";
import Managers from './Managers';


function App() {
  const [services, setServices] = useState(new Services(""))
  const [world, setWorld] = useState(new World())
  const [prod, setProduct] = useState(new Product())
  const [isActive, setisActive] = useState(false);

  /* const showManagers = () => {setisActive(!isActive)}  */

  useEffect(() => {
    let services = new Services("")
    setServices(services)
    services.getWorld().then(response => {
    setWorld(response.data)
console.log ("====response :",response.data);

    }
    )
}, [])
console.log ("======word :",world);
console.log ("======managers :",world.managers.pallier[0]);

function showManagers() {
  if (isActive == true){
    setisActive(false)
  }else{
    setisActive(true)
  }
}
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

 function onProductionDone(p: Product): void {
  // calcul de la somme obtenue par la production du produit
  let gain = p.revenu * p.quantite
  // ajout de la somme à l’argent possédé
  //addToScore(gain)
 }
 

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
        
        </p>
    {/* <Managers myworld={world} services={ services }/>  */}
        <button onClick={showManagers} className="boutonMana" >
          MANAGERS
        </button> 
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
       
      <ProductComponent onProductionDone={onProductionDone} prod={ world.products.product[0]} services={ services }/> 
      <ProductComponent onProductionDone={onProductionDone} prod={ world.products.product[1]} services={ services }/>
      <ProductComponent onProductionDone={onProductionDone} prod={ world.products.product[2]} services={ services }/> 
      <ProductComponent onProductionDone={onProductionDone} prod={ world.products.product[3]} services={ services }/> 
      <ProductComponent onProductionDone={onProductionDone} prod={ world.products.product[4]} services={ services }/> 
      <ProductComponent onProductionDone={onProductionDone} prod={ world.products.product[5]} services={ services }/> 
    </div>
    { isActive &&
    <div className = "manager">
    <Managers myworld={world} services={ services } showManagers={showManagers}/>
    </div>
}
    </div>
    </div>
  );
}

export default App;
