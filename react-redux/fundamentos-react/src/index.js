import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

const tag = <strong>'Olá React!!'</strong>

ReactDOM.render(
    <div id="app">
     { tag }
     <Primeiro />
     <ComParametro
       titulo="Situação do aluno"
       aluno="Pedro"
       nota=" 9.5" />
       <ComParametro
       titulo="Situação do aluno"
       aluno="Maria"
       nota=" 7" 
       />
              <ComParametro
       titulo="Situação do aluno"
       aluno="Lucia"
       nota=" 6.3" 
       />
    </div>,
    document.getElementById('root')
)