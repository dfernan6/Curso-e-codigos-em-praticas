import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
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