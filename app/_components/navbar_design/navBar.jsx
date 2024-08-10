"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import SideBar from "./sideBar";
import Links from "./linksLg";
import BagProducts from "../bagProduct";
import { CartProvider } from "@/app/selectitemCont";
import BagButton from "./bagButton";

export default function Navbar() {
    const [isopen, setIsopen] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const [hasShadow, setHasShadow] = useState(true);

    const handleClick = () => {
        setIsopen(!isopen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 0) {
                setHasShadow(false);
            } else {
                setHasShadow(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <nav
                className={`flex items-center justify-between z-50 py-4 px-2 transition-all duration-700 ease-in-out ${
                    hasShadow ? "bg-transparent" : "bg-gray"
                }`}
            >
                <div className="font-josefin text-2xl">
                    <Link href="/">AISHASHOP</Link>
                </div>
                <Links />
                <div className="flex items-center gap-10">
                    <CartProvider>
                        <BagButton setOpenCart={setOpenCart} />
                    </CartProvider>

                    <button
                        className="block md:hidden rounded-fup-2ll hover:bg-gray"
                        onClick={handleClick}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
                <BagProducts openCart={openCart} setOpenCart={setOpenCart} />

                <SideBar isopen={isopen} setIsopen={setIsopen} />
            </nav>
        </>
    );
}