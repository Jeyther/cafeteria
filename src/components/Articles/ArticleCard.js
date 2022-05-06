import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({item}) => {
    return (

        <article className='main__articles__card'>

            <img src={item.image} alt="" loading='lazy' className="main__articles__card__image" />

            <div className="main__articles__card__text">
                <h3 className="main__articles__card__text__title no-margin">{item.title}</h3>
                <p className="main__articles__card__text__description">{item.summary}</p>
                <Link to={"/Blog/" + item.id} className="main__articles__card__button">Read more</Link>
            </div>

        </article>

    );
}

export default ArticleCard;