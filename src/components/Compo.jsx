import { useState } from "react"
import Compon from "../index.json"
function Compo() {
    let [layki,setLayki]=useState(Math.random()*100)  
    let [qoshish,setQoshish]=useState(true)  
  return (
    <div className="div-1">
    {Compon.map((data)=>{
        return (
            <div key={data.id} className="div-2  drop-shadow-md hover:drop-shadow-2xl">
      
<div className="card bg-base-100 shadow-xl">
  <figure>
    <img className="w-full"
      src={data.image}
      alt="Shoes" />
  </figure>
  <div className="pb-3 pt-3">
    <h1 className="n flex px-3 items-center textz"><p className="font-bold texts">Name:</p><p className=" text">{data.lastName}</p></h1>
    
    <h1 className="flex px-3 items-center textz"><p className="font-bold texts">Email:</p><p className=" text">{data.email}</p></h1>
    <h1 className="flex px-3 items-center textz"><p className="font-bold texts">Nomer:</p><p className=" text">{data.phone}</p></h1>
    {qoshish&&<button onClick={()=>{setQoshish(false),setLayki(layki+1)}} className="px-3 flex">🤍{layki}</button>}
    {!qoshish&&<button onClick={()=>{setQoshish(true),setLayki(layki-1)}} className="px-3 flex">❤{layki}</button>}
  </div>
</div>
            </div>
        )
    })}
    </div>
  )
}
export default Compo