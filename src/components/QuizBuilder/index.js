import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Question from '../Question'
import QuestionCounter from '../QuestionCounter'
import SubmitButton from '../SubmitButton'

const URL_API_TRIVIA = 'https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple'

const QuizContainer = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 2px rgba(100,100,100,0.1);
    overflow: hidden;
    width: 600px;
`

const Score = styled.div`
    h2 {
        padding: 1rem;
        text-align: center;
    }
`

const QuizBuilder = () => {
    const [questions, setQuestions] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)

    const fetchQuestionsData = async () => {
        const response = await fetch(URL_API_TRIVIA)
        if (!response.ok) {
            const message = `An error has occured: ${response.status} - ${response.statusText}`
            throw new Error(message)
        }
        const questionsData = await response.json()
        return questionsData
    }

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

    let card = null
    if (showScore) {
        card = (
            <Score>
                <h2>{`Você acertou ${score} ${score > 1 ? 'questões' : 'questão'}!`}</h2>
                <SubmitButton onClick={() => { window.location.reload() }}>Responder Novamente</SubmitButton>
            </Score>
        )
    } else if (!showScore && questions && questions.length > 0) {
        card = (
            <>
                <QuestionCounter numberQuestion={currentIndex + 1} totalQuestions={questions.length} />
                <Question
                    data={questions[currentIndex]}
                    loadNextQuestion={loadNextQuestion}
                />
            </>
        )
    }

    return (
        <QuizContainer>
            {card}
        </QuizContainer>
    )
}

export default QuizBuilder