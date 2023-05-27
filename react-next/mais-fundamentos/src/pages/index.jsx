import Link from 'next/link'
import Navegador from '../components/Navegador'

export default function Inicio() {
  return (
    <div>
    <h1>Hello world!</h1>
    <p>
      {JSON.stringify({nome: 'João', idade: 30})}
    </p>
    <Navegador texto="Layout" destino="/layout" /><br></br>
    <Navegador texto="Navegação #01" destino="/navegacao" /> <br></br>
    <Navegador texto="Navegaçã0 #02" destino="/cliente/sp-2/123" /> <br></br>
    <Navegador texto="Componente com Estado" destino="/estado" />
    </div>
  )
}