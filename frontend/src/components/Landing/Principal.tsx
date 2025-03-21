import { Cabecalho } from "../shared/Cabecalho";

export default function Principal() {
    return (
        <div className="
        flex flex-col h-[500px] w-full itens-center
        bg-cover bg-center bg-no-repeat
        bg-[url('/principal.jpg')]
        ">
            <Cabecalho />
            <div className="flex flex-col justify-center items-center h-full flex-1">
                <h1 className="text-3xl sm:text-5xl font-bol">Ismael Strey Pereira</h1>
                <h2>Programador intinerante</h2>
            </div>
        </div>
    )
};