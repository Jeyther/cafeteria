import React from 'react';
import CoursesWidget from './CoursesWidget';
import CoursesCard from './CoursesCard';
import courses from '../../data/courses.json';

const CoursesContainer = ({ isWidget }) => {
    return (

        isWidget ? (

            courses.map((course, index) => {

                return (<CoursesWidget key={index} item={course} />);

            })

        ) : (

            courses.map((course, index) => {

                return (<CoursesCard key={index} item={course} />);

            })

        )

    );
}

export default CoursesContainer;