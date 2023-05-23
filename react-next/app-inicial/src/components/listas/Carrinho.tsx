import ItemCarrinho from "@/model/ItemCarrinho";
import CarrinhoItem from "./CarrinhoItem";

interface CarrinhoProps {
    itens: ItemCarrinho[]
}

export default function Carrinho(props: CarrinhoProps) {
    return (
        <div className="flex flex-col w-full">
            <div className="bg-zinc-200 p-1 mt-20">
                Carrinho
            </div>
            {props.itens.map((item, i) => {
                return (
                    <CarrinhoItem key={i} {...item} />
                )
            })}
        </div>
    )

}