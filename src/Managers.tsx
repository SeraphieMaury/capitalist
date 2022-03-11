import React,{useState} from 'react';
import './App.css';
import {World} from "./World";
import {Pallier} from "./World";
import {Services} from "./Services";
import ProductComponent from './Product';
import "./pages/World.css";
import {transform} from "./utils";


type ManagersProps = {
  myworld: World
  services: Services
  showManagers : Function
  }

export default function Managers ({ myworld, services, showManagers } : ManagersProps) {  

 
console.log ("componentmanagers :",myworld.managers.pallier[0]);



return (
<div className="modal">
<div>
<h1 className="title">Choisissez vos managers !</h1>
</div>
<div className="manager">
{myworld.managers.pallier.filter( manager => !manager.unlocked).map(
manager =>
<div key={manager.idcible} className="managergrid">
<div>
<div className="logo">
<img className="round" src= {services.server + manager.logo} style={{borderRadius:'50%'}}/>
</div>
</div>
<div className="infosmanager">
<div className="managername"> {manager.name} </div>
<div className="managercible"> {myworld.products.product[manager.idcible-1].name} </div>
<div className="managercost"> {manager.seuil} crédits ECTS </div>
</div>
{/* <div onClick={() => hireManager(world.managers)}> */}
<button className="embauche" disabled={myworld.money < manager.seuil}>Embauché !</button>
</div>

)}

</div>
</div>
);
}