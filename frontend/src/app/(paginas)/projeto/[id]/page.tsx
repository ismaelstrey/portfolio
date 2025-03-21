export default async function Projeto ({params}:{params:{id: string}}){
    const id = params.id;


    return (
        <div>
            <h1>Projeto {id}</h1>
        </div> 
    )
};