import React from 'react';
import { Link } from 'react-router-dom';

const CoursesWidget = ({item}) => {

    return ( 

        <div className='main__courses__widget'>

            <h4 className='main__courses__widget__title no-margin'>{item.title}</h4>

            <p className='main__courses__widget__price'><span>Price: </span>{typeof item.price === 'number' ? item.price +'$': item.price}</p>

            <p className='main__courses__widget__tickets'><span>Tickets: </span>{item.tickets}</p>

            <Link to='/courses' className='main__courses__widget__button'> More information about the course </Link> 

        </div>

     );
}
 
export default CoursesWidget;