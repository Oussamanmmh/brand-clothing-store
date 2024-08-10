"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"


{/*side bar */}
export default function SideBar({isopen ,setIsopen}){
    
    const links = [
        {nom :"All Products" , href:"/"},
        {nom : "Men" , href:"/men"},
        {nom :"Women" , href:"/women"},
        {nom :"Kids" , href:"/kids"},
        
    ]
    const handleClick=()=>{
       setIsopen(false)

    }
    return(
        <>
           <div className={`${isopen ? "translate-x-0" : "translate-x-full"} h-full  bg-white px-5 fixed top-0 right-0 w-1/2 flex z-50 flex-col gap-20 transition-all ease-in-out duration-300 sidebar  py-5 justify-between`}>
                <div className="flex justify-end">
                        <button className="rounded-full w-fit p-2 hover:bg-gray hover:transition-all hover:ease-in-out hover:duration-500 " onClick={()=>handleClick()}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>

                        </button>
                </div>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-center font-bold text-2xl font-josefin">Welcome to AISHA <span className="font-thin">SHOP</span></h1>
                        <svg aria-hidden="true" className="swoosh-svg size-20" focusable="false" viewBox="0 0 24 24" role="img" width={"100px"} height={"100px"}  fill="none" ><path fill="currentColor" fillRule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"clipRule="evenodd"></path></svg>
                    </div>
                <ul className="flex flex-col gap-10 justify-center md:hidden  text-black  ">
                        {links.map((link , index)=>{
                            return(
                                <li key={index}>
                                    <Link href={link.href}>{link.nom}</Link>
                                </li>
                            )
                        })}
                    </ul>
                
                <Image src="https://sweezy-cursors.com/wp-content/uploads/cursor/auto-draft/nike-air-max-97-platinum-navy-custom-cursor.png" alt="side bar" width={300} height={300} className="object-cover"/>
                
           </div>
        </>
    )
}