import { useState } from "react";
import Pergunta from "./Pergunta";

export default function Faq() {
    const [ativo, setAtivo] = useState<number>(0)
    
    function alternarVisibilidade(indice: number){
        if (indice === ativo) {
            setAtivo(-1)
        } else {
            setAtivo(indice)
        }
    }

    return (
        <div className="flex flex-col
         gap-2 md:w-3/4">
            <Pergunta 
            indice={0}
            aberta={ativo === 0}
            texto="O que é bombinha?" 
            resposta="Um brinquedo que explode"
            alternarVisibilidade={alternarVisibilidade}
            />
            <Pergunta
            indice={1}
            aberta={ativo === 1}
            texto="O que é uma barata?"
            resposta="Um Inseto"
            alternarVisibilidade={alternarVisibilidade}
            />
            <Pergunta
            indice={2}
            aberta={ativo === 2}
            texto="Um animal de orelhas grandes?"
            resposta="Um coelho"
            alternarVisibilidade={alternarVisibilidade}
            />
            <Pergunta
            indice={3}
            aberta={ativo === 3}
             texto="O que são caninos?"
            resposta="Cachorros"
            alternarVisibilidade={alternarVisibilidade}
            />
        </div>
    )
}