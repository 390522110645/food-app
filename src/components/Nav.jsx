import React from 'react'
import { MdOutlineFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function Nav() {


    return (
        <div className='w-full h-[100px] flex justify-between items-center px-5  md:px-8'>
            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl hover:bg-blue-200'><MdOutlineFastfood className='h-[30px] w-[30px]  text-blue-400 '/>
            </div>
            <form className='w-[45%] h-[60px] bg-white flex items-center gap-6 px-5 rounded-md shadow-xl md:w-[70%]'><IoSearch   className='text-blue-600 h-[30px] w-[30px]'/>
                <input className='w-[100%] outline-none text-[16px] md:text-[20px]' type="text" placeholder='search items' />
            </form>
            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl hover:bg-blue-200'><HiOutlineShoppingBag  className='h-[30px] w-[30px]  text-blue-400'/><span className='text-blue-500  font-bold '>0</span>
            </div>

        </div>



    )
}

export default Nav
