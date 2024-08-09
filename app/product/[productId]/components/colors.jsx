import { useState } from "react";
export default function Colors({ colors , setColor }) {
    const [selectedColor, setSelectedColor] = useState(null);
    return (
        <>
          {
            colors && (
                <div>
        <h1 className="font-semibold text-xl">Available colors</h1>
        <div className="flex gap-2">
            {colors.map((color, index) => (
                <button
                    key={index}
                    className={`w-8 h-8 rounded-full  ${selectedColor===color ? "border-2 " : ""}`}
                    style={{ backgroundColor: color }}
                    onClick={() =>{
                         setColor(color)
                         setSelectedColor(color)}}
                ></button>
            ))}
        </div>
    </div>
            )
        }
       
        </>
    );
}