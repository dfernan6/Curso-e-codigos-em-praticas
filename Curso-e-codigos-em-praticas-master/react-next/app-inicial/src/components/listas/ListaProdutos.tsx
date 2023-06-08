import Produto from "@/model/Produto"
import ProdutoItem from "./ProdutoItem"

interface ListaProdutosProps {
    produtos: Produto[]
    comprar: (produto: Produto) => void
}

export default function ListaProdutos(props: ListaProdutosProps) {
    return (
        <div className={`
        flex flex-wrap justify-center items-center h-screen m-1
         gap-5 p-2
        `}>
            {props.produtos.map(produto =>{
                return <ProdutoItem key={produto.id}
                produto={produto} comprar={props.comprar} />
            })}
        </div>
    )
}