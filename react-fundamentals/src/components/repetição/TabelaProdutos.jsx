import React from "react";
import produtos from "../../data/produtos";
import "./TabelaProduto.css"

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const produtosLi = produtos.map((produtos) => {
        return (
            <tr key={produtos.nome}>
                <td>{produtos.id}</td>
                <td>{produtos.nome}</td>
                <td>R$ {produtos.preço}</td> 
            </tr>
        )
    });
    return (
        <div className="TabelaProduto">
            <table border={1} >
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th> 
             {produtosLi}
            </table>
        </div>
    )
};