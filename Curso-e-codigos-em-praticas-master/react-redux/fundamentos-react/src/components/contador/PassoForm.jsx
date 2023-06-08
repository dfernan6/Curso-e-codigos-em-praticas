import React from 'react'

export default (props) => {
    return (
    <div>
        <laber htmlFor='passoInput'>Passo: </laber>
        <input
        id="passoInput" 
        type="number"
        value={props.passo} 
        onChange={e => props.setPasso(+e.target.value)}
        />
    </div>
    )
}