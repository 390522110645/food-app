import React from "react";  
import image1 from "../assets/image1.avif";
import { MdDelete } from "react-icons/md";
function Card2(){
    return(
        <div className="w-full h-[120px] p-2 shadow-lg rounded-lg flex justify-between ">
            <div className="w-[60%] h-full flex gap-5">
                <div className="w-[60%] h-full overflow-hidden rounded-lg">
                    <img className="object-cover" src={image1} alt="" />
                </div>
                    <div className="w-[40] h-full flex flex-col gap-5">
                    <div className="text-lg font-semibold">pancake</div>
                    <div className="w-[110px] h-[50%] flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-blue-400 text-xl">
                        <button className="w-[30%] h-full text-blue-500 flex justify-center items-center hover:bg-gray-400">-</button>
                        <span className="w-[40%] h-full bg-slate-300 flex justify-center items-center">1</span>
                        <button className="w-[30%] h-full text-blue-500 flex justify-center items-center  hover:bg-gray-400">+</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-start items-end gap-6 ">
                <span className="text-xl text-blue-500 font-semibold">Rs 499/-</span>
                <MdDelete  className="w-[30%] h-[30%] text-red-600"/>

            </div>
        </div>
    )
}

export default Card2;