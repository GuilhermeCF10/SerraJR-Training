import React, { useState } from 'react';

import './style.css';
import LixeiraIMG from '../../assets/trash.png';


let receitas = [];
let index = 0;
let i = true;

export default function Main() {

    const [InputNome, setInputNome] = useState("");
    const [InputTempo, setInputTempo] = useState("");
    const [InputCategoria, setInputCategoria] = useState("");
    const [Receitas, setReceitas] = useState([]);
    
   
    function WriteInputNome(e) {
        setInputNome(e.target.value)
    }

    function WriteInputTempo(e) {
        setInputTempo(e.target.value)
    }

    function WriteInputCategoria(e) {
        setInputCategoria(e.target.value)
    }


    function AddNewReceitas() {
        
        if (InputNome && InputTempo && InputCategoria) {
            const newTask = (
                
                <li key={index}>
                    <div className="item">
                        <div className="item-base">
                            <div className="base-titulo">
                                <span>{InputNome}</span>
                            </div>
                            <div className="base-lixeira">
                                <button className="currentButton" onClick={ (e) => DeleteReceitas(e) } value={index}>
                                    <img src={LixeiraIMG} width="32px" height="43px" alt="Lixeira" />
                                </button>
                            </div>
                        </div>
                        <div className="item-info">
                            <div className="info-tempo">
                                <span>{InputTempo}</span>
                            </div>
                            <div className="info-categoria">
                                <span>{InputCategoria}</span>
                            </div>
                        </div>
                    </div>
                </li>

            );
            
            receitas.push(newTask);
            index = index + 1;
            setInputNome("")
            setInputTempo("")
            setInputCategoria("")
            setReceitas(receitas);
        } 
    }

    function DeleteReceitas(e) {

        for (let cadaReceita of receitas) {
            console.log(receitas)
            if (cadaReceita.key === e.currentTarget.value) {
                receitas.splice(receitas.indexOf(cadaReceita), 1);


                // Feito isso para mudar o state a cada vez que apaga um atras do outro
                if (i){
                    setInputNome(" ");
                    setInputTempo(" ");
                    setInputCategoria(" ");
                    i = false;
                } else {
                    setInputNome("");
                    setInputTempo("");
                    setInputCategoria("");
                    i = true;
                }
                
                setReceitas(receitas);
                break
            }
        }
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
                            <input id="nome-receita" placeholder="Nome" type="text" value={InputNome} onChange={WriteInputNome}/>
                        </div>

                        <div>
                            <input id="tempo-receita" placeholder="Tempo de Preparo" type="text" value={InputTempo} onChange={WriteInputTempo}/>
                        </div>

                        <div>
                            <input id="categoria-receita" placeholder="Categoria" type="text" value={InputCategoria} onChange={WriteInputCategoria}/>
        
                        </div>
                        
                        
                        <div className="botao">
                            <button onClick={ () => AddNewReceitas() }>
                                <span>
                                    Adicionar
                                </span>
                            </button>
                        </div>
                        
                    </div>

                </div>
                <div className="receitas">
                    <ul>{Receitas}</ul>
                </div>
            </div>
        </div>
    );
}
