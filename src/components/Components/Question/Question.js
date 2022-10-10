import React, { useState } from 'react';
import Op1 from '../../options/Op1';
import "./Question.css"


const Question = ({ question }) => {
    // console.log(question)
    const { correctAnswer, options, id } = question
    // console.log(id)


    const [selected, setSelected] = useState();
    const [cA, setcA] = useState("")

    const handleChange = event => {
        console.log(event.target.value);

        if (event.target.value === correctAnswer) {
            setSelected(event.target.value);
        }
        else {
            setcA(correctAnswer);
        }
    };
    // console.log(cA)

    return (
        <div className='quiz-card'>
            <h3 className='text-center'>Question: {question.question}</h3>
            <div className='options mx-auto'>
                {
                    options.map(option => <Op1
                        key={id}
                        option={option}
                        handleChange={handleChange}
                    ></Op1>)
                }
            </div>
            <h6 className='text-center'>{selected} is wrong</h6>
            <h6 className='text-center'>Correct Answer: {cA}</h6>
        </div>
    );
};

export default Question;