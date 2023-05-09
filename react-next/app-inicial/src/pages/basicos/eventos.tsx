import Evento from "@/components/basicos/Evento";

export default function PaginaEventos() {
    return (
        <div className={`
        flex flex-wrap items-center
        justify-center h-screen gap-5
        `}>
            <Evento />
            <Evento />
            <Evento />
        </div>
    )
}