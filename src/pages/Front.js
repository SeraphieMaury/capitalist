import React from 'react';
import "./World.css";

const Front = () => {
    return(
<div className="world">
        <div className="header">
            <div className = "logo"> 
            <img src="./images/logoISIS.png" alt="logoISIS" style={{width: '80px'}}/>
            <br></br>
            <div className ="titre">
            PROMO 2023 CAPITALIST
            </div>
            </div>
            <div className="box1"> 
            1 Crédit ECTS 
            </div>
            <div className="box2" style={{transform: 'translate(+380%)'}}> 
            x0
            </div>
            <div className='id'> 
            Votre ID : 15482
            </div>
        </div>
        <hr></hr>
        <br></br>
    <div className="main">
        <div className="bouton"> 
        <p>
        <a className={`button boutonManager`} href="/managers" >
        MANAGERS
        </a>
        </p>
        <p style={{marginTop:'100px'}}>
        <a className={`button boutonUnlocks`} href="/unlocks" >
        UNLOCKS
        </a>
        </p>
        <p style={{marginTop:'100px'}}>
        <a className={`button boutonCash`} href="/cash" >
        CASH UPGRADES
        </a>
        </p>
        <p style={{marginTop:'100px'}}>
        <a className={`button boutonAngel`} href="/angel" >
        ANGEL UPGRADES
        </a>
        </p>
        <p style={{marginTop:'100px'}}>
        <a className={`button boutonInvestors`} href="/investors" >
        INVESTORS
        </a>
        </p>
        </div>
        <div className="product">
            <div className="produit1"> 
            <img src="./images/colin.jpg" alt="colin" style={{width: '120px', borderRadius:'50%',transform: 'translate(+55%)'}}/>
            <div class="progress"> 
            <div class="progress__bar"></div>
            </div>
            <p>ACHETER COLIN POUR 1 CREDIT ECTS</p>
            </div>
            <div className="produit2"> 
            <img src="./images/johana.jpg" alt="colin" style={{width: '120px', borderRadius:'50%',transform: 'translate(+55%)'}}/>
            <div class="progress"> 
            <div class="progress__bar"></div>
            </div>
            <p>PRODUIRE JOHANA POUR 3 CREDIT ECTS</p>
            </div>
            <div> troisième produit </div>
            <div> quatrième produit </div>
            <div> cinquième produit </div>
            <div> sixième produit </div>
        </div>
    </div>
</div>
    );
};

export default Front;