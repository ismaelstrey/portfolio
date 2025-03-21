import BotaoChat from "@/components/chat/BotaoChat";
import { Header } from "@/components/chat/shared/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<div className="bg-zinc-900 min-h-screen text-zinc-200"><BotaoChat/>
<Header/>
{children}</div>
       

  );
}
