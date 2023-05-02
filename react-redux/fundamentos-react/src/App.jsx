import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import RandomNumber from './components/basicos/RandomNumber'
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import './App.css'

export default function App(){ 
  return (
<div className="App">
<h1>FUNDAMENTOS REACT</h1>
 <div className="Cards">
 <Card 
 titulo="#5 - Aleatório"
 >
  <Aleatorio min={1} max={60}/>
  </Card> 
  <Card 
 titulo="#4 - Primeiro"
 >
   <Primeiro />
  </Card> 
  <Card 
 titulo="#3 - Fragmento"
 >
   <Fragmento />
  </Card> 
  <Card 
 titulo="#2 - Aprovações"
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
  </Card> 
  <Card 
 titulo="#1 - Randomizado"
 >
   <RandomNumber />
  </Card>
  </div> 
</div>
)
};