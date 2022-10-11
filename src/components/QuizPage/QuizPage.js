import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import "./Quizpage.css"



const QuizPage = () => {
    const Quiz = useLoaderData()
    const { questions } = Quiz.data
    const { data } = Quiz
    // console.log(questions)
    // console.log(data)

    const [mark, setMark] = useState(0)


    let marks;
    if (mark) {
        marks = <div className='text-center mt-4 marks1 sticky-lg-top'><h4>You Got: {mark}  Total Marks: {questions.length}</h4></div>
    }
    else {
        marks = ""
    }




    return (
        <div className='container'>
            <h3 className='text-center mt-3 purple'>Quiz of {data.name}</h3>
            {marks}
            {
                questions.map(question => <Question
                    key={question.id}
                    question={question}
                    setMark={setMark}
                    mark={mark}
                ></Question>)
            }
        </div>
    );
};

export default QuizPage;