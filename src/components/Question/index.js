import React, { useState } from 'react'
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components'

import SubmitButton from '../SubmitButton'

const StyledQuestion = styled.div`
    padding: 4rem;

    h2 {
        margin: 0;
    }

    ul li {
        font-size: 1.2rem;
        margin: 2rem 0;
    }

    ul li label {
        cursor: pointer;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }
`

const Question = ({ data, loadNextQuestion }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const checkSelectedAnswer = (event) => {
        event.preventDefault()
        if (!selectedOption) return false
        loadNextQuestion(checkCorrectAnswer());
        setSelectedOption('')
    }

    const checkCorrectAnswer = () => {
        return data.correct_answer === selectedOption
    }

    return (
        <form onSubmit={checkSelectedAnswer}>
            <StyledQuestion>
                <h2>{ReactHtmlParser(data.question)}</h2>
                <ul>
                    {data.incorrect_answers.concat(data.correct_answer).map((answer, index) => (
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
            </StyledQuestion>
            <SubmitButton onClick={checkSelectedAnswer} disabled={!selectedOption}>Responder</SubmitButton>
        </form>
    )
}

export default Question