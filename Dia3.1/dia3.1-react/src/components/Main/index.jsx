import React, { useState } from 'react'

import './style.css'

import logo from '../../assets/SerraJR.png';

export default function Main() {

    const [cardStatus, setCardStatus] = useState(true)

    let mainCard;


    
    if (cardStatus) {
        mainCard = (
            <div className="main-card">
                <div className="card-titulo">
                    <span>SERRA JUNIOR ENGENHARIA</span>
                </div>
                <div className="card-logo">
                    <img src={logo} wclassNameth="84px" height="81" alt=""/>
                </div>
            </div>
        )
    } else {
        mainCard = (
                <div></div>
            );
    
    } 
    



    function ShowAndHide() {
        setCardStatus(!cardStatus)   

        
    }

    return (
        <div className="main">
            <div className="card">
                {mainCard}
                <div className="botao">
                    <button onClick={ () => ShowAndHide()}>
                        <span>
                            Mostra / Esconde Card
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
