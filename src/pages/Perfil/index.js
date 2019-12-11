import React from 'react';
import Menu from '../menu';
import Copy from '../../all/copy';
import './style.css';

export default function Perfil() {
    return(
        <div>
            <div>
                <Menu />
            </div>
            <div id="estatisticas">
                <Copy />
            </div>
        </div>
    );
}