import React from "react";
import FamiliaMembro from "./FamiliaMembro"; 

export default props => {

    return (
        <div>
            <h2>Membros da família</h2>
            <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Carol"  {...props}/>
            <FamiliaMembro nome="Aline" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Jeffrey" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Alexander" sobrenome={props.sobrenome}/>
        </div>
    )
}