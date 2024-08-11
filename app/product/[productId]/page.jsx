"use client";
import { useState, useEffect} from "react";
import { groq } from "next-sanity";
import client from "@/app/sanity";
import Quantity from "./components/quantity";
import Sizes from "./components/sizes";
import Colors from "./components/colors";
import ProductImage from "./components/productImage";
import BuyNowAlert from "./components/buynow";
import { useCart } from "@/app/selectitemCont";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ProductsSection from "./productsSection/productSection";

export default function DeatailsProduct({ params }) {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [addedToCart, setAddedToCart] = useState(null);
    const [quantity , setQuantity] = useState(1);
    const [size, setSize] = useState("");
    const [error , setError] = useState(null)
    const [color, setColor] = useState("");
    const [alert , setAlert ] = useState(false);
    const {setTotal , total } = useCart();
    const handleAddToCart = () => {
        setAddedToCart(!addedToCart);
       if(addedToCart){
           const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
            const newCart = cart.filter((item) => item.product !== product._id);
            localStorage.setItem("cart", JSON.stringify(newCart));
            setTotal(total - 1);
            window.location.reload()
           return;
       }
       const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
        cart.push({
            product: product._id,
            name: product.name,
            price: product.price,
            image: product.image[0].asset.url,
            quantity: quantity,
            size: size,
            color: color
        });
        console.log(cart);
        setTotal(total + 1);
        localStorage.setItem("cart", JSON.stringify(cart)); 
        window.location.reload()

    }

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const product = await client.fetch(
                    groq`*[_type == "product" && _id == $productId]{
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
                        "category": category->name,
                        sizes,
                        colors,
                        "type_product": type_product->name
                    }`,
                    { productId: params.productId },{
                        next:{
                            revalidate:3600
                        }
                    }
                );
               if(!product.length){
                setProduct(null)
                return
               }
               
                setProduct(product[0]);
                const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
                const found = cart.find((item) => item.product === product[0]._id);
                if(found){
                    setAddedToCart(true);
                   
                }
                else{
                    setAddedToCart(false);
                }


            } catch (err) {
               
                console.log(err);
                setError(err)
            
            }
            finally{
                setLoading(false)
            }
        };
        fetchProduct();
    }, [params.productId]);

    
   
 if(!product){
    return <div className="w-full  h-screen flex flex-col justify-center items-center gap-20">
        <h1 className="text-4xl text-red font-josefin text-center">Product Not Found !</h1>
        <Link href={"/"} className="font-bold font-josefin">Go back to home</Link>

    </div>
 }


    return (
        <>
            
               
            <section className="flex flex-col gap-10">
             { product &&(
                <section className="flex flex-col md:flex-row md:items-center items-start md:gap-20 md:h-screen">
                   <ProductImage images={product.image}/>
                    <div className="flex w-full flex-col md:gap-4 gap-3 md:h-full md:w-1/2 justify-center">
                        <div >
                            <p className="text-lg  font-oswald font-bold uppercase">{product.brand}/{product.type_product}</p>
                            <h1 className="font-bold text-xl uppercase">{product.name}</h1>
                        </div >
                            <h2 style={{color:"#c5efcb"}} className="text-3xl font-bold font-serif text-gradient">{product.price},00$</h2>
                        <div>
                            <h1 className="font-semibold text-xl">Description</h1>
                            <p className="text-xs  font-josefin">{product.description}</p>
                        </div>
                     
                       <Colors colors={product.colors} setColor={setColor}/>
                       <Sizes sizes={product.sizes} setSize={setSize} />
                        <Quantity setQuantity={setQuantity}/>
                       
                        <div className="flex justify-between  w-full">
                            <button className={` bg-primary  font-semibold py-2 px-4 text-gray rounded-2xl flex items-center gap-2`} onClick={()=>handleAddToCart()}>
                                   <span>   {addedToCart ? "Added to cart " : `Add to cart `}</span> 
                                  {!addedToCart && ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg> )  }

                            </button>
                            <button className="border border-yellow-200 py-2 px-4 rounded-2xl" onClick={()=>setAlert(true)}>
                                Buy now
                            </button>
                        </div>
                       
                    </div>
                    <BuyNowAlert alert={alert} setAlert={setAlert} products={[{productId:{ _ref: product._id} , quantity , color: color , size }]}  totalAmount={product.price*quantity } />
                </section>   
                  )
                 }
               <ProductsSection/>
            </section>
           
        </>
    );
}
