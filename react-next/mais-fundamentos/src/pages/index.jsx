import Pagina from "@/components/template/Pagina"
import Menu from "@/components/template/Menu"
import MenuItem from "@/components/template/MenuItem"
import { Icon360View, IconArrowMoveDown, IconArrowMoveUp, IconArrowsDiff, IconClick, IconClock, IconH1, IconSitemap, IconSourceCode, IconTable } from "@tabler/icons-react"
import Linha from "@/components/layout/Linha"
import Link from 'next/link'
import Navegador from '../components/Navegador'

export default function Inicio() {
  return (
    <div>
    <Navegador texto="Layout" destino="/layout" /><br></br>
    <Navegador texto="Navegação #01" destino="/navegacao" /> <br></br>
    <Navegador texto="Navegaçã0 #02" destino="/cliente/sp-2/123" /> <br></br>
    <Navegador texto="Componente com Estado" destino="/estado" /><br></br>
    <Navegador texto="Integração com API #01" destino="/integracao_1" /><br></br>
    <Navegador texto="Conteúdo estático" destino="/estatico" />
    <p>
      {JSON.stringify({nome: 'João', idade: 30})}
    </p>
    </div>
  )
}