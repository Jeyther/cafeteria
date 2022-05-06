import React from 'react';
import { useParams } from 'react-router-dom';
import articles from './../../data/articles.json';

const Blog = () => {

    const { id } = useParams();

    const article = articles.filter((article) => article.id === Number(id));

    return (

        article.map((article,index) => {
            return (

                <div key = {index} className="blog">
                    <h3 className="blog__title">{article.title}</h3>
                    <img src={article.image} alt={article.title} className="blog__img" />
                    <p className="blog__description">{article.description}</p>
                </div>
                
            )


        })

    );
}

export default Blog;