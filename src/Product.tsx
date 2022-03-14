import Services from "./Services";
import './App.tsx';
import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import {Product, World} from "./World";
import ProgressBar from './ProgressBar';
import Box from '@mui/material/Box';

type ProductProps = {
prod: Product
qtmulti: number
onProductionDone: (product: Product) => void;
services: Services
myworld: World
}
    export default function ProductComponent({ prod, qtmulti, onProductionDone, services, myworld } : ProductProps) 
    {  

   const [progress, setProgress] = useState(0)
   const savedCallback = useRef(calcScore)
   let lastupdate = Date.now();

   useEffect(() => savedCallback.current = calcScore)
   
   useEffect(() => {
    let timer = setInterval(() => savedCallback.current(), 100)
    return function cleanup() {
    if (timer) clearInterval(timer)
    }
   }, [])

  function startFabrication(p: Product) {
     if (p.quantite>0) {
   setProgress(0)
   prod.timeleft=prod.vitesse
   lastupdate = Date.now()
     }
     calcMaxCanBuy();
}

 function calcScore() {
   if (prod == null){}
   else{
   if (prod.timeleft == 0) {}
   if (prod.timeleft == 0 && prod.managerUnlocked == true && prod.quantite>0) {
      startFabrication(prod);
   }
   if (prod.timeleft != 0){
      let now = Date.now();
      let lapsetime = now - lastupdate;
      prod.timeleft = prod.timeleft - lapsetime;
      lastupdate = now;
   
   if (prod.timeleft <= 0){
      setProgress(0);
      prod.timeleft = 0 ;
      onProductionDone(prod);
   }else{

      setProgress(((prod.vitesse - prod.timeleft) / prod.vitesse) * 100);
   } 
   }
}
}

   function calcMaxCanBuy() {
      let max = Math.log(1 + myworld.money * (prod.croissance - 1) / prod.cout) / (Math.log(prod.croissance))
        
        return max;
   }
 
   function buyProduct(p: Product) {
      if (myworld.money >= p.cout) {
         myworld.money = myworld.money - p.cout;
         p.quantite = p.quantite + 1;
         p.cout = p.cout * p.croissance;
      }
      for (let i = 0; i < p.palliers.pallier.length; i++) {
         if (p.id == p.palliers.pallier[i].idcible) {
             if (p.palliers.pallier[i].unlocked == false) {
                 if (p.quantite >= p.palliers.pallier[i].seuil) {
                     p.palliers.pallier[i].unlocked = true;
                     if (p.palliers.pallier[i].typeratio = "gain") {
                         p.revenu = p.revenu * p.palliers.pallier[i].ratio
                     }
                 }
             }
         }
     }
     for (let j = 0; j < myworld.allunlocks.pallier.length; j++) {
         if (myworld.allunlocks.pallier[j].unlocked == false) {
         if (p.quantite == myworld.products.product[0].quantite) {
             if (myworld.products.product[0].quantite == myworld.products.product[0].quantite) {
                 if (myworld.products.product[1].quantite == myworld.products.product[2].quantite) {
                     if (myworld.products.product[2].quantite == myworld.products.product[3].quantite) {
                         if (myworld.products.product[3].quantite == myworld.products.product[4].quantite) {
                             if (myworld.products.product[4].quantite == myworld.products.product[5].quantite) {
                                 if (myworld.products.product[5].quantite == myworld.allunlocks.pallier[j].seuil) {
                                     myworld.allunlocks.pallier[j].unlocked = true;
                                     for (let k = 0; k < myworld.products.product.length; k++) {
                                         if (myworld.allunlocks.pallier[j].typeratio = "gain") {
                                             myworld.products.product[k].revenu = myworld.products.product[k].revenu * myworld.allunlocks.pallier[j].ratio;
                                         }
                                     }
                                 }
                             }
                         }
                     }
                 }
             }
         }

     }
 }
   }

   if (prod==null) return (
      <div></div>
   )
   else{
   return (
    <div>  
            <div className="produit1"> 
            <div className="lesdeux">
            <div className="lepremier" onClick = { () => startFabrication(prod)}>
            <img id='fabrication' className="round" src={services.server + prod.logo} style={{width: '120px', borderRadius:'50%',transform: 'translate(+10%)'}}/>
            </div>
            <div className="lesecond">{prod.quantite}</div>
            </div>
            <br></br>
            <div>
            <div>{prod.name} RAPPORTE {Math.round((prod.cout * prod.quantite) * 100) / 100} CREDIT(S) ECTS</div>
            </div>
            <br></br>
            <div className="progress"> 
            <div className="progress__bar">
            <Box sx={{width: '100%'}}>
         <ProgressBar transitionDuration={"0.1s"} customLabel={" "} completed={progress}/>
        </Box></div>
            </div>
            <div>
             <button className="bouton" onClick = { () => buyProduct(prod)} disabled={myworld.money < prod.cout}>
                ACHETER {qtmulti} {prod.name} POUR {Math.round(prod.cout*qtmulti * 100) / 100} CREDIT(S) ECTS
             </button>
            </div>
            </div>
        </div>
   );
};
}
 