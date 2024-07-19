import React, { useState } from 'react'
import img1 from '../img/rasim1.jpg'
import img2 from '../img/rasim2.jpg'
import img3 from '../img/rasim3.jpg'
import img4 from '../img/rasim4.jpg'
import img5 from '../img/rasim5.jpg'
import img6 from '../img/rasim1.jpg'
import img7 from '../img/rasim2.jpg'
import img8 from '../img/rasim3.jpg'
import img9 from '../img/rasim4.jpg'
import img0 from '../img/rasim5.jpg'
function Masala4() {
    let [rasmlar,setRasim]=useState(img3)
    function rendom (){
        let raqam =Math.floor(Math.random()*10)
        let img =`${raqam}`
        console.log(img)
        setRasim(img)
    }
    console.log(rasmlar)
  return (
    <div>
        <div className='div-12'>
    <div className='div-13'>
    <img src={img1} alt="rasm" />
    <img src={img2} alt="rasm" />
    <img src={img3} alt="rasm" />
    <img src={img4} alt="rasm" />
    <img src={img5} alt="rasm" />
    <img src={img6} alt="rasm" />
    <img src={img7} alt="rasm" />
    <img src={img8} alt="rasm" />        
    <img src={img9} alt="rasm" />

        <img className='img-1' src={img1} alt="" />
    </div>

    <button onClick={rendom} className="btn btn-wide">Wide</button>
</div>
</div>
  )
}

export default Masala4