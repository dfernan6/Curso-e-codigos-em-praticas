import ItemCarrinho from "@/model/ItemCarrinho";
import CarrinhoItem from "./CarrinhoItem";
import { IconCircleX } from "@tabler/icons-react";
import Moeda from "@/utils/moeda";

interface CarrinhoProps {
    itens: ItemCarrinho[]
}

export default function Carrinho(props: CarrinhoProps) {
    const total = props.itens.reduce((soma, item) => {
        return soma + item.quantidade * item.produto.preco
    }, 0)
    return (
        <div className="flex w-full">
            <div className={`
            bg-slate-200 p-3 mt-20 border border-cyan-500
            `}>
                Carrinho {Moeda.formatar(total)}
            </div>
            <div className="flex gap-5 p-5">
            {props.itens.length === 0 ? ( 
                <div className="flex mt-20">
                    <IconCircleX />
                    <span>Nenhum item no carrinho</span>
                </div>   
            ) : (
                props.itens.map((item, i) => {
                    return (
                        <CarrinhoItem key={i} {...item} />
            )}) 
            )}
        </div>
        </div>
    )
}