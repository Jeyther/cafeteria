import React from 'react';
import ArticleCardContainer from '../Articles/ArticleCardContainer';
import CoursesContainer from '../Courses/CoursesContainer';

const Main = () => {
    return (

        <div className='main'>

            <main className='main__articles'>

                <h2 className='main__articles__title'>Our Blog</h2>

                <ArticleCardContainer/>

            </main>

            <aside className='main__courses'>

                <h3  className='main__courses__title'>Our Courses and Workshops</h3>

                <CoursesContainer isWidget = {true}/>

            </aside>


        </div>

    );
}

export default Main;