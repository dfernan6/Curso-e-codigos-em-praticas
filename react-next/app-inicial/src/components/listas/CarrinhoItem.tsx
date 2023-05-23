import ItemCarrinho from "@/model/ItemCarrinho";

export default function CarrinhoItem(props: ItemCarrinho) {
    return (
        <div className={`
        flex rounded-full bg-slate-200
        px-4 
        `}>
            <span className={`
            w-7 h-7 p-2 bg-slate-200
            `}>{props.produto.nome}</span>
            {props.quantidade}
        </div>
    )
}