import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionCard from '../QuestionCard/QuestionCard';

const Question = () => {
    const QuizQuestion = useLoaderData();
    const { data } = QuizQuestion;
    const { questions } = data;

    return (
        <div>
            <h1 className='text-3xl font-bold'>Quiz of {data.name}</h1>
            <h1 className='text-xl font-bold'>Total Questions: {data.total}</h1>
            {
                questions.map(question =>
                    <QuestionCard key={question.id} topicName={data.name} arrIndex={questions.indexOf(question)} question={question}></QuestionCard>
                )
            }
        </div>
    );
};

export default Question;