import App from "next/app";
import { AppProps } from "next/app";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <h1> Hello world!
      </h1>
      <Link href="./context/contador">
        Contador
      </Link>
      <Link href="./listas/produtos">
        Produtos
      </Link>
    </div>
  )
}