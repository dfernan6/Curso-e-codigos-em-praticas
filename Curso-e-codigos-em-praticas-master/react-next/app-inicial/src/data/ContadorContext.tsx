import { createContext } from "react"

const ContadorContext = createContext(0)
export default ContadorContext

export function ContadorProvider(props: any) {
    return (
        <ContadorContext.Provider value={1000}>
            {props.children}
        </ContadorContext.Provider>
    )
}