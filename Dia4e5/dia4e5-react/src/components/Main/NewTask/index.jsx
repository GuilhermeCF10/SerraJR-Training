import React from 'react';

export default function NewTask(props) {
    return (
                <li key={props.key}>
                    <h5>
                        Tarefa: 
                    </h5>
                    <span>
                        {props.name}
                    </span>
                </li>
    );
}