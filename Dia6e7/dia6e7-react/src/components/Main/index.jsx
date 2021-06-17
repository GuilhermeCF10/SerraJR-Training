import React, { useState } from 'react';

import './style.css';

import NewTask from './NewTask';



export default function Main() {

    const [inputName, setInputName] = useState("");
    const [inputTime, setInputTime] = useState("");
    const [inputCategory, setInputCategory] = useState("");
    const [revenue, setRevenue] = useState([]);
    
    const itemsRendered = revenue.map( (revenueItem) => {
        return <NewTask key={revenueItem.key} id={revenueItem.id} name={revenueItem.name} time={revenueItem.time} category={revenueItem.category} deleteRevenue={deleteRevenue}/>
    });
   
    function writeInputName(e) {
        setInputName(e.target.value)
    }

    function writeInputTime(e) {
        setInputTime(e.target.value)
    }

    function writeInputCategory(e) {
        setInputCategory(e.target.value)
    }

    function addNewRevenue() {
        
        if (!inputName || !inputTime || !inputCategory) {
            return alert("Preencha todos os campos!")
        }

        const newItem = {
            key: Math.random(),
            id: revenue.length,
            name: inputName,
            time: inputTime,
            category: inputCategory,
        }
        
        setInputName("")
        setInputTime("")
        setInputCategory("")
        setRevenue((prevState) => {
            return [...prevState, newItem];
        });
    }

    function deleteRevenue(id) {
        const newRevenueList = revenue.filter( (revenueItem) => {
            return revenueItem.id !== id
        })
        setRevenue( (prevState) => {
            return newRevenueList;
        })
        
    }

    return (
            <div className="main">
            <div className="card">
                <div className="input-tarefa">
                    <div className="titulo">
                        <span>
                            Receitas
                        </span>
                    </div>
                    <div className="input-item">
                        <div>
                            <input id="nome-receita" placeholder="Nome" type="text" value={inputName} onChange={writeInputName}/>
                        </div>

                        <div>
                            <input id="tempo-receita" placeholder="Tempo de Preparo" type="text" value={inputTime} onChange={writeInputTime}/>
                        </div>

                        <div>
                            <input id="categoria-receita" placeholder="Categoria" type="text" value={inputCategory} onChange={writeInputCategory}/>
        
                        </div>
                        
                        
                        <div className="botao">
                            <button onClick={ () => addNewRevenue() }>
                                <span>
                                    Adicionar
                                </span>
                            </button>
                        </div>
                        
                    </div>

                </div>
                <div className="receitas">
                    <ul>{itemsRendered}</ul>
                </div>
            </div>
        </div>
    );
}
