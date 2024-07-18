import React, { useState } from 'react';

function Masala1() {
    const [raqam, setRaqam] = useState(0);
    console.log(raqam);
    
    const increment = () => setRaqam(raqam + 1);
    const decrement = () => setRaqam(raqam - 1);

    return (
        <div className='div-5'>
            <div className="flex w-full">
                <button onClick={increment} className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
                    Raqam qo'shish ++
                </button>
                <p className="divider divider-horizontal w-11">{raqam}</p>
                <button onClick={decrement} className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
                    Raqam ayirish --
                </button>
            </div>
        </div>
    );
}

export default Masala1;
