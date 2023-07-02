import Contador from "@/components/context/Contador";

export default function PaginaContador() {
   

    return (
        <div className={`
        flex flex-col gap-5 justify-center 
        items-center h-screen
        `}>
            <Contador />
        </div>
    )
}