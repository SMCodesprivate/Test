import React from 'react';
import './copy.css';
import logo from '../logo.png';

export default function Copy() {
    return (
        <div id="copy">
            <img
                src={logo}
                alt="Logo DDL-Academy"
                title="Logo DDL-Academy"
            />
            <p>
                DDL-Academy | Copyright &copy;
            </p>
        </div>
    );
}