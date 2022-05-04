import React from 'react';
import { Link } from 'react-router-dom';

const CoursesCard = ({item}) => {
    return ( 

        <div className='main__courses__card'>

            <h4 className='main__courses__card__title no-margin'>{item.title}</h4>

            <p className='main__courses__card__price'><span>Price: </span>{typeof item.price === 'number' ? item.price +'$': item.price}</p>

            <p className='main__courses__card__tickets'><span>Tickets: </span>{item.tickets}</p>

            <Link to='/courses' className='main__courses__card__button'> More information about the course </Link> 

        </div>

     );
}
 
export default CoursesCard;