import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicCard from '../TopicCard/TopicCard';
import './Topics.css'

const Topics = () => {

    const quizzes = useLoaderData()

    const { data } = quizzes;

    console.log(data)
    return (
        <div className="topics container lg:mx-auto">
            <div className=''>

                <br />
                <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-20 gap-5 my-10 topic-container ">
                    {
                        data.map(quiz => <TopicCard key={quiz.id} quiz={quiz}></TopicCard>)
                    }
                </div>

            </div>


        </div>
    );
};

export default Topics;