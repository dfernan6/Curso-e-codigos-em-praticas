import React from 'react'

export default function RandomNumber() {
    const randomNumber = Math.floor(10* Math.random() )
    return (
        <div>
            <h2>O número randomizado é esse!</h2>
            <p>{ randomNumber }</p>
        </div>
    )
};