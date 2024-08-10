import { groq } from "next-sanity";
import client from "@/app/sanity";
import CardProduct from "../_components/cardProduct";
export default async function Page({params}) {
    const products = await client.fetch(groq`*[_type == "product" && brand->name == $brand]{
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
    }`, { brand: params.brand },{
        next: {
            revalidate : 0,
        }
    });
    console.log("brand products");
    console.log(params.brand);
    console.log(products);
    if (products.length === 0) {
        return(
                <div className="w-full h-screen flex items-center justify-center font-oswald">
                    <h1 className="text-3xl text-red">No items availble for this brand</h1>
                </div>
        )
        
    }
    return (
        <>
           {
            products && (
             <section className="flex flex-col justify-center gap-4  w-full h-full px-2">
                <h2 className="text-2xl font-oswald font-bold uppercase">{params.brand}</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-10   ">
                    {
                        products.map((product, index)=>{
                            return <CardProduct key={index} product={product} />
                        })
                    }
                </div>
            </section>
            )
           }
        </>
    );
}