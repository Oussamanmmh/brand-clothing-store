"use client"
import { createContext , useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
}

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
        setCart(cart);
        const total = cart.reduce((acc, item) => acc + item.quantity, 0);
        setTotal(total);
    }, []);

    return (
        <CartContext.Provider value={{cart, setCart, total, setTotal}}>
            {children}
        </CartContext.Provider>
    );
}