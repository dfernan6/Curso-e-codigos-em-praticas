import Contador from "@/components/context/Contador";
import { ContadorProvider } from "@/data/ContadorContext";

export default function PaginaContador() {
   

    return (
        <div className={`
        flex flex-col gap-5 justify-center 
        items-center h-screen
        `}>
            <ContadorProvider>
                <Contador />
            </ContadorProvider>
        </div>
    )
}