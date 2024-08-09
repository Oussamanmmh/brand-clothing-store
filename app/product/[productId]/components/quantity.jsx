"use client"
import {  useEffect, useReducer } from "react";
export default function Quantity ({setQuantity}){
    const reducer = (quantity , action) =>{
        switch(action.type){
            case "increment":
                return quantity + 1;
            case "decrement":
                if(quantity <= 1){
                    return 1 ;
                }
                return quantity - 1;
            default:
               
                return quantity;
        }
        
    }
    const [quantity , dispatch]= useReducer(reducer , 1)
    useEffect(()=>{
        setQuantity(quantity)
    },[quantity])
    return(
        <>
            <div>
                            <h1 className="font-semibold text-xl">Quantity</h1>
                            <div className="flex gap-2 items-center">
                                <button className="bg-gray border py-2 px-4 text-white rounded-2xl" onClick={()=>dispatch({type:"decrement"})}>-</button>
                                <p className="w-4 text-center">{
                                quantity
                                }</p>
                                <button className="bg-gray border py-2 px-4 text-white rounded-2xl" onClick={()=>dispatch({type:"increment"})}>+</button>
                            </div>
            </div>
        </>
    )

}