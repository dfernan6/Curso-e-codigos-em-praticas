import Contador from "@/components/hooks/Contador";
import Background from "@/components/starWars/Background";

export default function PaginaContador() {
    return (
        <div className={`
        flex justify-center items-center
        h-screen
        `}>
            <Contador />
            <Background />
        </div>
    )
}