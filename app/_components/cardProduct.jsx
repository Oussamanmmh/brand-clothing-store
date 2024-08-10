
import Image from "next/image"
import { urlFor } from "../urlfor"
import { Suspense } from "react"
import PlaceHolderImage from "./placeholderImage"
import Link from "next/link"

export default function CardProduct ({product}){
  
    
    
    return(
        <>
           {
           
                    product &&
                    <Link href={`product/${product._id}`} className="flex flex-col font-josefin gap-4  border px-4 py-2 rounded-2xl hover:scale-105 transition-all duration-300 ease-in-out">
                    
                        <Suspense fallback={<PlaceHolderImage/>}>
                             <Image height={100} width={100} alt={product.name} src={urlFor(product.image[0]).url()} className="rounded-2xl h-2/3 w-full object-cover"/> 
                        </Suspense>
                    <div>
                        <h1 className="text-xl font-semibold uppercase">{product.name}</h1>
                        <p className="text-sm font-sans  text-orange-200 ">{product.description}</p>
                        <p className="text-lg font-semibold font-serif flex justify-between "><span>{product.price},00</span><span>$</span></p>
                    </div>
                    <div className={`bg-primary text-black rounded-2xl py-2 flex justify-center items-center font-semibold`} >
                        Add to Cart
                    </div>
                        
                </Link>
           }
        </>
    )
}