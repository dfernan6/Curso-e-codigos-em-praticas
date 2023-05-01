import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import RandomNumber from './components/basicos/RandomNumber'
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

export default function App(){ 
  return (
<div id="app">
 <h1>Fundamentos React</h1>
 <Card 
 titulo="Exemplo de Card"
 content="Doidera!"
 >
  </Card> 
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
  <Fragmento /> 
  <RandomNumber />
  <Aleatorio min={1} max={60}/>
</div>
)
};