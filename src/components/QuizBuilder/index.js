import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Question from '../Question'
import QuestionCounter from '../QuestionCounter'
import Score from '../Score'

import fetchQuestionsData from '../../services/Repository'

const QuizContainer = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 2px rgba(100,100,100,0.1);
    overflow: hidden;
    width: 600px;
`

const QuizBuilder = () => {
    const [questions, setQuestions] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)

    useEffect(() => {
        fetchQuestionsData()
            .then(questionsData => {
                setQuestions(questionsData.results)
            })
            .catch(error => {
                console.log(error.message)
            })
    }, [])

    const loadNextQuestion = (selectedOptionResponse) => {
        if (selectedOptionResponse) setScore(prevScore => prevScore + 1)
        if (currentIndex + 1 >= questions.length) return setShowScore(true)
        setCurrentIndex(prevState => prevState + 1)
    }

    return (
        <QuizContainer>
            {showScore ?
                <Score totalScore={score} />
                : questions && questions.length > 0 &&
                <>
                    <QuestionCounter numberQuestion={currentIndex + 1} totalQuestions={questions.length} />
                    <Question
                        data={questions[currentIndex]}
                        loadNextQuestion={loadNextQuestion}
                    />
                </>
            }
        </QuizContainer>
    )
}

export default QuizBuilder