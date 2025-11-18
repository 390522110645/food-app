import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenLeg } from "react-icons/gi";
 

function Card({name,image,price,type}) {

    return (
        <div className="w-[300px] h-[400px] bg-white  p-3 rounded-lg shadow-lg flex flex-col gap-4 shadow-lg hover:border-2 border-blue-300">
            <div className="w-full h-[50%] overflow-hidden ">
                {image && <img src={image} alt={name} className="w-full h-full object-cover rounded-lg hover:scale-110 transition-all duration-200"/>}
               </div>
            <div className="text-2xl font-semibold">{name}</div>
            <div className="w-full flex justify-between items-center">
                <div className="text-lg font-bold text-blue-500">{price}/-</div>
                <div className="flex justify-center items-center text-blue-500 font-semibold gap-2">{type==="veg"?<LuLeafyGreen className="text-green-500 font-semibold"/> :<GiChickenLeg className="text-green-500 font-bold"/>}<span>{type}</span></div>
            </div>

            <button className="w-full  h-10 bg-green-600 text-lg font-semibold rounded text-white hover:bg-green-300 transition-all pointer-corser duration-200">Add to Dish</button>


            
        </div>
    )
}

export default Card;