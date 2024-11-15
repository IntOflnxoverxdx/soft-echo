import React from 'react';
import cl from "./NavBar.module.css"
import { Link } from 'react-router-dom';

const NavBar = ({page}) => {
    return (
        <nav className={cl.nav}>
            <ul>
                <li><Link to="/" className={page=="main"?cl.active:""}>Главная</Link></li>
                <li><Link to="/news" className={page=="news"?cl.active:""}>Новости</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;