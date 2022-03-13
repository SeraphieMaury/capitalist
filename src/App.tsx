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
  const [isActive, setisActive] = useState(false);
  let [qtmulti, setQtmulti] = useState(1);
  let [vmulti, setVmulti] = useState('x1');


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
   setWorld(world => ({ ...world, money: world.money + value, score: world.score + value })) 
  }


  function multi() {
    if (qtmulti == 1) {
      setVmulti('x10');
      setQtmulti(10);
    }else
    if (qtmulti == 10) {
      setVmulti('x100');
      setQtmulti(100);
    }else
    if (qtmulti == 100) {
      setVmulti('Max');
      setQtmulti(1000);
    }else{
      setVmulti('x1');
      setQtmulti(1);
    }
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
            <div className ="multi" onClick={multi}> {qtmulti}
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
       
      <ProductComponent prod={world.products.product[0]} qtmulti={qtmulti} money={world.money} onProductionDone={onProductionDone} services={services} myworld={world}/> 
      <ProductComponent prod={world.products.product[1]} qtmulti={qtmulti} money={world.money} onProductionDone={onProductionDone} services={services} myworld={world}/>
      <ProductComponent prod={world.products.product[2]} qtmulti={qtmulti} money={world.money} onProductionDone={onProductionDone} services={services} myworld={world}/> 
      <ProductComponent prod={world.products.product[3]} qtmulti={qtmulti} money={world.money} onProductionDone={onProductionDone} services={services} myworld={world}/> 
      <ProductComponent prod={world.products.product[4]} qtmulti={qtmulti} money={world.money} onProductionDone={onProductionDone} services={services} myworld={world}/> 
      <ProductComponent prod={world.products.product[5]} qtmulti={qtmulti} money={world.money} onProductionDone={onProductionDone} services={services} myworld={world}/> 
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
