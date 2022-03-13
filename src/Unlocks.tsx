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
            <div className="pagemenu">
              <div >  
                {prod.palliers.pallier.filter(unlock => !unlock.unlocked).map( unlock => (
                    <div key={unlock.idcible} className="grid">
                      <div>
                        <div className="logo">
                            <img className="round" src={services.server + unlock.logo} style={{borderRadius:'50%'}}/>
                        </div>
                      </div>
                      <div className="infos">
                        <div className="name"> {myworld.products.product[unlock.idcible - 1].name}</div>
                        <div className="name"> {unlock.name}</div>
                        <div className="seuil"> IL TE FAUT {unlock.seuil} {myworld.products.product[unlock.idcible - 1].name}</div>
                        <div className="seuil"> {unlock.typeratio} x{unlock.ratio}</div>
                      </div>
                    </div>  
                  )
                  )}
              </div>
              <div>
                {myworld.allunlocks.pallier.filter(allunlocks => !allunlocks.unlocked).map( allunlocks => (
                    <div key={allunlocks.idcible} className="allunlock">
                      <div className="logo">
                        <img className="round" src={services.server + allunlocks.logo} />
                      </div>
                      <div className="infos">
                        <div className="seuil"> {allunlocks.seuil}  </div>
                        <div > {allunlocks.typeratio} : x {allunlocks.ratio}</div>
                      </div>
                    </div>  
                  )
                  )}
              </div>
            </div>
          </div>
   
        )
      }