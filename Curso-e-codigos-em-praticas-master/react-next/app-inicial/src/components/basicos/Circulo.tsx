interface CirculoProps {
    text: string
    quasePerfeito?: boolean
}

export default function Circulo(props: CirculoProps) {
    return (
        <div className={`
        flex justify-center items-center
        gap-7 p-7
        h-32 w-32 bg-cyan-500
        ${props.quasePerfeito? 'rounded-md' : 'rounded-full'}
        `}>
            {props.text}
        </div>
    )
}