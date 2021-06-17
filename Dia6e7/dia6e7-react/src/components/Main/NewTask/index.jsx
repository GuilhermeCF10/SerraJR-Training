import React from 'react';

import LixeiraIMG from '../../../assets/trash.png';


export default function NewTask(props) {
    
    return (
                <li key={props.id}>
                    <div className="item">
                        <div className="item-base">
                            <div className="base-titulo">
                                <span>{props.name}</span>
                            </div>
                            <div className="base-lixeira">
                                <button className="currentButton" onClick={ () => props.deleteRevenue(props.id) }>
                                    <img src={LixeiraIMG} width="32px" height="43px" alt="Lixeira" />
                                </button>
                            </div>
                        </div>
                        <div className="item-info">
                            <div className="info-tempo">
                                <span>{props.time}</span>
                            </div>
                            <div className="info-categoria">
                                <span>{props.category}</span>
                            </div>
                        </div>
                    </div>
                </li>
    );
    
}






