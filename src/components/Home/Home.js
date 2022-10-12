import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicCard from '../TopicCard/TopicCard';
import './Home.css'

const Home = () => {

    const quizzes = useLoaderData()

    const { data } = quizzes;

    console.log(data)
    return (
        <div className="topics container lg:mx-auto">
            <div className=''>
                <br />
                <img src="./images/Quiz.jpg" alt="" />

                <div className="carousel w-full rounded-3xl">
                    <div id="item1" className="carousel-item w-full">
                        <img className='w-full mx-auto h-full' src="https://i.ibb.co/wK86jm4/quiz-Copy.jpg" alt="quiz-Copy" border="0" />
                    </div>
                </div>
                <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-20 gap-5 my-10 topic-container ">
                    {
                        data.map(quiz => <TopicCard key={quiz.id} quiz={quiz}></TopicCard>)
                    }
                </div>

            </div>


        </div>
    );
};

export default Home;