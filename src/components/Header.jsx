import React from 'react';
import cl from "./Header.module.css"
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import logo from "../img/logo.svg"
const Header = ({page}) => {
    return (
        <header>
            <div className={["container",cl.container].join(" ")}>
                <Link to="/" replace={true}><img src={logo} className={cl.header__logo} alt="" /></Link>
                <NavBar page={page}/>
            </div>
        </header>
    );
};

export default Header;