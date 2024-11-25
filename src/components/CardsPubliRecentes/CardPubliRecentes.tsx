import Image from "next/image";
import Avatar from "../Avatar/Avatar";

export default function CardPubliRecente() {
    return(
        <div className="w-full mt-8">
            <p className="font-bold text-sky-600">#Nanotecnologia</p>
            <Image className="w-full"
            src="/img/thisisengineering-EUXD3xC6T30-unsplash.jpg"
            width={296}
            height={312}
            alt="Pesquisa"
            style={{objectFit: 'cover'}}
            />
            <h3 className="font-extrabold text-2xl mt-2 text-gray-700">Charge Two Devices at the Same Time With This Magnetic Wireless Charging Dock
            </h3>
            <Avatar/>
        </div>
    )
}