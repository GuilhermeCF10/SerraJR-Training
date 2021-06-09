import React from 'react'

import './style.css'

import logo from '../../assets/SerraJR.png';

function Main() {
    return (
        <div id="main">
            <div id="container">
                <div id="mainCard">
                    <div id="cardTitulo">
                        <span>SERRA JUNIOR ENGENHARIA</span>
                    </div>
                    <div id="cardLogo">
                        <img src={logo} width="84px" height="81" alt=""/>
                    </div>
                </div>
                <div id="botao">
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



function ShowAndHide() {
    let card = document.getElementById("mainCard");
    
    if (card.style.display == "none") {
        card.style.display = "flex";
    } 
    else {
        card.style.display = "none";
    }
}


export default Main;
