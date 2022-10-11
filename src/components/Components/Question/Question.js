import React, { useState } from 'react';
import Op1 from '../../options/Op1';
import "./Question.css"


const Question = ({ question }) => {
    // console.log(question)
    const { correctAnswer, options, id } = question
    // console.log(id)

    const [selected, setSelected] = useState();
    const [cA, setcA] = useState("")

    let message;
    if (selected) {
        if (selected === correctAnswer) {
            message = <h6 className='text-center'>Your answer is correct</h6>
        }
        else if (selected !== correctAnswer) {
            message = <h6 className='text-center'>Wrong!! Correct answer is: {correctAnswer}</h6>
        }
        else {
            message = ""
        }
    }
    else {
        message = ""
    }



    const handleChange = event => {
        // console.log(event.target.value);
        setSelected(event.target.value);

        if (event.target.value === correctAnswer) {
            setcA(correctAnswer);
        }
        else {
            setSelected(event.target.value);
        }
    }

    // console.log(cA)

    return (
        <div className='quiz-card'>
            <h3 className='text-center title'>Question: {question.question}</h3>
            <div className='options mx-auto'>
                {
                    options.map(option => <Op1
                        key={id}
                        id={id}
                        option={option}
                        handleChange={handleChange}
                    ></Op1>)
                }

            </div>
            {message}

            {/* <h6 className={`text-center ${selected === correctAnswer ? "d-none" : ""}`}>Wrong!! Correct answer is: {correctAnswer}</h6>
            <h6 className={`text-center ${selected !== correctAnswer ? "d-none" : ""}`}>Your answer is correct</h6> */}
        </div>
    );
};

export default Question;