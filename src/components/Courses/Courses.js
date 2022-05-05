import React from 'react';
import CoursesContainer from './CoursesContainer';

const Courses = () => {
    return ( 

        <div className='courses'>

            <h3 className='courses__title'>Our upcoming Courses and Workshops</h3>

            <CoursesContainer isWidget={false}/>

        </div>

     );
}
 
export default Courses;