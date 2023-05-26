import { useCallback, useEffect, useState } from "react"

export default function Contador() {
    const [delta, setDelta] = useState(1)
    const [valor, setValor] = useState(0)
    const [multi10, setMulti10] = useState(0)

    const calcularValorMulti10 = useCallback((valor: number) => {
        return valor * 10
    }, [])

    useEffect(() => {
        const multi10 = calcularValorMulti10(valor)
        setMulti10(multi10)
    }, [valor, calcularValorMulti10])

    return (
        <div className="flex flex-col items-center gap-2">
            <span>{valor}</span>
            <span>Esse é o valor multiplicado por dez: {multi10}</span>
            <span>O valor delta é: {delta}</span>
            <div className="flex gap-5">
                <button
                 className={` 
                border border-black
                w-5 rounded-md
                bg-blue-500 text-white
                hover:bg-blue-600
                `}
                onClick={() => setValor(valor + delta)}
                > + </button>
                <button
                 className={`
                border border-black
                 w-5 rounded-md 
                bg-blue-500 text-white
                hover:bg-blue-600
                `}
                onClick={ () => setValor(valorAtual => valorAtual - delta)}
                > - </button>
            </div>
            <input
            type="number"
            value={delta}
            onChange={e => setDelta(+e.target.value)}
            className="bg-zinc-400 px-2 border border-black"
            />
        </div>
    )
}