import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    background-color: #6c5ce7;
    color: white;
    cursor: pointer;
    border: none;
    display: block;
    font-family: inherit;
    font-size: 1.5rem;
    width: 100%;
    padding: 1.5rem;

    ${props => props.disabled ? `
        opacity: 0.5;
        cursor: not-allowed;
    ` : `
        &:hover {
            background-color: #5d4dd6;
        }
    `}
`

const SubmitButton = (props) => {
    return (
        <Button onClick={props.onClick} disabled={props.disabled}>
            {props.children}
        </Button>
    )
}

export default SubmitButton