import React from 'react';
import "./option.css"

const Op1 = ({ option, handleChange, id }) => {
    // console.log(option)
    return (
        <div className='sing-que'>
            <input type="radio" value={option} name={id} onChange={handleChange} /><span>{option}</span>
        </div>
    );
};

export default Op1;