import Link from "next/link"

{/*for md screen*/}
export default function Links(){
    const links = [
        {nom :"All Products" , href:"/"},
        {nom : "Men" , href:"/men"},
        {nom :"Women" , href:"/women"},
        {nom :"Kids" , href:"/kids"},
      
    ]
    return(
        <>
            <ul className="hidden md:flex gap-20 justify-center text-white ">
                {links.map((link , index)=>{
                    return(
                        <li key={index} className="hover:underline hover:underline-offset-8">
                            <Link href={link.href}>{link.nom}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}