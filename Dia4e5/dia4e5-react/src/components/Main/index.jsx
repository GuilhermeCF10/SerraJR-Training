import React from 'react';

import './style.css';

function Main() {
    return (
            <div id="main">
                <div id="container">
                    <div id="inputTarefa">
                        <div id="titulo">
                            <span>
                                Lista
                            </span>
                        </div>
                        <div id="inputItem">
                            <input id="addNewTarefa" placeholder="Nome" type="text"/>
            
                            <button onClick={ () => AddTarefa() }>
                                <span>
                                    Adicionar
                                </span>
                            </button>
                        </div>

                    </div>
                    <div class="tarefas">
                        <ul id="tarefasList">
                            
                        </ul>
                    
                    </div>
                </div>
            </div>
    );
}

let itensLista = [];

function AddTarefa() {
    // Pega a lista de tarefas (ul)
    let listaTarefas = document.getElementById("tarefasList")
    
    // Pega o input do usuário (input)
    let inputTarefa = document.getElementById("addNewTarefa").value;
    

    if (inputTarefa == "") {
        console.log("Não foi adicionado nada pela caixa estar vazia.")
    }
    else {
        // Cria uma nova LI
        let novaLi= document.createElement("li")

        // Cria um h5
        let novoH5 = document.createElement("h5")

        // Cria uma nova span
        let novoSpan = document.createElement("span")

        // Cria um textNode para atribuir no h5
        let tarefaItem = document.createTextNode("Tarefa: ")

        // Cria um textNode para atribuir na span
        let textoItem = document.createTextNode(inputTarefa)
        
        // Atribue o textoItem ao h5
        novoH5.appendChild(tarefaItem)

        // Atribue o textoItem ao span
        novoSpan.appendChild(textoItem)

        // Atribue o h5 e span no LI
        novaLi.appendChild(novoH5)
        novaLi.appendChild(novoSpan)
        
        // Coloca o Li no html
        listaTarefas.appendChild(novaLi)
    }
}


export default Main;