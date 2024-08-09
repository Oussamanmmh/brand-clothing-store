"use client"
import { useState } from "react"
export default function Sizes({sizes , setSize}){
    const [selectedSize, setSelectedSize] = useState(null);
    return(
        <>
            {sizes && (
                <div>
                <h1 className="font-semibold text-xl">Sizes</h1>
                <div className="flex gap-2 items-center">
                    {sizes.map((size, index) => (
                        <button
                            key={index}
                            className={`${
                                selectedSize === size
                                    ? "bg-gray text-white"
                                    : "bg-white text-black"
                            } border py-2 px-4 rounded-xl w-8 h-8 flex justify-center items-center`}
                            onClick={() => {
                                setSize(size)
                                setSelectedSize(size)}}
                        >
                            {size}
                        </button>
                    ))}
                </div>
        </div>
            )}
        </>
        
    )
}


    