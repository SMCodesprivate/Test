import React from 'react';
import logo from './logo.png';
import './rodape.css';

export default function Rodape() {
    return (
        <>
            <div id="rodape">
                <img src={logo} alt="Icone" />
            </div>
        </>
    );
}