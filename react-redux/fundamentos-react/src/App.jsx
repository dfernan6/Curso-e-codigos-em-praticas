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
 <h1>FUNDAMENTOS REACT</h1>
 <Card 
 titulo="Desafio Aleatório"
 >
  <Aleatorio min={1} max={60}/>
  </Card> 
  <Card 
 titulo="Primeiro"
 >
   <Primeiro />
  </Card> 
  <Card 
 titulo="Fragmento"
 >
   <Fragmento />
  </Card> 
  <Card 
 titulo="Aprovações"
 >
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
  </Card> 
  <Card 
 titulo="Número randomizado"
 >
   <RandomNumber />
  </Card> 
</div>
)
};