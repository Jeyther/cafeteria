import React from 'react';
import ArticleCardContainer from '../Articles/ArticleCardContainer';
import CoursesCardContainer from '../CoursesCardContainer/CoursesCardContainer';

const Main = () => {
    return (

        <div className='main'>

            <main className='main__articles'>

                <h3 className='main__articles__title'>Our Blog</h3>

                <ArticleCardContainer/>

            </main>

            <aside className='main__courses'>

                <h3  className='main__courses__title'>Our Courses and Workshops</h3>

                <CoursesCardContainer />

            </aside>


        </div>

    );
}

export default Main;