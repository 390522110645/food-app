import React, {useContext, useEffect } from 'react'
import { MdOutlineFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import UserContext, { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { Input } from 'postcss';

function Nav() {

    let {input,setInput,setSearch,showCart,setShowCart}=useContext(dataContext)
    useEffect(()=>{
       let newList= food_items.filter((item)=>item.food_name.includes(input)|| item.food_name.toLowerCase().includes(input))
        setSearch(newList)
    },[input,setSearch]);
    return (
        <div className='w-full h-[100px] flex justify-between items-center px-5  md:px-8'>
            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl hover:bg-blue-200'><MdOutlineFastfood className='h-[30px] w-[30px]  text-blue-400 '/>
            </div>
            <form className='w-[45%] h-[60px] bg-white flex items-center gap-6 px-5 rounded-md shadow-xl md:w-[70%]' onSubmit={(e)=>e.preventDefault()}><IoSearch   className='text-blue-600 h-[30px] w-[30px]'/>
                <input className='w-[100%] outline-none text-[16px] md:text-[20px]' type="text" placeholder='search items' onChange={(e)=>setInput(e.target.value)} value={input}/>
            </form>
            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl hover:bg-blue-200 cursor-pointer' onClick={()=>{setShowCart(true)}}><HiOutlineShoppingBag  className='h-[30px] w-[30px]  text-blue-400'/><span className='text-blue-500  font-bold '>0</span>
            </div>

        </div>



    )
}

export default Nav
