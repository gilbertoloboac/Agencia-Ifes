import Image from "next/image";

export default function Footer() {
    return(
        <div className=" flex m-auto max-w-[800px]  mt-20">
            <div className="pb-4">
                <Image
                src="/logo-agencia-ifes.svg"
                width={200}
                height={46}
                alt="Agência Ifes"
            />
            <div className="mt-5 mb-16 max-w-56">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum officiis, laboriosam eum dicta voluptatibus odio voluptate excepturi earum obcaecati aperiam vitae velit et, cumque, itaque reiciendis qui recusandae quae alias!</p>
            </div>
            </div>
            
        </div>
    )
}