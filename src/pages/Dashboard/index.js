import React from 'react';
import './style.css';
import '../menu';
import vara_e from './vara-e.png';
import vara_d from './vara-d.png';
import api from '../../services/api';
import Menu from '../menu.js';
import dashboardFunctions from './functions';
import base_url from '../infos';
import Rodape from '../../all/rodape';

export default function Dashboard() {
    var corpo = document.querySelector("#corpo");
    async function load() {
        var fundo = document.querySelector("#fundo");
        var teste = await api.get("/iscurse");
        if(teste.data.information.length === 0) return;
        var link = document.querySelector("#fundoLink");
        link.setAttribute("href", base_url+"/"+teste.data.information[0].name.toLowerCase());
        fundo.setAttribute("src", teste.data.information[0].image);
        fundo.setAttribute("class", "transition-right-init");
    }
    corpo.onload = async function() {
        load();
        var aspiposfiasd = document.querySelector("#tituloTeste");
        aspiposfiasd.innerHTML = "Dashboard - "+aspiposfiasd.innerHTML;
        var x = dashboardFunctions.teste();
        if(x === true) return;
    }
    var animationTime = 250;
    async function changeProceed() {
        var fundo = document.querySelector("#fundo");
        var curses = await api.get("/iscurse");
        var cursos = curses.data.information;
        var tamanho = curses.data.information.length-1;
        if(Number(fundo.alt)+1 <= tamanho) {
            var x = Number(fundo.alt)+1;
            setTimeout(() => {
                fundo.setAttribute("class", "transition-right");
                setTimeout(() => {
                    fundo.setAttribute("src", cursos[x].image);
                    fundo.setAttribute("class", "transition-left");
                    setTimeout(() => {
                        fundo.alt = x;
                        fundo.setAttribute("class", "transition-left-init");
                    }, animationTime);
                }, animationTime);
            }, animationTime);
        }
    }
    async function changeRegress() {
        var fundo = document.querySelector("#fundo");
        var curses = await api.get("/iscurse");
        var cursos = curses.data.information;
        if(Number(fundo.alt)-1 > -1) {
            var x = Number(fundo.alt)-1;
            setTimeout(() => {
                fundo.setAttribute("class", "transition-left");
                setTimeout(() => {
                    fundo.setAttribute("src", cursos[x].image);
                    fundo.setAttribute("class", "transition-right");
                    setTimeout(() => {
                        fundo.alt = x;
                        fundo.setAttribute("class", "transition-right-init");
                    }, animationTime);
                }, animationTime);
            }, animationTime);
        }
    }
    return (
        <div>
            <Menu />
            <div id="slide">
                <div id="proceed" onClick={changeRegress}>
                    <img src={vara_e} alt='<' />
                </div>
                <a id="fundoLink" href={base_url}>
                    <img id="fundo" className="transition-right" alt="0"/>
                </a>
                <div id="regress" onClick={changeProceed}>
                    <img src={vara_d} alt='>' />
                </div>
            </div>
            <div id="perf">
                <div id="title">
                    <p>
                        Seus cursos
                    </p>
                </div>
                <div id="perfil">
                    <h1 id="ntem">
                        Você não tem nenhum curso comprado.
                    </h1>
                </div>
            </div>
            <Rodape />
        </div>
    );
}