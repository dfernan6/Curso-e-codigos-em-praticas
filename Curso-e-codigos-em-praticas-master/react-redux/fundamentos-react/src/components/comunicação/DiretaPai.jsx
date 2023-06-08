import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho nome="Rodrigo" idade={12}
            nerd={true}/>
            <DiretaFilho nome="Michael" idade={16}
            nerd={false}/>
            <DiretaFilho nome="Henrique" idade={22}
            nerd={true}/>
            <DiretaFilho nome="Jeffrey" idade={32}
            nerd={false}/>
        </div>
    )
}