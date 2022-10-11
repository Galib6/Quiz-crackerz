import React, { useState } from 'react';
import Op1 from '../options/Op1';
import "./Question.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from "@fortawesome/free-solid-svg-icons"


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
            message = <h4 className='text-center text-danger mt-3'>Wrong!! Correct answer is: {correctAnswer}</h4>
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
            <div className='d-flex w-100 justify-content-between'>
                <h3 className='text-center title'>Question: {question.question}</h3>
                <a onClick={() => setcA(correctAnswer)} className='p-2 text-white'><FontAwesomeIcon icon={faEye} /></a>
            </div>
            <div className='options mx-auto'>
                {
                    options.map(option => <Op1
                        key={option}
                        id={id}
                        option={option}
                        handleChange={handleChange}
                    ></Op1>)
                }

            </div>
            {message}

            <h4 className={`text-center ${cA ? "" : "d-none"}`}>Correct answer is: {correctAnswer}</h4>

        </div>
    );
};

export default Question;