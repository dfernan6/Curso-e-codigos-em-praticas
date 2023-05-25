interface GridProps {
    cols?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
    xl2?: number
    children: any
}

export default function Grid(props: GridProps) {
    // grid-cols-1 sm:grid-cols-2 
    return (
        <div className={`
        grid grid-cols-${props.cols ?? 1}
        ${props.sm ? `sm:grid-cols-${props.sm}` : ''}
        ${props.md ? `md:grid-cols-${props.md}` : ''}
        ${props.lg ? `lg:grid-cols-${props.lg}` : ''}
        ${props.xl ? `xl:grid-cols-${props.sm}` : ''}
        ${props.xl2 ? `xl2:grid-cols-${props.sm}` : ''}
        lg:grid-cols-4 w-full gap-4 
        `}>
            {props.children}
        </div>
    )
}