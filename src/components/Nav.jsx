import React from 'react'
import { MdOutlineFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function Nav() {


    return (
        <div className='w-full h-[100px] flex justify-between items-center px-8 '>
            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'><MdOutlineFastfood className='h-[30px] w-[30px]  text-green-400'/>
            </div>
            <form className='w-[60%] h-[60px] bg-white flex items-center gap-6 px-5 rounded-md shadow-xl'><IoSearch   className='text-green-400 h-[30px] w-[30px]'/>
                <input className='w-[100%] outline-none text-[20px]' type="text" placeholder='search items' />
            </form>
            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'><HiOutlineShoppingBag  className='h-[30px] w-[30px]  text-green-400'/>
            </div>

        </div>



    )
}

export default Nav
