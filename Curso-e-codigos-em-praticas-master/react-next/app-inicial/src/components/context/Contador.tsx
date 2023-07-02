import ContadorContext from "@/data/ContadorContext"
import { useContext, useState } from "react"

export default function Contador() {
    const numero = useContext(ContadorContext)
    const [valor, setValor] = useState(0)

    function decrementar() {
      setValor(valor - 1)
    }

    function incrementar() {
      setValor(valor + 1)
    }

    return(
        <div className="flex flex-col items-center
        gap-5">
          <span className="items-center">
            {numero}
            </span>
            <span className="items-center">
            {valor}
            </span>
          <div className="flex gap-5">
            <button
            className="botao"
            onClick={decrementar}
            >-1</button>
            <button
            className="botao"
            onClick={incrementar}
            >+1</button>
          </div>
        </div>
    )
}