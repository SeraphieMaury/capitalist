import React,{useState} from 'react';
import './App.css';
import {World} from "./World";
import {Pallier} from "./World";
import Services from "./Services";
import ProductComponent from './Product';
import "./pages/World.css";
import {transform} from "./utils";

const Managers = () => {
const [services, setServices] = useState(new Services(""))
const [world, setWorld] = useState(new World())

const [isActive, setisActive] = useState(false);
const showManagers = () => {setisActive(!isActive)}

return (
    <div>
        <button className="boutonManager" onClick={showManagers} >
        MANAGERS
        </button>
        <div> { showManagers && 
<div className="modal">
 <div>
 <h1 className="title">Managers make you feel better !</h1>
 </div>
 <div>
 {world.managers.pallier.filter( manager => !manager.unlocked).map(
manager =>
 <div key={manager.idcible} className="managergrid">
 <div>
 <div className="logo">
 <img alt="manager logo" className="round" src= {
   services.server + manager.logo} />
 </div>
 </div>
 <div className="infosmanager">
 <div className="managername"> { manager.name} </div>
 <div className="managercible"> { 
 world.products.product[manager.idcible-1].name } </div>
 <div className="managercost"> { manager.seuil} </div>
 </div>
 {/* <div onClick={() => hireManager(world.managers)}> */}
 <button disabled={world.money < manager.seuil}>Embauché !</button>
 </div>
 
)}
 <button className="closebutton" onClick={showManagers}>Fermer</button>
 
 </div>
</div>
} </div>
</div>
);
}

export default Managers;