import Services from "./Services";
import './App.tsx';
import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
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
   const [completed, setCompleted] = useState(0);
   const savedCallback = useRef(calcScore)
   let lastupdate = Date.now();

   useEffect(() => savedCallback.current = calcScore)
   
   useEffect(() => {
    let timer = setInterval(() => savedCallback.current(), 100)
    return function cleanup() {
    if (timer) clearInterval(timer)
    }
   }, [])

  function startFabrication() {
     
   setProgress(0)
   prod.timeleft=prod.vitesse
   lastupdate = Date.now()
    return (
       <div>
          {/* <ProgressBar completed={completed}/> */}
      </div>
   )
}

 function calcScore() {
   if (prod == null){}
   else{
   if (prod.timeleft == 0) {}
   else{
      let now = Date.now()
      let lapsetime = now - lastupdate
      prod.timeleft = prod.timeleft - lapsetime
      lastupdate = now
   
   if (prod.timeleft <= 0){
      setProgress(0)
      prod.timeleft = 0 
      onProductionDone(prod)
   }else{

      setProgress(((prod.vitesse - prod.timeleft) / prod.vitesse) * 100);
   } 
   }

   /* if (prod.managerUnlocked == true) {
      setProgress(((prod.vitesse - prod.timeleft) / prod.vitesse) * 100);

   } */
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
   );
};
}
 