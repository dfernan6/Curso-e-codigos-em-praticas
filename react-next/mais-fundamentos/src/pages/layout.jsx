import Link from "next/link"

export default function Layout(props) {
    return (
        <div>
            <h1>{props.titulo}</h1>
            <p>{props.children}</p>
            <Link href="/">Voltar</Link>
        </div>
    )
}