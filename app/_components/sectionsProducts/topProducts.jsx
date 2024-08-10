import CardProduct from "../cardProduct";
import {groq} from "next-sanity";
import client from "@/app/sanity";

export default async function TopProducts (){
    const products = await client.fetch(groq`*[_type == "product" && top_product == true]{
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
        <>
            <div className="flex flex-col gap-4 ">
                <h1 className="text-3xl font-bold"><span className="font-thin">Top </span>Products</h1>
               
                <div className="flex gap-2 md:gap-10 overflow-x-scroll py-3 items-center">
                        {
                            products.map((product, index)=>{
                                
                                return  <div key={index} className="min-w-[20%] md:min-w-[20%] lg:min-w-[10%]">
                                         <CardProduct product={product} />
                                 </div>
                            })
                        }
                </div>
               
            </div>
        </>
    )
}