import produtos from "@/constants/produtos"
import Produto from "@/model/Produto"
import { IconShoppingCart } from "@tabler/icons-react"
import Image from "next/image"

interface ProdutoItemProps {
    produto: Produto
    comprar: (produto: Produto) => void
}

export default function ProdutoItem(props: ProdutoItemProps) {
    return (
        <div className={`items-center
        flex flex-col border border-zinc-800
       rounded-md
        `}>
            <div className={`
            font-bold
        `}>{props.produto.id} - {props.produto.nome}</div>
            <Image
            src={props.produto.imagem}
            width={300} height={300} 
            alt="Imagem do Produto"
            className="rounded-md border border-zinc-600 m-2" 
            />
            
            <div className={`
            text-
        `}></div>
            <div className={`
            text-green-500 font-bold
        `}>Valor R${props.produto.preco}</div>
            <div className={`
        `}>{props.produto.descricao}</div>
        <div>
            <button className={`flex
            justify-center p-1
            border border-white
            rounded-md bg-slate-400
            hover:bg-slate-300
            `}
            onClick={() => props.comprar(produtos)}
            >
                Comprar
                <IconShoppingCart />
            </button>
        </div>
        </div>
    )
}