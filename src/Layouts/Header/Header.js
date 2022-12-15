// import des dépendances et modules

import React from 'react';
import { NavLink } from "react-router-dom";

import '@/Layouts/Header/Header.css'

import Logo from '@/Assets/Images/Logo.png'

// fonction du header avec la prop "iSactive" sur les lien, permettant d'appliquer la class "active" avec une condition booléenne

const Header = () => {

    return (
        <header>
            <img src={Logo} alt="KasaLogo" />
            <nav>
                <NavLink to="/home" className="Link" style={({ isActive }) => isActive ? { borderBottom: "1px solid #FF6060" } : { borderBottom: "unset" }}>Accueil</NavLink>
                <NavLink to="/a-propos" className="Link" style={({ isActive }) => isActive ? { borderBottom: "1px solid #FF6060" } : { borderBottom: "unset" }}>À propos</NavLink>
            </nav>
        </header>
    );

};

// export du header pour son utilisation layout

export default Header