export default function Evento() {
    let contador = 0

    function incrementar(){
        console.log(contador++)
    }
    return (
        <button className={`
        flex justify-center items-center
        text-4xl
        h-52 w-52 bg-green-600
        `} onClick={incrementar}>
            Evento
        </button>
    )
}