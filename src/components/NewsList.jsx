import React from 'react';
import cl from "./NewsList.module.css"
import Card from './Card';

const NewsList = ({ width, news, itemWidth=350}) => {
    // grid-template-columns: ;
    return (
        <div style={{ width: `${width}%`}} className={cl.wrapper}>
            <div className={cl.newsList} style={{gridTemplateColumns:`repeat(auto-fill,minmax(${itemWidth}px,1fr))`}}>
                {news.map(n => (
                    <Card key={Math.random()} info={n} />
                ))}

            </div>
        </div>
    );
};

export default NewsList;