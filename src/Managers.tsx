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
  }

export default function Managers ({ myworld, services } : ManagersProps) {  

const [isActive, setisActive] = useState(false);
const showManagers = () => {setisActive(!isActive)}
const hideManagers = () => {setisActive(isActive)}
 
console.log ("componentmanagers :",myworld.managers.pallier[0]);

/* return{
  isActive, showManagers
}; */

return (
  <div>
 {/*  <button onClick={showManagers} className="boutonMana" >
  MANAGERS
  </button> */}
  <div> { /* showManagers  && */ 
<div className="modal">
<div>
<h1 className="title">Managers make you feel better !</h1>
</div>
<div>
{myworld.managers.pallier.filter( manager => !manager.unlocked).map(
manager =>
<div key={manager.idcible} className="managergrid">
<div>
<div className="logo">
<img alt="manager logo" className="round" src= {services.server + manager.logo} />
</div>
</div>
<div className="infosmanager">
<div className="managername"> { manager.name} </div>
<div className="managercible"> { myworld.products.product[manager.idcible-1].name } </div>
<div className="managercost"> { manager.seuil} </div>
</div>
{/* <div onClick={() => hireManager(world.managers)}> */}
<button disabled={myworld.money < manager.seuil}>Embauché !</button>
</div>

)}
<button onClick={hideManagers} className="closebutton" >Fermer</button>

</div>
</div>
} </div>
</div>
);
}