import TabelaSerieA from "@/components/listas/TabelaSerieA"
import { IconBallFootball } from "@tabler/icons-react"

export default function PaginaListaBasica() {
    const times = [	
'Manchester City', 	
'Arsenal', 
'Newcastle', 
'Manchester United', 	
'Liverpool', 	
'Brighton', 	
'Aston Villa', 	
'Tottenham', 	
'Brentford', 
'Fulham', 	
'Crystal Palace', 
'Chelsea', 
'Wolverhampton', 
'West Ham', 
'Bournemouth', 
'Nottingham Forest', 
'Everton', 
'Leeds United', 	
'Leicester', 
'Southampton',
]

    return (
        <div className={`
        flex justify-center items-center
        h-screen
        `}>
            <h1 className="flex text-5xl gap-2
            items-center font-black m-10">
            <IconBallFootball size={50} stroke={1}/>
            Tabela série A
            </h1>
            <TabelaSerieA times={times}/>
        </div>
    )
}