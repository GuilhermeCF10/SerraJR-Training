import React from 'react';

export default function Member(props) {
    return (
                <div className="membros">
                    <div className="membrosTitulo">
                        <h5>
                            {props.name}
                        </h5>
                    </div>
                    <div className="membrosIdade">
                        <span>
                            Idade: {props.age}
                        </span>
                    </div>
                    <div className="membrosTime">
                        <span>
                            Time: {props.club}
                        </span>
                    </div>
                    <div className="membrosSobrenome">
                        <span>
                            Sobrenome: {props.lastName}
                        </span>
                    </div>
                </div>
    );
} 