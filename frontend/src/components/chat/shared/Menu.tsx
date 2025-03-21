'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Menu() {
    const caminiho = usePathname();

    console.log(caminiho.startsWith('/'));
  return (
<nav className="flex gap-6">
    <MenuItem href="/" title="Inicio" selecionado={caminiho === "/"}>Inicio</MenuItem>
    <MenuItem href="/sobre" title="Sobre" >Sobre</MenuItem>
    <MenuItem href="/projeto/1" selecionado={caminiho.startsWith("/projeto")} title="Projetos" >Projetos</MenuItem>
    <MenuItem href="/wats" title="Wats" novaAba >Contato</MenuItem>
</nav>
  );

}

interface PropsMenuItens {
  href: string;
  title: string;
  children?: React.ReactNode;
  selecionado?: boolean;
  novaAba?: boolean;
}


function MenuItem({ href, title, children, selecionado, novaAba }: PropsMenuItens) {


  return (
    <div>
        <Link href={href} title={title} className={`${selecionado && 'text-amber-200'}`} target={`${novaAba ? '_blank':'_self'}`}>
        
        <span className={`
            flex  items-center gap-2 text-sm ${selecionado && 'border-amber-200 border-b-4 pb-1'}
            `}>  {children}</span>
     
        </Link>

    </div>
  );

}