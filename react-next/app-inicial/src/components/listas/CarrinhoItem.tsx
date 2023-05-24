import ItemCarrinho from "@/model/ItemCarrinho";
import Moeda from "@/utils/moeda";

export default function CarrinhoItem(props: ItemCarrinho) {
  return (
        <div className={`
        flex gap-10 bg-blue-500
        border border-white m-1
        `}>
            <span className={` inline-flex
            w-50 h-7 mt-20 bg-blue-200 px-2
            mr-2`}>{props.quantidade} {props.produto.nome} -  <strong>{Moeda.formatar(props.produto.preco * props.quantidade)}</strong>
        </span>
        </div>
    )
}