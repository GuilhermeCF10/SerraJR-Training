import React from 'react'

import './style.css'


//JSON
var dados = {
    nome: ["Guilherme", "João Matheus", "Júlya", "Thiago"],
    idade: [18, 19, 19, 19],
    time: ["Fluminense", "Flamengo", "Flamengo", "Flamengo"],
    sobrenome: ["Fialho", "Ramos", "Matias", "Paixão"],
};

function Main() {

    
  
    return (
        <div className="main">
            <div className="card">
                <div className="membros">
                    <div className="membrosTitulo">
                        <h5>
                            {dados.nome[0]}
                        </h5>
                    </div>
                    <div className="membrosIdade">
                        <span>
                            Idade: {dados.idade[0]}
                        </span>
                    </div>
                    <div className="membrosTime">
                        <span>
                            Time: {dados.time[0]}
                        </span>
                    </div>
                    <div className="membrosSobrenome">
                        <span>
                            Sobrenome: {dados.sobrenome[0]}
                        </span>
                    </div>
                </div>

                <div className="membros">
                    <div className="membrosTitulo">
                        <h5>
                            {dados.nome[1]}
                        </h5>
                    </div>
                    <div className="membrosIdade">
                        <span>
                            Idade: {dados.idade[1]}
                        </span>
                    </div>
                    <div className="membrosTime">
                        <span>
                            Time: {dados.time[1]}
                        </span>
                    </div>
                    <div className="membrosSobrenome">
                        <span>
                            Sobrenome: {dados.sobrenome[1]}
                        </span>
                    </div>
                </div>

                <div className="membros">
                    <div className="membrosTitulo">
                        <h5>
                            {dados.nome[2]}
                        </h5>
                    </div>
                    <div className="membrosIdade">
                        <span>
                            Idade: {dados.idade[2]}
                        </span>
                    </div>
                    <div className="membrosTime">
                        <span>
                            Time: {dados.time[2]}
                        </span>
                    </div>
                    <div className="membrosSobrenome">
                        <span>
                            Sobrenome: {dados.sobrenome[2]}
                        </span>
                    </div>
                </div>

                <div className="membros">
                    <div className="membrosTitulo">
                        <h5>
                            {dados.nome[3]}
                        </h5>
                    </div>
                    <div className="membrosIdade">
                        <span>
                            Idade: {dados.idade[3]}
                        </span>
                    </div>
                    <div className="membrosTime">
                        <span>
                            Time: {dados.time[3]}
                        </span>
                    </div>
                    <div className="membrosSobrenome">
                        <span>
                            Sobrenome: {dados.sobrenome[3]}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}




export default Main;
