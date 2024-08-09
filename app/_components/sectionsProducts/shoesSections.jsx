import CardProduct from "../cardProduct";
import {groq} from "next-sanity";
import client from "@/app/sanity";

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
        <section className="flex flex-col justify-center gap-4">
            <h2 className="text-2xl font-bold">Shoes</h2>
            <div className="flex gap-2 md:gap-10  pb-6 flex-wrap">
                {
                    products.map((product, index)=>{
                        return <CardProduct key={index} product={product} />
                    })
                }
               
            </div>
        </section>
    )
}