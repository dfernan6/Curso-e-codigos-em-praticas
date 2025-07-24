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
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";
import Intervalo from './components/Intervalo';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';
import logo from './github.png'; // adjust path as needed

export default function App(){ 
  return (
<div className="App">
<h1>FUNDAMENTOS REACT</h1>
<div className="info">
 <b>Neste app os exercícios foram feitos para prática e conhecimentos.</b><br></br><br></br>

React-Redux é a biblioteca oficial que conecta o Redux ao React, permitindo que seus componentes acessem e atualizem o estado global da aplicação de forma eficiente e organizada.<br></br><br></br>

<b>Explicando um pouco mais:</b><br></br><br></br>

Membros de familia são as notas do aluno com o ternário indicando aprovação.<br></br>

No qual props e appendChild são conceitos de mundos diferentes no desenvolvimento web — um do React e outro do DOM tradicional é sempre bom evitar mistura los.<br></br>

A função Math.random() em JavaScript é usada para gerar números pseudoaleatórios entre 0 (inclusive) e 1 (exclusivo). Ou seja, ela pode retornar algo como 0.2345, 0.9876, etc.<br></br>

 O card Fragmento foi utilizado o recurso React.Fragment é  muito útil do React que permite agrupar múltiplos elementos sem adicionar tags extras no HTML — ideal para manter seu código limpo e semanticamente correto.<br></br><br></br>

</div>
 <div className="Cards">
 <Card titulo="#14 - Mega Sena" color="#E3BDE6">
  <Mega />
  </Card>
 <Card titulo="#13 - Contador" color="#38043D">
  <Contador numeroInicial={''}>
  </ Contador>
  </Card>
 <Card titulo="#12 - Componente controlado" color="#CFE6E2">
  <Input/>
  </Card>
 <Card titulo="#11 - Comunicação Indireta" color="#5C6B5C">
  <IndiretaPai/>
  </Card>
  <Card titulo="#10 - Comunicação Direta" color="#615134">
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
      <h1>React-Redux</h1>
      <div className="info">
        <i><b>Gerenciamento centralizado de estado</b></i><br></br><br></br>

- Toda a aplicação compartilha um único estado global, armazenado na store.<br></br>
- Evita o "prop drilling" (passar props por vários níveis de componentes).<br></br><br></br>

 <b><i> Conexão entre componentes e estado</i></b><br></br><br></br>

- Usa o componente Provider para disponibilizar a store para toda a aplicação.<br></br>
- Usa os hooks useSelector e useDispatch para ler e modificar o estado diretamente nos componentes.<br></br><br></br>

 <b><i>Fluxo previsível de dados</i></b><br></br><br></br>
- O estado só muda por meio de actions que são processadas por reducers.<br></br>
- Isso torna o comportamento da aplicação mais fácil de entender e depurar.<br></br><br></br>

 <b><i>Performance otimizada</i></b><br></br><br></br>
- O React-Redux evita re-renderizações desnecessárias com verificações inteligentes de mudanças no estado.<br></br><br></br>

      </div>
      <div className='linha'>
        <Intervalo></Intervalo>
        <Media></Media>
        <Soma></Soma>
        <Sorteio></Sorteio>
      </div>
      <p><i>Fique à vontade para consultar os CODES da aplicação no repositório <b>GitHub</b></i></p><a href="https://github.com/dfernan6/Curso-e-codigos-em-praticas/tree/master/react-fundamentals" target="_blank" rel="noreferrer"><img src={ logo } className="git" alt="https://github.com/dfernan6/Curso-e-codigos-em-praticas/tree/master/react-fundamentals" /></a><br></br><br></br>
</div>
)
};