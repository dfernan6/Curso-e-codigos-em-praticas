import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import RandomNumber from './components/basicos/RandomNumber'
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import './App.css'
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repetição/ListaAlunos";
import TabelaProdutos from "./components/repetição/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuárioInfo from "./components/repetição/UsuárioInfo";
import DiretaPai from "./components/comunicação/DiretaPai";
import IndiretaPai from "./components/comunicação/IndiretaPai";

export default function App(){ 
  return (
<div className="App">
<h1>FUNDAMENTOS REACT</h1>
 <div className="Cards">
 <Card titulo="#11 - Comunicação Indireta" color="#5C6B5C">
  <IndiretaPai/>
  </Card>
  <Card titulo="#10 - Comunicação Direta" color="#02F3F7">
  <DiretaPai/>
  </Card>
  <Card titulo="#9 - Condicional" color="#FAC837">
  <ParOuImpar numero={2} />
  <ParOuImpar numero={3} />
  <UsuárioInfo usuario={{nome: "Marcel"}}/>
  <UsuárioInfo usuario={{nome: "Dani"}}/>
  <UsuárioInfo/>
  </Card>
  <Card titulo ="#8 - Produtos" color="#DB0D90">
    <TabelaProdutos></TabelaProdutos>
  </Card>
 <Card titulo="#7 - Repetição" color="#498505">
  <ListaAlunos></ListaAlunos>
 </Card>
 <Card titulo="#6 - Familia" color="#2D068F">
  <Familia sobrenome="Silva">
  <FamiliaMembro nome="Eduardo" />
  <FamiliaMembro nome="Camila" />
  <FamiliaMembro nome="Jorge" />
  <FamiliaMembro nome="Claudio" />
  <FamiliaMembro nome="Anderson" /> 
  </Familia>  
</Card>
 <Card 
 titulo="#5 - Aleatório" color="#FA5A41"
 >
  <Aleatorio min={1} max={60}/>
  </Card> 
  <Card 
 titulo="#4 - Primeiro" color="#1C1DFA"
 >
   <Primeiro />
  </Card> 
  <Card 
 titulo="#3 - Fragmento" color="#48D5FA"
 >
   <Fragmento />
  </Card> 
  <Card 
 titulo="#2 - Aprovações" color="#FFE142"
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
 titulo="#1 - Randomizado" color="#F50B00"
 >
   <RandomNumber />
  </Card>
  </div> 
</div>
)
};