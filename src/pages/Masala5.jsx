import React, { useState } from 'react'

function Masala5() {
    let [uzunlik,setUzunlik]=useState(1)
    let   width={
        width:`${uzunlik}%`,
    }
    let toldi=''
    if(uzunlik==101){
        setUzunlik(100)
      toldi='Toldi ++'
    }
    if(uzunlik==-0){
        setUzunlik(1)
        toldi="Tugadi --"

    }

  return (
    <div className='div-9'>
        <h1 className='mb-4'>{toldi}</h1>
        <div className='div-10'>
            <div className='w-56 bg-orange-900 h-5'><p className=' bg-orange-500 h-5' style={width}> </p></div>
        </div>
        <div className='div-11'>
        <button onClick={()=>{setUzunlik(uzunlik-1)}} className="btn btn-outline">Default --</button>
        <button onClick={()=>{setUzunlik(uzunlik+1)}} className="btn btn-outline">Default ++</button>

        </div>
    </div>
  )
}

export default Masala5