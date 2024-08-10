import CardProduct from "../cardProduct";
import {groq} from "next-sanity";
import client from "@/app/sanity";
import tn from "../../../public/assets/tn.svg";
import Image from "next/image";


export default async function ShoesSections(){
    const products = await client.fetch(groq`*[_type == "product" && type_product->name == "shoe"]{
        _id,
        name,
        price,
        "image": image[]{
            asset->{
                _id,
                url
            },
           
        },
        description,
        "brand": brand->name,
    
        } `,{next:{
            revalidate: 0,
        }});
    console.log(products)
    return(
        <section className="flex flex-col justify-center gap-4  w-full h-full px-2">
            <h2 className="text-2xl font-oswald font-bold uppercase">Shoes</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-10 ">
                {
                    products.map((product, index)=>{
                        return <CardProduct key={index} product={product} />
                    })
                }
               
            </div>
           
           
            
           
        </section>
    )
}