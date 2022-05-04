import React from 'react';
import CoursesCard from './CoursesCard';
import courses from '../../data/courses.json';

const CoursesCardContainer = () => {
    return ( 

        courses.map((course,index) => {

            return (<CoursesCard key={index} item={course}/>);

        })


     );
}
 
export default CoursesCardContainer;