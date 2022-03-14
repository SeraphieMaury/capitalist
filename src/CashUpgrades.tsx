import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Services } from "./Services";
import { Pallier, World, Product } from './World';
import startFabrication from './Product';

type CashUpgradesProps = {
    myworld: World
    services: Services
}

export default function Cashupgrades({ myworld, services }: CashUpgradesProps) {

    function buyCashupragdes(p: Pallier) {
        if (myworld.money >= p.seuil) {
            myworld.money = myworld.money - p.seuil;
            p.unlocked = true;
            if (p.idcible != 0) {
                if (p.typeratio = "gain") {
                    myworld.products.product[p.idcible - 1].revenu = myworld.products.product[p.idcible - 1].revenu * p.ratio;
                }
            }
            if (p.idcible == 0) {
                for (let i = 0; i < myworld.products.product.length; i++) {
                    if (p.typeratio = "gain") {
                        myworld.products.product[i].revenu = myworld.products.product[i].revenu * p.ratio;
                    }
                }
            }
        }
        else { }

    }

    return (
        < div className="cashupgrade">
            <div>
                <h1 className="title">Cash Upgrades</h1>
            </div>
            <div>
                <div className="pageupgrades">
                    {myworld.upgrades.pallier.filter(cashupgrades => !cashupgrades.unlocked).map(cashupgrades => (
                        <div key={cashupgrades.idcible} className="cashupgradegrid">
                            <div className="logo">
                                <img className="round" src= {services.server + cashupgrades.logo} style={{borderRadius:'50%'}} />
                            </div>
                            <div className="infoupgrade">
                                <div className="seuilupgrade"> {cashupgrades.seuil}  </div>
                                <div className="ratioupgrade"> {cashupgrades.typeratio} : x {cashupgrades.ratio}</div>
                            </div>
                            <div className="buycashupgrade">
                                <button onClick={() => buyCashupragdes(cashupgrades)} disabled={myworld.money < cashupgrades.seuil}>Acheter !</button>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>
        </div>

    )
}