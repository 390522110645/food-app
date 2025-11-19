import React, { useContext } from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'
import Card from '../components/Card'
import Cart from '../components/Card'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2'


function Home() {
  let { search, setSearch, input,showCart,setShowCart } = useContext(dataContext)

  function filters(Categories) {
    if (Categories === "All") {
      setSearch(food_items)
    } else {
      let newList = food_items.filter((item) => (item.food_category === Categories))
      setSearch(newList)
    }
  }


  return (
    <div className='bg-slate-200 w-full min-h-screen'>
      <Nav />
      {!input ? <div className='flex flex-wrap justify-center items-center gap-5  mt-10 w-full ' >
        {Categories.map((item) => {
      return <div key={item.id} className='w-[140px] h-[150px] bg-white flex flex-col items-center justify-center gap-3 rounded-lg shadow-xl hover:bg-blue-100 cursor-pointer duration-200'
            onClick={() => filters(item.name)}>
            {item.icon}
            {item.name}
          </div>
        })}
        </div> : null}


      <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>

        {search.map((item) => (
           <Card key={item.id}  name={item.food_name} image={item.food_image} price={item.price} type={item.food_type} />
          
        ))}
      </div>

      <div className={` w-[100%] md:w-[40%] h-[100%] fixed top-0 right-0 p-5 bg-white shadow-xl tarnsition-all duration-500 ${showCart?"translate-x-0":"translate-x-full"}`}>
          <header className='w-[100%] flex  justify-between items-center'>
            <span className='text-blue-500 text-[18px]  font-semibold'>Order Items </span>
            <RxCross2 className='text-blue-600 h-[20px] text-[20px] font-bold cursor-pointer hover:text-gray-600' onClick={()=>{setShowCart(false)}}/>
          </header>
         
     </div>

      </div>

  )
}

export default Home;
