'use client'
import Image from "next/image";

export default function BotaoChat () {
    return (
        <div className="fixed bottom-5 right-5 m-4 cursor-pointer w-auto h-auto">
          <Image src="/chat.svg" width={50} height={50} alt="Botão de chat" className="hover:scale-125" priority />
        </div>
    )

}

