import { useState } from "react"

export default function Contador() {
    const [valor, setValor] = useState(0)
    return(
        <div>
          <span>{valor}</span>
          <div>
            
          </div>
        </div>
    )
}