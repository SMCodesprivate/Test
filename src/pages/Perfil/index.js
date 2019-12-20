import React, { useState, useMemo } from 'react';
import Menu from '../menu';
import Copy from '../../all/copy';
import './style.css';
import { getUser } from '../../all/functions';
import camera from './camera.svg';
import Rodape from '../../all/rodape';

export default function Perfil() {
    const [thumbnail, setThumbnail] = useState('');
    const preview = useMemo(() => {
		return thumbnail ? URL.createObjectURL(thumbnail) : null
    }, [thumbnail]);
    return(
        <div>
            <div>
                <Menu />
            </div>
            <div id="estatisticas">
                <div id="title">
                    Informações
                </div>
                <ul id="infos">
                    <li>
                        Name: SMCodes
                    </li>
                </ul>
                <Copy />
            </div>
            <Rodape />
        </div>
    );
}