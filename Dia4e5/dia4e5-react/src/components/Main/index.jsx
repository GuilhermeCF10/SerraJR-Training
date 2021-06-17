import React, { useState } from 'react';

import './style.css';

import NewTask from './NewTask';

export default function Main() {

    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);

    const itemsRendered = tasks.map( (tasksItem) => {
        return <NewTask key={tasksItem.key} name={tasksItem.name} />;
    })


    function writeInput(e) {
        setInput(e.target.value)
    }

    function addNewTask() {
        
        if (!input) {
            return alert("Preencha o campo requerido!")    
        }
        

        const newTask = {
            key: Math.random(),
            name: input
        }


        setInput("")
        setTasks( (prevState) => {
            return [...prevState, newTask]
        }); 
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
                            <input className="addNewTarefa" placeholder="Nome" type="text" value={input} onChange={writeInput}/>
                            <button onClick={ () => addNewTask() }>
                                <span>Adicionar</span>
                            </button>
                        </div>

                    </div>

                    <div className="tarefas">
                        <ul>{itemsRendered}</ul>
                    </div>
                </div>
            </div>
    );
}
