import Services from "./Services";
import './App.tsx';
import React, {ChangeEvent, useEffect, useState} from 'react';
import {Product, World} from "./World";
import ProgressBar from './ProgressBar';
import Box from '@mui/material/Box';


type ProductProps = {
prod: Product
onProductionDone: (product: Product) => void,
services: Services
}
    export default function ProductComponent({ prod, onProductionDone, services } : ProductProps) 
    {  

   const [progress, setProgress] = useState(0) 
   const[lastupdate, setLastupdate] = useState(0)

  function startFabrication() {

   const [completed, setCompleted] = useState(0);

   useEffect(() => {
     setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
   }, []);

   return (
      <div>
         <ProgressBar completed={completed}/>
      </div>
   )
    /* useEffect(() => {
       const interval = setInterval(() => {
       setProgress(zeroValue => {
          const newValue = zeroValue + 100;

          if (newValue === 100){
             clearInterval(interval);
          }

          return newValue;
       });
    }, 1000);
   }, []); */

}

/* function calcScore() {
   if (prod.timeleft == 0) {
      setProgress(0)
   }else{
      prod.timeleft -= Date.now() - this.lastupdate
   }
   if (prod.timeleft =< 0){
      prod.progressbarvalue = 0
      prod.timeleft = 0
   }else{
      prod.progressbarvalue = ((this.product.vitesse - this.product.timeleft) / this.product.vitesse) * 100
   }
  // quand la production est terminée, on prévient le composant parent 
  onProductionDone(prod)
   } 
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
            <div className="progress__bar">
            <Box sx={{width: '100%'}}>
         <ProgressBar transitionDuration={"0.1s"} customLabel={" "} completed={progress}/>
        </Box></div>
            </div>
             <p id='fabrication' onClick = { () => startFabrication()} > PRODUIRE {prod.name} POUR {prod.cout} CREDIT(S) ECTS</p>
            </div>
        </div>
   );}
};
 