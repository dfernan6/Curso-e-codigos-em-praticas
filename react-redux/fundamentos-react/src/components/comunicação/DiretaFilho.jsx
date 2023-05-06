import React from "react";

export default props => {
    return (
        <div>
            <span>{props.nome} </span>
            <span><strong>{props.idade} </strong></span>
            <span>, Nerd? <strong>{props.nerd ? 'Sim': 'Não'}</strong></span>
        </div>
    )
}