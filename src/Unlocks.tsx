import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Services } from "./Services";
import { Pallier, World,Product } from './World';
import { transform } from "./utils";

    type UnlocksProps ={
        myworld: World
        prod: Product
        services:Services
    }
    
    export default function Unlocks({myworld, prod, services}: UnlocksProps){

    return (

            < div className="unlock">
            <div>
              <h1 className="title">Unlocks</h1>
            </div>
            <div className="pageunlock">
              <div >  
                {prod.palliers.pallier.filter(unlock => !unlock.unlocked).map( 
                  unlock => 
                    <div key={unlock.idcible} className="unlockgrid">
                        <div className="logounlock">
                            <img className="round" src={services.server + unlock.logo} style={{borderRadius:'50%'}}/>
                        </div>
                      <div className="infosunlock">
                        <div className="nameunlock"> {myworld.products.product[unlock.idcible - 1].name}</div>
                        <div className="nameunlock"> {unlock.name}</div>
                        <div className="seuilunlock"> IL TE FAUT {unlock.seuil} {myworld.products.product[unlock.idcible - 1].name}</div>
                        <div className="seuilunlock"> {unlock.typeratio} x{unlock.ratio}</div>
                      </div>
                    </div>  
                  )}
              </div>
              <div className="modalallunlock">
                {myworld.allunlocks.pallier.filter(allunlocks => !allunlocks.unlocked).map( allunlocks => (
                    <div key={allunlocks.idcible} className="allunlock">
                      <div className="logoallunlock">
                        <img className="round" src={services.server + allunlocks.logo} />
                      </div>
                      <div className="infos">
                      <div className="nameallunlock"> {allunlocks.name}</div>
                        <div className="seuilallunlock"> {allunlocks.seuil}  </div>
                        <div className="ratioallunlock"> {allunlocks.typeratio} : x {allunlocks.ratio}</div>
                      </div>
                    </div>  
                  )
                  )}
              </div>
            </div>
          </div>
   
        )
      }