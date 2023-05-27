import Layout from "../../layout";
import { useRouter } from "next/router";

export default function ClientProCodigo() {
    const router = useRouter()
    return (
        <Layout titulo="Navegação Dinâmica">
            <span>Código = {router.query.codigo}</span>
            <div>Filial = {router.query.filial}</div>
        </Layout>
    )
}