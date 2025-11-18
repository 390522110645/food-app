import React from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'
import Card from '../components/Card'
import { food_items } from '../food'


function Home() {
  

  return (
    <div className='bg-slate-200 w-full min-h-screen'>
    <Nav/>
    <div className='flex flex-wrap justify-center items-center gap-5 flex-wrap mt-10 w-full '>
      {Categories.map((item)=>{
      return <div className='w-[140px] h-[150px] bg-white flex flex-col items-center justify-center gap-3 rounded-lg shadow-xl hover:bg-blue-100 cursor-pointer duration-200'> 
        {item.icon}
        {item.name}
      </div>
    })}</div>

    <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
    
     {food_items.map((item)=>(
      <Card  id={item.id} name={item.food_name} image={item.food_image} price={item.price} type={item.food_type}/>
     
    ))}
    </div>
   


    </div>

  )
}

export default Home
