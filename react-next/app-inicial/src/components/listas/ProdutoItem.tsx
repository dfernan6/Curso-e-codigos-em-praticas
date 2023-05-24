import Produto from "@/model/Produto"
import { IconShoppingCart } from "@tabler/icons-react"
import Image from "next/image"

interface ProdutoItemProps {
    produto: Produto
    comprar: (produto: Produto) => void
}

export default function ProdutoItem(props: ProdutoItemProps) {
    const { produto } = props
    return (
        <div className={`items-center
        flex flex-col border border-zinc-800
       rounded-md bg-white
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
            text-green-500 font-bold
        `}>Valor R${props.produto.preco}</div>
            <div className={`
        `}>{props.produto.descricao}</div>
        <div>
            <button className={`flex
            justify-center p-1
            border border-slate-500
            rounded-md bg-slate-400
            hover:bg-slate-300 w-full gap-1
            m-1
            `}
            onClick={() => props.comprar(produto)}
            >
                Comprar
                <IconShoppingCart />
            </button>
        </div>
        </div>
    )
}