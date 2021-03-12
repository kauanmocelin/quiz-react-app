import React from 'react'
import styled from 'styled-components'

const StyledCounter = styled.div`
    padding: 1rem;
    text-align: center;
    border-bottom: 1px solid #dfdfdf;
    span {
        font-size: 2rem;
    }
`
const QuestionCounter = ({ numberQuestion, totalQuestions }) => (
    <StyledCounter>
        <span>Questão {numberQuestion}</span> / { totalQuestions}
    </StyledCounter>
)

export default QuestionCounter