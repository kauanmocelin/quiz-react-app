import React from 'react'

import ReactHtmlParser from 'react-html-parser';

const ListOptions = ({ answers, selectedOption, setSelectedOption }) => {
    return (
        <ul>
            {answers.map((answer, index) => (
                <li key={index}>
                    <label>
                        <input
                            type="radio"
                            name="answer"
                            value={answer}
                            checked={selectedOption === answer}
                            onChange={event => { setSelectedOption(event.target.value) }}
                        />
                        {ReactHtmlParser(answer)}
                    </label>
                </li>
            ))}
        </ul>
    )
}

export default ListOptions