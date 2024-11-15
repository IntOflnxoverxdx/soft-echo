import React, { useEffect } from 'react';
import Carousel from '../components/Carousel';
import news from "../news"
import NewsList from '../components/NewsList';

const Main = ({setPage}) => {
    useEffect(()=>{
        setPage("main")
    },[])
    return (
        <main>
            <Carousel news={news.news.carousel} />
            <div className="container flexContainer">
                <NewsList width={70} news={news.news.main} />
                <NewsList width={20} news={news.news.sidebar} itemWidth={200} />
            </div>
        </main>
    );
};

export default Main;