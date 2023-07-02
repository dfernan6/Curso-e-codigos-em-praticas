import Carrinho from "@/components/listas/Carrinho";
import ListaProdutos from "@/components/listas/ListaProdutos";
import produtos from "@/constants/produtos";
import CarrinhoContext from "@/data/CarrinhoContext";
import ItemCarrinho from "@/model/ItemCarrinho";
import Link from "next/link";
import { useContext, useState } from "react";

export default function PaginaProdutos() {
    const ctx = useContext(CarrinhoContext)

    const [itens, setItens] = useState<ItemCarrinho[]>([])
    
    return (
        <div className={`
        flex flex-col justify-center items-center
        h-screen p-2 gap-2
        `}>
            <Carrinho itens={ctx.itens} />
            <ListaProdutos produtos={produtos}
            comprar={ctx.adicionarProduto} />
            <Link href="/">
                Voltar
            </Link>
        </div>
    )
}