import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import news from "../news"

const PostPage = ({ setPage }) => {
    const params = useParams()
    useEffect(() => {
        setPage("")
    }, [])
    console.log(news.newsList);
    
    const post = news.newsList.find(e=>e.id == params.id)
    
    return (
        <main>
            <div className="container">
                <img src={"../img/news/"+post.img} className='new__img' alt={post.title} />
                <h2 style={{fontSize:30}}>{post.title}</h2>
                <h3 style={{fontSize:24,margin:"5px 0 20px", fontWeight:"normal"}}>{post.description}</h3>
                <p>{post.body}</p>
            </div>
        </main>
    );
};

export default PostPage;