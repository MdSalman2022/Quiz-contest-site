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
            <br />
            <div className="container mx-auto">
                <div className="carousel mx-auto w-80 lg:w-full rounded-xl lg:rounded-3xl">
                    <div id="item1" className="carousel-item w-80 lg:w-full ">
                        <img className='w-96 lg:w-full mx-auto h-full' src="https://i.ibb.co/DD4w4zp/quiz-Copy.jpg" alt="quiz-banner" border="0" />
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-20 gap-5 my-5 lg:my-10 topic-container ">
                {
                    data.map(quiz => <TopicCard key={quiz.id} quiz={quiz}></TopicCard>)
                }
            </div>



        </div>
    );
};

export default Home;