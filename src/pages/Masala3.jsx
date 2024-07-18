import React from 'react'
import { useState } from 'react'
import rasaim from "../img/hasanboy.jpg"
function Masala3() {
    let [layki,setLayki]=useState(0)  
    let [qoshish,setQoshish]=useState(true)
  return (
    <div className='div-8'>
            <div className="div-2  drop-shadow-md hover:drop-shadow-2xl">
      
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="w-full"
            src={rasaim}
            alt="Shoes" />
        </figure>
        <div className="pb-3 pt-3">
          <h1 className="n flex px-3 items-center textz"><p className="font-bold texts">Name:</p><p className=" text">Hasanboy</p></h1>
          <h1 className="n flex px-3 items-center textz"><p className="font-bold texts">Familya:</p><p className=" text">Dosmatov</p></h1>
          
          <h1 className="flex px-3 items-center textz"><p className="font-bold texts">Email:</p><p className=" text">Hasanboy@gmail.com</p></h1>
          <h1 className="flex px-3 items-center textz"><p className="font-bold texts">Nomer:</p><p className=" text">+998 91 113 75 10</p></h1>
          {qoshish&&<button onClick={()=>{setQoshish(false),setLayki(layki+1)}} className="px-3 flex">🤍{layki}</button>}
          {!qoshish&&<button onClick={()=>{setQoshish(true),setLayki(layki-1)}} className="px-3 flex">❤{layki}</button>}
        </div>
       
      </div>
                  </div>
    </div>
  )
}

export default Masala3