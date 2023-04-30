import React from 'react'

export default function RandomNumber() {
    const randomNumber = Math.floor(10* Math.random() + 2 )
    return (
        <div>
            <h2>{ randomNumber }</h2>
            <p>O número randomizado é esse acima! </p>
            </div>
    )
};