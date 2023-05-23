import ItemCarrinho from "@/model/ItemCarrinho";
import CarrinhoItem from "./CarrinhoItem";

interface CarrinhoProps {
    itens: ItemCarrinho[]
}

export default function Carrinho(props: CarrinhoProps) {
    return (
        <div className="flex flex-col w-full mt-20">
            <div className={`
            bg-slate-200 p-1 mt-10
            `}>
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