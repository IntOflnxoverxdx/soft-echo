import React, { useState } from 'react';
import cl from "./Carousel.module.css"
import { Link } from 'react-router-dom';

const Carousel = ({ news }) => {
    const [picIndex,setPicIndex] = useState(0)
    setTimeout(() => {
        if (picIndex < news.length-1){
            setPicIndex(picIndex+1)
        }else{
            setPicIndex(0)
        }
    }, 5000);
    return (
        <div className={cl.carousel}>
            {news.map((n,index) =>
                <Link to={`/post/${n.id}`} className={[cl.wrapper,index==picIndex?cl.active:"",cl.item].join(" ")} style={{ backgroundImage: `url("img/news/${n.img}")` }}>

                    <div className={["container", cl.container].join(" ")}>
                        <div>
                            <h2>{n.title}</h2>
                            <p className={cl.description}>{n.description}</p>
                        </div>
                    </div>
                </Link>
            )}
        </div>
    );
};

export default Carousel;