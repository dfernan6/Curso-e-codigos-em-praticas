import Background from "@/components/starWars/Background";
import Personagens from "@/components/starWars/Personagens";
import useStarWars from "@/data/hooks/useStarWars";

export default function PaginaStarWars() {
    const { processando, personagens, obterPersonagens } = useStarWars()
    
    return (
        <div className={`
        flex flex-col gap-5 justify-center 
        items-center h-screen
        `}>
                <Background />
                        {processando ? (
                <div>Processando...</div>
            ) :  personagens.length > 0 ? (
                <Personagens personagens={personagens} />
            ) : (
                <div> Nenhum personagem encontrado</div>
            )
            } 
            <button 
            onClick={obterPersonagens}
            className={`
            bg-blue-500 p-2 border
             border-black hover:bg-blue-200
             `}
            >
                Obter
            </button> 
        </div>
    )
}