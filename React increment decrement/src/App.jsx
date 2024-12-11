import React from 'react'
import { useState , useEffect } from 'react'

const App = () => {

const [count , setcount] = useState(0)
const [decrementClicked , setdecrementClicked] = useState(false)
const [incrementClicked , setincrementClicked] = useState(false)




useEffect(() => {
  setcount(prevstate => prevstate - 10)
}, [decrementClicked])


useEffect(() =>{
  setcount(prevstate => prevstate + 10)
}, [incrementClicked])



  return (
    <div className=" flex items-center justify-center min-h-screen " >
      <div className="flex items-center justify-center gap-[15px]">
        <button className="h-[60px] w-[150px] bg-red-600 rounded-md text-white hover:bg-red-800	 active:bg-red-900"  onClick={() => setdecrementClicked(prevstate => !prevstate)} > Decrement By 10</button>
        <button className="h-[60px] w-[60px] bg-red-600 rounded-md text-white hover:bg-red-800  active:bg-red-900	" onClick={() => setcount(prevstate => prevstate - 1)} > - </button>
        <h3 className="text-3xl "  >{count}</h3>


        <button className="h-[60px] w-[60px] bg-green-700 rounded-md text-white	 hover:bg-green-900 active:bg-green-950 " onClick={() => setcount(prevstate => prevstate + 1)} >+</button>
        <button className="h-[60px] w-[150px] bg-green-700 rounded-md text-white	hover:bg-green-900 active:bg-green-950" onClick={() => setincrementClicked(prevstate => !prevstate )} >Increment By 10 </button>
      </div>





    </div>
  )
}

export default App