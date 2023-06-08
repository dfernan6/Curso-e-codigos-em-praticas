import { useState } from "react";
import Layout from "./layout";

export default function Estado() {
    const [numero, setNumero] = useState(0)

    function incrementar(){
        setNumero(numero + 1)
    }

    function decrementar(){
        setNumero(numero - 1)
    }

    return (
        <Layout titulo="Componente com Estado">
            <span>{numero}</span><br></br>
            <button onClick={incrementar}>Incrementar </button>
            <button onClick={decrementar}>Decrementar</button>
        </Layout>
    )
}