import React from 'react'

import './style.css'


function Footer(props) {
    return (
        <footer className="footer">
            <div className="footer-titulo">
                <span>
                    {props.titulo}
                </span>
            </div>
        </footer>
    );
}

export default Footer;
