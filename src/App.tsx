import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Product, World, Pallier} from "./World";
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


  useEffect(() => {
    let services = new Services("")
    setServices(services)
    services.getWorld().then(response => {
    setWorld(response.data)
console.log ("====response :",response.data);

    }
    )
}, [])

function showManagers() {
  if (isActive == true){
    setisActive(false)
  }else{
    setisActive(true)
  }
}

 function onProductionDone(p: Product): void {
  // calcul de la somme obtenue par la production du produit
  let gain = p.revenu * p.quantite;
  // ajout de la somme à l’argent possédé
  addToScoreP(gain);
 }
 
 function addToScoreP(value: number): void {
   setWorld(world => ({ ...world, money: world.money + value, score: world.score + value}))
 }


  return (
    <div className="App">
      <img src={services.server + world.logo}/>
      <div className="header">  
            <div className ="titre">
            PROMO 2023 CAPITALIST
            </div>
            <div className="box1"> 
            <span dangerouslySetInnerHTML={{__html: transform(world.money)}}></span> Crédit ECTS 
            </div>
            <div className="box2" style={{transform: 'translate(+380%)'}}> 
            <div className ="argent">
            x0
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
        <button onClick={showManagers} className="bouton">
          MANAGERS
        </button> 
        <p style={{marginTop:'150px'}}>
        <button className="bouton">
        UNLOCKS
        </button>
        </p>
        <p style={{marginTop:'150px'}}>
        <button className="bouton">
        CASH UPGRADES
        </button>
        </p>
        <p style={{marginTop:'150px'}}>
        <button className="bouton">
        ANGEL UPGRADES
        </button>
        </p>
        <p style={{marginTop:'150px'}}>
        <button className="bouton">
        INVESTORS
        </button>
        </p>
        </div>
        <div className="product">
       
      <ProductComponent prod={ world.products.product[0]} onProductionDone={onProductionDone} services={ services }/> 
      <ProductComponent prod={ world.products.product[1]} onProductionDone={onProductionDone} services={ services }/>
      <ProductComponent prod={ world.products.product[2]} onProductionDone={onProductionDone} services={ services }/> 
      <ProductComponent prod={ world.products.product[3]} onProductionDone={onProductionDone} services={ services }/> 
      <ProductComponent prod={ world.products.product[4]} onProductionDone={onProductionDone} services={ services }/> 
      <ProductComponent prod={ world.products.product[5]} onProductionDone={onProductionDone} services={ services }/> 
    </div>
    { isActive &&
    <div className = "modal">
    <Managers myworld={world} services={ services } showManagers={showManagers}/>
    </div>
    
}
    </div>
    </div>
  );
}

export default App;
