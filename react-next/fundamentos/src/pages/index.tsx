import Pagina from "@/components/template/Pagina"
import Menu from "@/components/template/Menu"
import MenuItem from "@/components/template/MenuItem"
import { Icon360View, IconArrowMoveDown, IconArrowMoveUp, IconArrowsDiff, IconClick, IconClock, IconH1, IconSitemap, IconSourceCode, IconTable } from "@tabler/icons-react"
import Linha from "@/components/layout/Linha"

export default function Home() {
  return (
<Pagina>
  <div className={`p-2`}>
  <Menu>
    <Linha>
    <MenuItem 
    icone={<IconSourceCode />}
    url="/hora.html"
    className="botao"
    >

      Hora (Estático)
    </MenuItem>
    <MenuItem 
    icone={<IconSourceCode />}
    url="/horaAtual.html"
    className="botao"
    >

      Hora com JS (Estático)
    </MenuItem>
    <MenuItem
    icone={<IconClock />}
    url="/api/hora"
    className="botao"
    >

      Hora (Dinâmico)
    </MenuItem>
    <MenuItem
    icone={<IconTable />}
    url="/api/tabela?colunas=5&linhas=7"
    className="botao"
    >

      Tabela
    </MenuItem>
    <MenuItem
    icone={<IconArrowsDiff />}
    url="/api/usuarios"
    className="botao"
    >

      API de usuários
    </MenuItem>
    <MenuItem
    icone={<Icon360View />}
    url="/examples/simples"
    className="botao"
    >

      Componente Simples
    </MenuItem>
    <MenuItem
    icone={<IconH1 />}
    url="/examples/basico"
    className="botao"
    >

      Componente Básico
    </MenuItem>
    <MenuItem
    icone={<IconSitemap />}
    url="/examples/filhos"
    className="botao"
    >

      Filhos
    </MenuItem>
    <MenuItem
    icone={<IconClick />}
    url="/examples/evento"
    className="botao"
    >

      Evento
    </MenuItem>
    <MenuItem
    icone={<IconArrowMoveDown />}
    url="/examples/direta"
    className="botao"
    >

      Comunicação direta
    </MenuItem>
    <MenuItem
    icone={<IconArrowMoveUp />}
    url="/examples/indireta"
    className="botao"
    >

      Comunicação indireta
    </MenuItem>
    </Linha>
  </Menu>
  </div>
</Pagina>
  )
}
    