import React from 'react';

import './style.css';

export default function Item(props) {
    return (
        <li className="member" key={props.id}>
            <div className="member-avatar">
                <img src={props.avatar} alt={props.name}/>
            </div>
            <div className="member-content">
                <div className="member-content-init">
                    <div className="member-content-init-name">
                        <span>Nome: {props.name}</span>
                    </div>

                    <div className="member-content-init-follow">
                        <p className="member-content-init-follow-following"><span className="material-icons-outlined">people</span>Seguindo: {props.following}</p>
                        <p className="member-content-init-follow-followers"><span className="material-icons-outlined">groups</span>Seguidores: {props.followers}</p>
                    </div>

                    <div className="member-content-init-location">
                        <p><span className="material-icons-outlined">place</span>Localização: {props.location} </p>
                    </div>
                </div>

                <div className="member-content-bio">
                    <span>{props.bio}</span>
                </div>

                <div className="member-content-repo">
                    <a href={props.repoUrl}>
                        <div className="member-content-repo-date">
                            <p>{props.repoDate}</p>
                        </div>
                        <div className="member-content-repo-name">
                            <p>{props.repoName}</p>
                        </div>
                        <div className="member-content-repo-icon">
                            <span className="material-icons-outlined">arrow_forward</span>    
                        </div>
                    </a>         
                </div>

                
    

            </div>
        </li>
    );
}