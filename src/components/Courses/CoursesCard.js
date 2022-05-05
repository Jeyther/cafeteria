import React from 'react';

const CoursesCard = ({item}) => {
    return ( 

        <div className='courses__card'>
            <div className='courses__card__img'>
            <img src={item.image} alt={item.title}/>
            </div>
            <div className='courses__card__text'>
                <h4 className='courses__card__text__title'>{item.title}</h4>
                <p className='courses__card__text__price'><span>Price: </span>{typeof item.price === 'number' ? item.price +'$': item.price}</p>
                <p className='courses__card__text__tickets'><span>Tickets: </span>{item.tickets}</p>
                <p className='courses__card__description'>{item.description}</p>
            </div>

        </div>

     );
}
 
export default CoursesCard;