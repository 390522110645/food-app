import React, { useContext } from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'
import Card from '../components/Card'
import Cart from '../components/Card'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'



function Home() {
  let { search, setSearch, input, showCart, setShowCart } = useContext(dataContext)

  function filters(Categories) {
    if (Categories === "All") {
      setSearch(food_items)
    } else {
      let newList = food_items.filter((item) => (item.food_category === Categories))
      setSearch(newList)
    }
  }

  let items = useSelector(state => state.cart);

  let subtotal=items.reduce((total,item)=>total+item.qty*item.price,0);
  let deliveryCharges=20;
  let taxtes= Math.floor(subtotal*1/100);
  let AllTotal=Math.floor(subtotal + deliveryCharges + taxtes);

  return (
    <div className='bg-slate-200 w-full min-h-screen'>
      <Nav />
      {!input ? <div className='flex flex-wrap justify-center items-center gap-5  mt-10 w-full ' >
        {Categories.map((item)=> {
          return <div key={item.id} className='w-[140px] h-[150px] bg-white flex flex-col items-center justify-center gap-3 rounded-lg shadow-xl hover:bg-blue-100 cursor-pointer duration-200'
            onClick={() => filters(item.name)}>
            {item.icon}
            {item.name}
          </div>
        })}
      </div> :null}


      <div className='w-full flex flex-wrap  gap-4 px-5 justify-center items-center pt-8 pb-8'>
      {search.length>1? search.map((item) => (
          <div key={item.id}> <Card id={item.id} name={item.food_name} image={item.food_image} price={item.price} type={item.food_type} />
          </div>
        )):<div className='text-[50px] mt-46 flex justify-center t text-center text-bold text-black'>
      NO Result Found
      </div>}
        
      </div>

      <div className={` w-[100%] md:w-[40%] h-[100%]   fixed top-0 right-0 p-5 bg-white shadow-xl tarnsition-all duration-500 overflow-auto ${showCart ? "translate-x-0" : "translate-x-full"}`}>


        <header className='w-[100%] flex  justify-between items-center'>
          <span className='text-blue-500 text-[18px]  font-semibold'>Order Items </span>
          <RxCross2 className='text-blue-600 h-[20px] text-[20px] font-bold cursor-pointer hover:text-gray-600' onClick={() => { setShowCart(false) }} />
        </header>


        {items.length>0?<>

        <div className='w-full mt-9 flex flex-col  gap-8 '>
          {items.map((item) => (
            <div key={item.id}> <Card2 id={item.id} name={item.name} price={item.price} image={item.image} qty={item.qty} />
            </div>))}
        </div>

        <div className='w-full border-t-2 border-b-2 border-gray-600 mt-6 flex flex-col gap-2 p-8'>

            <div className='w-full  flex justify-between items-center  font-bold'>
              <span className='' >Subtotal</span>
              <span className='text-blue-500 font-bold'>Rs {subtotal} /-</span>
            </div>
            <div className='w-full  flex justify-between items-center  font-bold'>
              <span className='' >Delivary Charges</span>
              <span className='text-blue-500 font-bold'>Rs {deliveryCharges} /-</span>
            </div>
            <div className='w-full  flex justify-between items-center  font-bold'>
              <span className='' >Taxes</span>
              <span className='text-blue-500 font-bold'>Rs {taxtes} /-</span>
            </div>
       
       <div className='border-t-2 border-gray-600'></div>
           <div className='w-full  flex justify-between items-center  font-bold'>
              <span className='' >Total</span>
              <span className='text-blue-500 font-bold'>Rs {AllTotal} /-</span>
             </div>
        </div>
            <div className='w-full pt-3 flex flex-col items-center'>
               <button className="w-[75%]  h-10 bg-green-600 text-lg font-semibold rounded text-white hover:bg-green-400 transition-all pointer-corser duration-200"onClick={()=>
     { toast.success("order placed...") }
     } >Place Order</button>
            </div>
     </> :
     <div className='text-[50px] mt-56 flex justify-center t text-center text-bold text-blue-600'>
      Empty Cart
      </div>}
    
      </div>

    </div>

  )
}

export default Home;
