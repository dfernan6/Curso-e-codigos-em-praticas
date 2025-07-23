import React from "react";
import If, { Else } from "../../data/If";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const usuario = props.usuario || {};
    return (
        <div>
           {/* <If test={usuario && usuario.nome}>
                Seja Bem vindo <strong>{usuario.nome}</strong>
            </If>
            <If test={!usuario || !usuario.nome}>
                Seja Bem vindo <strong>Amigão</strong>
    </If> */}
            <If test={usuario && usuario.nome}>
                Seja Bem vindo <strong>{usuario.nome}</strong>
           
            <Else>
            Seja Bem vindo <strong>Amigão</strong>
            </Else>
            </If>
        </div>
    )

}