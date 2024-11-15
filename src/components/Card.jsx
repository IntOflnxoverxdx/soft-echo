import React from 'react';
import cl from "./Card.module.css"
import { Link } from 'react-router-dom';

const Card = ({info}) => {
    return (
        <Link to={`/post/${info.id}`} replace={true} className={cl.card}>
            <img src={`img/news/`+info.img} alt="" />
            <p className={cl.card__author}>{info.musicians}</p>
            <h3 className={cl.card__title}>{info.title}</h3>
            <p className={cl.card__description}>{info.description}</p>
        </Link>
    );
};

export default Card;