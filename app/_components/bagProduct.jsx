"use client";

import { Instrument_Sans } from "next/font/google";
import { useEffect, useState } from "react";


export default function BagProducts({openCart , setOpenCart}){
    const [cart , setCart] = useState([])

    useEffect(()=>{
    const getcart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    setCart(getcart)
    console.log(getcart)

    },
    [openCart])

    const calculePrice=()=>{
        let total = 0;
        cart.map((item)=>{
            total += item.price * item.quantity
        })
        return total
    }
    const removeItem=(index)=>{
        const newCart = cart.filter((item)=>cart.indexOf(item)!==index)
        console.log(newCart)
        setCart(newCart)
        localStorage.setItem('cart', newCart)

    }


   

    return(
        <section style={{background:"#a9c5a0"}} className={`${openCart ?" translate-y-0" :"translate-y-full"}  bottom-0 right-0 w-full fixed z-50 transition-all duration-300 ease-in-out  px-4 py-2`}>
             <div className="flex justify-between items-center ">
                <h1 className="text-2xl font-semibold">Bag</h1>
                <button className="bg-gray-800 text-white  rounded-lg " onClick={()=>{setOpenCart(false) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 hover:text-gray">
                                     <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                </button>
            </div>
            {
                cart.length === 0 ? (
                    <h1 className="text-2xl font-bold text-center ">No items</h1>
                    
                ):(
         <div className="h-full w-full ">
            
            <div className="flex flex-col gap-4 mt-4 text-white">
                {
                    cart.map((item , index)=>(
                        <div key={index} className="flex justify-between items-center">
                           <div className="flex justify-between items-center w-full">
                                        <div className="flex gap-4 items-center ">
                                            <img src={item.image} alt="shoe" className="w-20 h-20 object-cover rounded-lg"/>
                                            <div>
                                                <h1 className="text-sm md:text-xl font-semibold ">{item.name}</h1>
                                                <p className=" text-xs md:text-lg text-gray-500">Size: {item.size}</p>
                                                <p className="text-xs md:text-lg text-gray-500">Color: {item.color}</p>
                                                <p className="text-xs md:text-lg text-gray-500">Quantity: {item.quantity}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-gray-500">${item.price}</p>
                                        </div>
                                        <div className="hover:cursor-pointer" onClick={()=>{removeItem(index)}}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                </svg>

                                        </div>
                                    </div>
                        </div>
                    ))
                }
                
            </div>
            <div className="flex justify-between items-center mt-4">
                <h1 className="text-xl font-semibold">Total</h1>
                <p className="text-xl font-semibold">${calculePrice()}</p>
            </div>
            <div className="flex justify-center mt-4">
                <button className="bg-gray-800 text-black px-4 py-2 rounded-lg bg-yellow-200">Checkout</button>
            </div>
            </div>
                )

            }
            

        </section>
    )
}