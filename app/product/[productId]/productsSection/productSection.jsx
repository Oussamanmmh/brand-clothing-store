import { groq} from "next-sanity";
import client from "@/app/sanity";
import CardProduct from "@/app/_components/cardProduct";

export default async function ProductsSection(){
    const products = await client.fetch(groq`*[_type == "product"]{
        _id,
        name,
        price,
        "image": image[]{
            asset->{
                url
            }
        },
        description,
    }` , {
        next:{
            revalidate:0
        }
    });


    return(
        <>
           <section className="flex flex-col justify-center gap-4  w-full h-full px-2">
              <h2 className="text-2xl font-oswald font-bold uppercase">You might like this</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-10 ">
                    {
                        products.map((product, index)=>{
                            return <CardProduct key={index} product={product} />
                        })
                    }
              </div>

            </section>
        </>
    )


}