import React, { useEffect } from 'react';
import news from "../news"
import NewsList from '../components/NewsList';


const News = ({setPage}) => {
    useEffect(()=>{
        setPage("news")
    },[])
    return (
        <main>
            <div className="container flexContainer">
                <NewsList width={100} news={news.newsList} />
            </div>
        </main>
    );
};

export default News;