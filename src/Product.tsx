import Services from "./Services";
import './App.tsx';
import React, {ChangeEvent, useEffect, useState} from 'react';
import {Product, World} from "./World";


type ProductProps = {
prod: Product
services: Services
}
    export default function ProductComponent({ prod, services } : ProductProps) 
    {  

 /* function startFabrication() {
 const [progress, setProgress] = useState(0)
    
  setProgress
} */
   if (prod==null) return (
      <div></div>
   )
   else{
   return (
    <div>  
            <div className="produit1"> 
            <div className="lesdeux">
            <div className="lepremier">
            <img className="round" src={services.server + prod.logo} style={{width: '120px', borderRadius:'50%',transform: 'translate(+10%)'}}/>
            </div>
            <div className="lesecond">0</div>
            </div>
            <br></br>
            <div className="progress"> 
            <div className="progress__bar"></div>
            </div>
            <p id='fabrication' /* onClick = { () => startFabrication()} */>PRODUIRE {prod.name} POUR {prod.cout} CREDIT(S) ECTS</p>
            </div>
        </div>
   );}
};
 