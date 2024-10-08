import Link from "next/link";
import Image from "next/image";
import lacostelogo from "../../public/assets/lacoste-logo.svg";
import pumalogo from "../../public/assets/puma-logo.svg";
import edenparklogo from "../../public/assets/edenpark-logo.svg";
import lakerslogo from "../../public/assets/lakers-logo.svg";
import bullslogo from "../../public/assets/bulls-logo.svg";
import nbalogo from "../../public/assets/nba-logo.svg";
export default  function Brands(){
    const Brands = [
        {
           svg : <svg aria-hidden="true" className="swoosh-svg" focusable="false" viewBox="0 0 24 24" role="img" width={"100px"} height={"100px"}  fill="none"><path fill="currentColor" fillRule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"clipRule="evenodd"></path></svg>,
           href : "/nike"
        },
        {
           svg:<svg viewBox="100 100 50 32" xmlns="http://www.w3.org/2000/svg" width={"100px"} height={"100px"} className=""><path fillRule="evenodd"clipRule="evenodd" d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z" fill="white"></path></svg>,
           href : "/adidas" 
  
        },
        {
         svg:pumalogo ,
         href:"/puma"
      },
       
        {
           svg:<svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 42 24"> <g fill="#FFF"><path d="M26.971 11.948c-.151.111-.331.24-.549.394-1.395.988-3.42 1.665-6.052 1.665h-.175c-2.63 0-4.657-.677-6.052-1.665-.216-.154-.396-.283-.548-.394.152-.114.332-.243.548-.396 1.395-.987 3.421-1.665 6.052-1.665h.175c2.633 0 4.659.678 6.052 1.665.218.153.398.282.55.396m13.6-8.147s-1.198-.915-4.987-2.307C32.258.274 29.75 0 29.75 0l.01 7.174c0 1.01-.275 1.932-1.046 2.983-2.826-1.03-5.5-1.664-8.42-1.664s-5.592.633-8.419 1.664c-.772-1.046-1.046-1.974-1.046-2.983L10.84 0S8.314.27 4.985 1.494C1.198 2.89 0 3.801 0 3.801c.157 3.256 3.008 6.15 7.498 8.147C3.004 13.942.153 16.83 0 20.094c0 0 1.198.914 4.985 2.307 3.327 1.22 5.838 1.494 5.838 1.494l-.012-7.175c0-1.01.277-1.932 1.046-2.982 2.827 1.03 5.498 1.662 8.419 1.662 2.92 0 5.593-.633 8.42-1.662.772 1.047 1.046 1.973 1.046 2.982l-.01 7.175s2.509-.272 5.836-1.494c3.789-1.395 4.987-2.307 4.987-2.307-.157-3.257-3.008-6.152-7.498-8.146C37.55 9.95 40.4 7.065 40.555 3.8M41.908 19.226c0 .17-.102.325-.26.39-.157.067-.339.031-.46-.09-.121-.12-.158-.302-.092-.46.065-.157.219-.26.39-.26.111 0 .219.043.298.122.08.079.124.186.124.298m.089 0c0-.207-.124-.394-.315-.473-.19-.08-.41-.037-.557.11-.146.145-.19.365-.112.556.08.191.266.316.473.316.281 0 .51-.228.51-.51"/><path d="M41.589 19.473h.092l-.148-.21c.034-.003.066-.019.088-.045.022-.027.032-.06.029-.095 0-.08-.044-.134-.157-.134h-.175v.484h.082v-.207h.044l.145.207zm-.196-.422h.077c.066 0 .094.023.094.075 0 .053-.024.079-.094.079h-.077v-.154z"/></g></svg>,
           href:"/underhurmour"
        },
        
       
        {
           svg:<svg width="100px" height="100px" fill="none" viewBox="0 0 360 100.8" data-test="icon-Logo"><path fill="currentColor" d="M224.87 42.61c41.29-16.53 67-26 135.13-42.61-37 2.44-118.83 8.06-175.23 19.07l40.1 23.54M96.47 97.38h54c10.69-16.19 21.33-24.09 33.72-32.87-9.38-3.62-18.8-7.12-28.38-10.51-34.46 15.21-53.63 35.63-59.3 43.38m10.63-58.92C59 55.67 32.23 74.35 14.16 97.38h59.62c5.81-8.08 27.93-31.4 69.5-47.61-11.46-3.88-31.38-10.1-36.14-11.31m24.71-36.24H0c132.93 24 197 54.91 300 98.58-8.81-6.58-150.77-90.2-168.13-98.58"></path></svg>,
           href:"/reebok"
        },
       
        {
           svg:<svg fill="white" viewBox="0 0 132 55" xmlns="http://www.w3.org/2000/svg" width={"100px"} height={"100px"}><path fillRule="evenodd"clipRule="evenodd" d="M105.673.035l19.557 53.338 6.77.002v.383h-21.548v-.383h6.344l-6.431-17.54H97.311v.007l.07.204c.521 1.548.78 3.17.764 4.803v6.575c0 3.382 1.494 6.81 4.347 6.81 1.675 0 3.012-.59 4.604-2.046l.227.211C105.594 54.224 103.5 55 100.36 55c-2.37 0-4.398-.57-6.03-1.693l-.309-.222c-2.148-1.624-3.542-4.278-4.142-7.89l-.096-.583-.1-.882-.01-.152-3.599 9.792h5.107v.384H80.496v-.384h5.162l3.951-10.753v-.023a34.924 34.924 0 0 1-.075-1.906v-4.693c0-5.77-4.29-9.08-11.771-9.08H70.41v26.458h6.371v.383h-24.9v-.383h6.345l-6.431-17.54H33.948l-6.371 17.346.266-.044c8.366-1.442 12.213-7.827 12.265-14.55h.388v15.171H0L30.06 2.185H17.972C7.954 2.185 3.42 9.922 3.35 17.635h-.387V1.8h36.488l-.222.385L9.396 53.373h15.695c.39 0 .778-.019 1.169-.05.26-.018.522-.044.788-.077l.095-.01L46.703 0h.387l.013.035 15.369 41.916V2.185h-6.328v-.39h21.778c10.467 0 17.774 5.372 17.774 13.068 0 5.612-5.005 10.27-12.45 11.595l-1.367.174 1.377.14c4.515.517 8.1 1.906 10.641 4.127l.017.016L105.273 0h.386l.014.035zm-8.552 35.32l.038.094h13.061l-8.773-23.928-7.221 19.67.039.037.367.364a11.876 11.876 0 0 1 2.489 3.762zM70.415 26.53V2.185h5.611c7.496 0 11.454 4.414 11.454 12.76 0 8.877-2.272 11.585-9.717 11.585h-7.348zM42.882 11.521L34.09 35.45h17.565L42.882 11.52z"></path></svg>,
           href:"/zara"
        },
        {
           svg:lakerslogo,
           href:"/lakers"
  
        },
        {
           svg:bullslogo,
           href:"/bulls"
        },
        {
           svg:nbalogo,
           href:"/nba"
        },
        {
           svg:<svg  viewBox="0 0 249 60" xmlns="http://www.w3.org/2000/svg" height={"100px"} width={"100px"}><g fill="none"  fillRule="evenodd"><path d="M.532 59.953H248.23V.52H.532v59.434z"></path><path  d="m153.005 38.708 8.33-24.22 8.134 24.22h-16.464ZM63.212 28.084H58.71V4.932h3.738c6.62 0 11.065 4.265 11.065 12.149 0 4.339-3.39 11.003-10.301 11.003ZM12.728 38.708l8.328-24.22 8.135 24.22H12.728Zm235.5-33.776V2.945H220.22v1.987h4.349v38.24L198.464 2.946h-12.147v1.987h4.334v51.272h-7.52L164.204.52l-19.541 55.685h-7.245V4.932h4.354V2.945h-11.487l-14.48 42.012-15.187-42.012H89.35v1.987h4.343v51.272h-8.622c-2.44 0-4.577-2.182-4.577-5.883v-8.086c0-6.197-2.005-11.385-8.201-13.145 5.39-1.635 9.154-6.797 9.154-12.315 0-7.856-5.853-13.83-17.168-13.83H47.278v1.987h4.337v51.273h-8.762L23.926.518 4.384 56.204H.532v1.987H11.45v-1.987H6.625l5.45-15.547h17.747l5.197 15.547H28.35v1.987h37.075v-1.986H58.71V30.072h4.502c6.573 0 9.88 2.695 9.88 9.09v4.742c0 11.263 7.409 14.287 11.447 14.287h15.871v-1.987h-4.732V10.796l17.815 47.986L130.322 9.37v46.834h-4.345v1.987h25.75v-1.987h-4.824l5.45-15.547H170.1l5.197 15.547h-6.669v1.987h28.37v-1.987h-4.364V7.766L226.553 60V4.932h10.23v51.272h-4.349v1.987h15.795v-1.987h-4.35V4.932h4.35-.001Z" fill="#181818" fillRule="nonzero"></path></g></svg>,
           href:"/armani"
        },
        {
         svg:edenparklogo ,
         href:"/edenpark"
      },
        {
         svg:lacostelogo ,
         href : "/lacoste"
      }
        
     ]
    return(
        <>
             <section className="space-y-2 brands">
                    <h2 className=" font-bold text-center text-lg md:text-2xl">SHOP BY THE WORLD CLASS BRAND</h2>
                    <div className="flex justify-center items-center -rotate-45">
                         <Image className="" src={"https://sweezy-cursors.com/wp-content/uploads/cursor/nike-air-force-1-animated/nike-air-force-1-animated-custom-cursor.gif"} width={100} height={100} alt="snerker" />
                   </div>
                    <div className="flex justify-between text-sm md:text-lg">
                        <p>Brands</p>
                        <p>Scroll for more </p>
                    </div>
                    <div className="flex items-center gap-10 overflow-x-scroll pb-6">
                        {
                            Brands.map((brand , index)=>{
                                if(brand.href==='/lacoste'||brand.href==='/puma' || brand.href==='/edenpark' || brand.href==='/lakers' || brand.href==='/bulls'|| brand.href==='/nba')
                                {
                                    return  <div className="size-fit  px-2 flex hover:bg-gray  hover:transition-all hover:duration-300" key={index}>
                                    <Link  href={brand.href}  >
                                        <Image src={brand.svg} width={100} height={100}  alt={brand.href} className="min-w-[100px] min-h-[100px] " />
                                    </Link>
                            </div>
                                }
                                
                                return(
                                
                                <div className="size-fit  px-2 hover:bg-gray hover:transition-all hover:duration-300" key={index}>
                                        <Link  href={brand.href}  >
                                            {brand.svg}
                                        </Link>
                                </div>
                                )
                            })
                        }
                    </div>
             </section>
        </>
    )
}