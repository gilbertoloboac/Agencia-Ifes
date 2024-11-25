import Image from "next/image";
import Link from "next/link";
import MenuFlutuante from "../MenuFlutuante/MenuFlutuante";

export default function Header() {
    return(
        <header className="w-full">
            <nav className="h-12 flex gap-5 items-center justify-center text-zinc-700 text-xs shadow-md bg-slate-200 ">
                <Link href="/imprensa" className="hover:font-bold">Sala de imprensa</Link>
                <Link href="/pesquisador" className="hover:font-bold">Área do Pesquisador</Link>
                <MenuFlutuante/>
            </nav>
            <div className="flex justify-between items-center pt-3 pb-3 border-t-2 border-sky-300 shadow-lg bg-slate-100">
                <div className="text-xs  ml-32">
                   <span className="font-bold text-sky-800 ">Sábado</span>, 23 de novembro de 2024
                </div>
                <div>
                    <Link href="/">
                        <Image
                        src="/logo-agencia-ifes.svg"
                        width={268}
                        height={48}
                        alt="Agência Ifes"
                        />
                    </Link>
                </div>    
                <nav className="flex gap-5 text-xs mr-48">
                    <Link href="/" className="hover:font-bold">Home</Link>
                    <Link href="https://www.google.br/"  className="hover:font-bold" >Banco de Fontes</Link>
                    <Link className="hover:font-bold" href="https://agenciabrasil.ebc.com.br/fotos">Galeria de Imagens</Link>
                    
                </nav>  
            </div>
        </header>
    )
}