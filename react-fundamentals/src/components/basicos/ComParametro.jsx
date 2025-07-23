import React from  'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default function(props){
    const status = props.nota >= 7 ? "Aprovado" : "Reprovado"
    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p>O aluno <strong>{ props.aluno }</strong> recebeu a nota  
            <strong>{ props.nota }</strong> e foi <strong>{status}</strong></p>
        </div>
    )
}