import React from 'react';
import cl from "./Footer.module.css"

const Footer = () => {
    return (
        <footer>
            <div className={["container",cl.container].join(" ")}>
                Тихий звук © 2024
            </div>
        </footer>
    );
};

export default Footer;