export default function Caixa(props: any) {
    return (
        <div className={`
        flex justify-center items-center
        bg-blue-500 m-2 rounded-md
        w-[300px] h-[64px]
        text-5xl font-bold`}>
            {props.children}
        </div>
    )
}