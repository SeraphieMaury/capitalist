import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Services } from "./Services";
import { Pallier, World,Product } from './World';
import { transform } from "./utils";

    type AllUnlocksProps ={
        myworld: World
        prod: Product
        services:Services
    }
    
    export default function AllUnlocks({myworld, prod, services}: AllUnlocksProps){

    return (

            < div className="unlock">
            <div>
              <h1 className="title">AllUnlocks</h1>
            </div>
            <div className="pageunlock">
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