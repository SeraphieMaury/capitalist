import React,{useState} from 'react';
import './App.css';
import {World} from "./World";
import {Pallier} from "./World";
import {Product} from "./World";
import {Services} from "./Services";
import ProductComponent from './Product';
import "./pages/World.css";
import {transform} from "./utils";

type ManagersProps = {
  myworld: World
  services: Services
  }

export default function Managers ({ myworld, services} : ManagersProps) {  
  
  function hireManager(m: Pallier) {
    if (myworld.products.product[m.idcible - 1].quantite > 0) {
    myworld.money -= m.seuil;
    m.unlocked = true;
    myworld.products.product[m.idcible - 1].managerUnlocked = true;
  }
  else{
  <div>Tu n'as pas de" + {Product.name} + "en stock"</div>    //ça fonctionne pas
}
} 


return (
<div className="modal">
  <div>
    <h1 className="title">Choisis tes managers !</h1>
  </div>
  <div className="pagemenu">
    {myworld.managers.pallier.filter( manager => !manager.unlocked).map(
    manager =>
      <div key={manager.idcible} className="grid">
        <div>
          <div className="logo">
            <img className="round" src= {services.server + manager.logo} style={{borderRadius:'50%'}}/>
          </div>
        </div>
          <div className="infos">
            <div className="name"> {manager.name} </div>
            <div className="name"> MANAGER DE </div>
            <div className="cible"> {myworld.products.product[manager.idcible-1].name} </div>
            <div className="seuil"> {manager.seuil} CREDIT(S) ECTS </div>
          </div>
            <div onClick={() => hireManager(manager)}>
              <button className="embauche" disabled={myworld.money < manager.seuil}>Embaucher !</button>
            </div>
      </div>
    )
  }
  </div>
</div>
);
}