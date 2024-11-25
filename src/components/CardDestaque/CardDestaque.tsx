import Image from "next/image";
import Avatar from "../Avatar/Avatar";

export default function CardDestaque () {
    return(
        <div className=" w-[438] mt-4 pl-4 ml-4 ">
            <div className="flex">
                <Image
                src="/img/thisisengineering-TTmuplyNMHU-unsplash.jpg"
                width={144}
                height={104}
                style={{ objectFit: 'cover' }} 
                alt="Pesquisa"
                />
                <div className=" flex flex-col ml-3">
                    <p className="text-gray-700 text-sm">Biotecnologia</p>
                    <p className="font-extrabold text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p> 
                    <div className="flex items-center text-center">
                        <p className=" text-xs text-gray-600 mt-2">Universidade Federal do Acre (Ufac)</p>
                    </div>
                </div>  
            </div>
        </div>
    )
}