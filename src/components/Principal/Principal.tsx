import Image from "next/image";
import CardDestaque from "../CardDestaque/CardDestaque";
import Avatar from "../Avatar/Avatar";

export default function Principal() {
    return(
        <main className="max-w-[1420px] m-auto flex justify-center columns-2">
            <div className="w-1/2 mt-7">
                 <Image
                src="/img/cdc-LiNIONbajm4-unsplash.jpg"
                width={728}
                height={486}
                style={{ objectFit: 'cover' }} 
                alt="Pesquisa"
                />
                    <p className="font-bold text-sky-600 mt-3">#Saúde</p>
                    <h1 className="font-extrabold font-serif text-4xl ">Charge Two Devices at the Same Time With This Magnetic Wireless Charging 
                    </h1>
                    <div className="flex items-center text-center">
                        <Avatar/>
                    </div>
                    
            </div>
            <div>
                <h2 className="font-bold text-2xl text-sky-600 ml-8 mt-6 ">Destaque</h2>
                <CardDestaque/>
                <CardDestaque/>
                <CardDestaque/>
                <CardDestaque/>
                <CardDestaque/>
            </div>
            
           
        </main>
    )
}