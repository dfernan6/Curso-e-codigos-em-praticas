import { IconCheck } from "@tabler/icons-react"

interface PersonagensProps {
    personagens: any
    selecionar: (personagem: any) => void
}

export default function Personagens(props: PersonagensProps) {
    return (
        <table className="w-3/5 text-xl rounded-lg overflow-hidden">
            <thead>
                <tr className="bg-zinc-600 bg-opacity-70">
                    <th>Nome</th>
                    <th>Altura</th>
                    <th>Peso</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {props.personagens.map((p: any, indice: number) => (
                    <tr 
                    key={p.name}
                    className={`
                    text-center
                    ${indice % 2 === 0 ? 'bg-zinc-400 bg-opacity-70' :
                    'bg-zinc-200 bg-opacity-70'}
                    `}
                    >
                        <td>{p.name}</td>
                        <td>{p.height}</td>
                        <td>{p.mass}</td>
                        <td>
                        <button 
            onClick={() => props.selecionar(p)}
            className={`
            bg-blue-500 p-2 border
             border-black hover:bg-blue-200
             `}
            >
                <IconCheck />
            </button> 
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}