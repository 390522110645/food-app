import React from "react";  
import { MdDelete } from "react-icons/md";
import { useDispatch} from "react-redux";
import {  DecrementQty, IncrementQty, RemoveItem } from "../redux/cardSlice";
import { AiTwotoneDelete } from "react-icons/ai";

function Card2({name,image,price,qty,id}){

    let dispatch=useDispatch()
    return(
        <div className="w-full h-[120px] p-2 shadow-lg rounded-lg flex justify-between ">
            <div className="w-[60%] h-full flex gap-5">
                <div className="w-[60%] h-full overflow-hidden rounded-lg">
                    <img className="object-cover" src={image} alt="" />
                </div>
                    <div className="w-[40] h-full flex flex-col gap-3">
                    <div className="text-lg font-semibold">{name}</div>
                    <div className="w-[110px] h-[50%] flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-blue-400 text-xl">
                        <button className="w-[30%] h-full text-blue-500 flex justify-center items-center hover:bg-gray-400"onClick={()=>qty>1?dispatch(DecrementQty({id})):1}>-</button>
                        <span className="w-[40%] h-full bg-slate-300 flex justify-center items-center">{qty}</span>
                        <button className="w-[30%] h-full text-blue-500 flex justify-center items-center  hover:bg-gray-400" onClick={()=>dispatch(IncrementQty({id}))}>+</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-start items-end gap-6 ">
            <span className="text-xl text-blue-500 font-semibold">Rs {price}/-</span>
                <AiTwotoneDelete   className="w-[30%] h-[40%] text-red-600 cursor-pointer" onClick={()=>dispatch(RemoveItem(id))}/>

            </div>
        </div>
    )
}

export default Card2;