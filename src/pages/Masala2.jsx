import React, { useState } from 'react'

function Masala2() {
    let [salom,setSalom]=useState('salom')
  return (
    <div>
         <div className='div-5'>
            <div className="flex w-full">
                <button onClick={()=>{setSalom('Salom')}} className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
                    Salom
                </button>
                <p className="divider divider-horizontal w-11">{salom}</p>
                <button onClick={()=>{setSalom('Hayir')}} className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
                    Hayir
                </button>
            </div>
        </div>
    </div>
  )
}

export default Masala2