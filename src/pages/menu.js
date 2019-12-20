import React, { useState, useMemo } from 'react';
import './menu.css';
import { verify_staff, verify_login, getUser, getImage } from '../all/functions';
import base_url from './infos';
import api from '../services/api';

export default  function Menu() {
    const [thumbnail, setThumbnail] = useState('');
    const [teste, setTeste] = useState('');
    const preview = useMemo(() => {
		return thumbnail ? URL.createObjectURL(thumbnail) : null
    }, [thumbnail]);
    async function loads() {
        var x = await verify_login();
        if(x === false) return window.location.href = base_url+"/session";
        setTeste(await getImage());
        var y = await verify_staff();
        if(y === true) {
            var menu_staff = document.querySelector("#trocarMenu");
            if(menu_staff !== null) {
                menu_staff.setAttribute('id', 'active');
            }
        }
    }
    loads();
    function verification() {
        var teste = JSON.parse(localStorage.getItem("user_infos"));
        var comentar = teste.username;
        return comentar;
    }
    var x = 0;
    var comentario = "Avatar de "+verification();
    async function changeThumbnail(event) {
        await setThumbnail(event.target.files[0]);
        var user = JSON.parse(localStorage.getItem("user_infos"));
        console.log(user);
        const data = await new FormData();
        data.append('user_id', user.user_id);
        data.append('image', thumbnail);
        await api.post("/changeimage", data);
    }
    return (
        <>
            <div id="menuCell">
                <label id="labelChangeImageCell">
                    <form>
                        <input type="file" id="file" onChange={event => setThumbnail(event.target.files[0])} required/>
                    </form>
                    <div>
                        <img
                            src={teste}
                            alt="Selecionar Imagem"
                            style={thumbnail ? {display : 'none'} : {display : 'block'}}
                        />
                        <img
                            src={preview}
                            alt="Image thumbnail"
                            style={thumbnail ? {display : 'block'} : {display : 'none'}}
                        />
                    </div>
                </label>
                <div id="listMenuCell">
                    <ul>
                        <a id="n" href="../newcurse">
                            <li>
                                New Curse
                            </li>
                        </a>
                        <a href="/">
                            <li id="mainMenuCell">
                                Main
                            </li>
                        </a>
                        <a href="/dashboard">
                            <li id="dashboardMenuCell">
                                Dashboard
                            </li>
                        </a>
                        <a href="/perfil">
                            <li id="perfilMenuCell">
                                Perfil
                            </li>
                        </a>
                        <a href="/curses">
                            <li id="cursosMenuCell">
                                Cursos
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
            <div id="menu">
                <div id="trocarMenu">
                    <ul>
                        <a href="../newcurse">
                            <li>
                                New Curse
                            </li>
                        </a>
                    </ul>
                </div>
                <label id="labelChangeImage">
                    <form>
                        <input type="file" id="file" onChange={event => changeThumbnail(event)} required/>
                    </form>
                    <div className="divDentro">
                        <img
                            className="imagens"
                            src={teste}
                            alt="Selecionar Imagem"
                            style={thumbnail ? {display : 'none'} : {display : 'block'}}
                        />
                        <img
                            className="imagens"
                            src={preview}
                            alt="Image thumbnail"
                            style={thumbnail ? {display : 'block'} : {display : 'none'}}
                        />
                    </div>
                </label>
                <div id="listMenu">
                    <ul>
                        <a href="/">
                            <li id="mainMenu">
                                Main
                            </li>
                        </a>
                        <a href="/dashboard">
                            <li id="dashboardMenu">
                                Dashboard
                            </li>
                        </a>
                        <a href="/perfil">
                            <li id="perfilMenu">
                                Perfil
                            </li>
                        </a>
                        <a href="/curses">
                            <li id="cursosMenu">
                                Cursos
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </>
    );
}
