import React from 'react'

export default (props) => {
    return (
        <div>
            <button onClick={props.incrementar}>
                Mais {props.passo}
            </button>
            <button onClick={props.decrementar}>
                Menos {props.passo}
            </button>
        </div>
    )
}