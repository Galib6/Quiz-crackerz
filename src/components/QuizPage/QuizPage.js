import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import "./Quizpage.css"



const QuizPage = () => {
    const Quiz = useLoaderData()
    const { questions } = Quiz.data
    const { data } = Quiz
    // console.log(questions)
    // console.log(data)

    return (
        <div className='container'>
            <h2 className='text-center'>Quiz of {data.name}</h2>

            {
                questions.map(question => <Question
                    key={question.id}
                    question={question}
                ></Question>)
            }
        </div>
    );
};

export default QuizPage;