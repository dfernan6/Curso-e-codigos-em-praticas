import { createContext } from "react"
import { useState } from "react"

const ContadorContext = createContext({})
export default ContadorContext

export function ContadorProvider(props: any) {
    const [numero, setNumero] = useState(4321)

    function incrementar() {
        setNumero(numero + 1)
    }

    function decrementar() {
        setNumero(numero -1)
    }

    return (
        <ContadorContext.Provider value={{
            numero, incrementar, decrementar
        }}>
            {props.children}
        </ContadorContext.Provider>
    )
}