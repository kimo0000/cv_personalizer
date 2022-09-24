import React from 'react';
import './SideBar.css';
import Skills from '../skills/Skills.js';
import Interet from '../Interet/Interet.js';
import '../darkMode/Themedark.css';
import ThemeDark from '../darkMode/ThemeDark';

const SideBar = () => {
    return (
        <div className='sidebar'>
            <ThemeDark />
            <div className="header">
                <img src="./imgs/logo.png" alt="logo pic" />
                <h3>Touati Karim</h3>
                <p>Developpeur Web</p>
            </div>
            <div className="sidebar_info">
                <p><i></i><span>63 rue 4700 ezzouhour tunis</span></p>
                <p><i></i><span>+216 55487965</span></p>
                <p><i></i><span>Touatikarim@gmail.com</span></p>
                <p><i></i><span>Date De Naissance 21/02/1985</span></p>
                <p><i></i><span>Lieu De Naissance: tunis</span></p>
            </div>
            <hr />
            <Skills />
            <hr />
            <Interet />
        </div>
    );
};

export default SideBar;