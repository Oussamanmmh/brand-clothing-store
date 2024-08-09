import { urlFor } from "@/app/urlfor";
import { useState } from "react";

export default function ProductImage({ images }) {
    const [selectedImage, setSelectedImage] = useState(0);
    return (
        <>
            {images && (
                <div className="flex flex-col md:flex-row gap-2 items-center md:w-2/3 h-full w-full   pb-2">
                    <div className="md:h-2/3 md:w-2/3 w-80 h-80  rounded-2xl">
                        <img src={urlFor(images[selectedImage]).url()} alt={"product images"} className="w-full h-full object-cover rounded-2xl" />
                    </div>
                    <div className="flex flex-row md:flex-col gap-2 w-full h-1/3 md:w-1/3 md:h-full  items-center justify-center">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="md:h-1/4 md:w-4/5 w-1/4 h-28 bg-white rounded-2xl hover:cursor-pointer"
                                onClick={() => setSelectedImage(index)}
                            >
                                <img
                                    
                                    height={100}
                                    width={100}

                                    src={urlFor(image).url()}
                                    alt="product image"
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );}


    


   