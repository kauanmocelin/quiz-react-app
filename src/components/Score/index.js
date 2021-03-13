import React from 'react'
import styled from 'styled-components'
import SubmitButton from '../SubmitButton'

const Div = styled.div`
    h2 {
        padding: 1rem;
        text-align: center;
    }
`

const Score = ({ totalScore }) => {
    return (
        <Div>
            <h2>{`Your score is ${totalScore}!`}</h2>
            <SubmitButton onClick={() => { window.location.reload() }}>Try Again</SubmitButton>
        </Div>
    )
}

export default Score