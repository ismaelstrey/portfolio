import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import { Menu } from "./Menu";


export function Header() {


    
  return (
    <header className="flex justify-center h-16">    
   <Container className="flex-1 flex justify-between items-end">
         <div className="flex gap-10 items-end justify-end">
            <Link href="/" className="hidden sm:block"> 
            <Image className="h-auto w-auto" src="/logo.svg" alt="logo" width={100} height={100} priority/></Link> 
            <Menu/>        
        </div>
      <div className="hidden sm:flex items-center">
       <Link target="_blank" className="bg-amber-200 text-zinc-900 rounded-full px-7 text-sm font-bold hover:scale-125" href="#">Perfil</Link>    
      </div>
     
   </Container>
    </header>  
  )

}