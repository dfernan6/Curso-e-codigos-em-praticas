import './App.css';

import Intervalo from './components/Intervalo';
import Card from './components/Card';

function App() {
  return (
   <div className='App'>
    <h1>Exercicio React-Redux (Simples)</h1>
      <div className='linha'>
        <Intervalo></Intervalo>
      </div>
      <div className='linha'>
        <Card title='Card 2' green>X</Card>
        <Card title='Card 3' red>X</Card>
        <Card title='Card 4' purple>X</Card>
      </div>
   </div>
  );
}

export default App;
