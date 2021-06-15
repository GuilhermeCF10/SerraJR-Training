import React, { useState } from 'react';

import './style.css';


let tarefas = [];
let index = 0;

export default function Main() {

    const [Input, setInput] = useState("");
    const [Tasks, setTasks] = useState([]);

    
    function WriteInput(e) {
        setInput(e.target.value)
    }

    function AddNewTask() {
        
        if (Input) {
            const newTask = (
                <li key={index}>
                    <h5>
                        Tarefa: 
                    </h5>
                    <span>
                        {Input}
                    </span>
                </li>
            );
            
            tarefas.push(newTask)
            index = index + 1;
            setInput("")
            setTasks(tarefas)
        }
        
    }

    return (
            <div className="main">
                <div className="card">
                    <div className="input-tarefa">
                        <div className="titulo">
                            <span>
                                Lista
                            </span>
                        </div>

                        <div className="input-item">
                            <input className="addNewTarefa" placeholder="Nome" type="text" value={Input} onChange={WriteInput}/>
                            <button onClick={ () => AddNewTask() }>
                                <span>Adicionar</span>
                            </button>
                        </div>

                    </div>

                    <div className="tarefas">
                        <ul>{Tasks}</ul>
                    </div>
                </div>
            </div>
    );
}
