import { time } from "console"

interface TabelaSerieAProps {
    times: string[]
}

export default function TabelaSerieA(props: TabelaSerieAProps) {
    const itens: any[] = []
    
    for (let i=0; i < props.times.length; i++) {
        itens.push(<li key={props.times[i]}>
        {props.times[i]}</li>)
      }   
   
    const itens2 = props.times.map(time => {
        return (
           <li key={time} className="text-5 list list-decimal">
            {time}
           </li>
        )
    })
    
    return (
        <ol>
            {itens2}
        </ol>
    )
}