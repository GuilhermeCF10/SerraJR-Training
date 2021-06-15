import React from 'react'

import './style.css'


function Header(props) {
    return (
        <header className="header">
            <div className="header-titulo">
                <h5>
                    {props.titulo}
                </h5>
            </div>
        </header>
    );
}

export default Header;