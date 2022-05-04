import React from 'react';
import ArticleCard from './ArticleCard';
import articles from "./../../data/articles.json";


const ArticleCardContainer = () => {
    return ( 

        articles.map((article,index) => {

            return (

                <ArticleCard key={index} item={article} />

            );

        })

     );
}
 
export default ArticleCardContainer;