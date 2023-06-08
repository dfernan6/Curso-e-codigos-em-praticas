
interface FilmesProps {
    filmes: any[]
    voltar: () => void
}

export default function Filmes(props: FilmesProps) {
    return (
        <div className="flex flex-col gap-5 items-center w-full">
            <button 
            onClick={props.voltar}
            className={`
            bg-blue-500 p-2 border
             border-black hover:bg-blue-200
             `}
            >
                Voltar
            </button>
            <table className="w-3/5 text-xl rounded-lg overflow-hidden">
            <thead>
                <tr className="bg-zinc-600 bg-opacity-70">
                    <th>Título</th>
                    <th>Episódio</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                {props.filmes.map((filme: any, indice: number) => (
                    <tr 
                    key={filme.title}
                    className={`
                    text-center
                    ${indice % 2 === 0 ? 'bg-zinc-400 bg-opacity-70' :
                    'bg-zinc-200 bg-opacity-70'}
                    `}
                    >
                        <td>{filme.title}</td>
                        <td>{filme.episode_id}</td>
                        <td>{filme.release_date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        
    )
}