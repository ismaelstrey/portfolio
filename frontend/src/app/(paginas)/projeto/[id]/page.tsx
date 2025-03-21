export default async function Projeto ({params}:{params: Promise<{id: string}>}){
    const {id} = await params;


    return (
        <div>
            <h1>Projeto {id}</h1>
        </div> 
    )
};