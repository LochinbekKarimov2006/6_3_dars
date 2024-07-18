import React from 'react'
import { Link } from 'react-router-dom'

function Compon() {
  return (
    <div className='div-3'>
        <Link to='/mashiq1'>
        <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title"> 1. Raqamlar Hisoblagichi (Counter)</h2>
    <p>Raqamlar hisoblagichi yaratish kerak. Bu hisoblagichda `Increment` va `Decrement` tugmalari bo'lishi kerak. Har bir tugma bosilganda raqamni oshiradi yoki kamaytiradi.
</p>
    <div className="card-actions justify-end">
    </div>
  </div>
        </div>
        </Link>
        <Link to='/mashiq2'>
        <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">  2. Yorliqlarni Tanlash (Tab Selector)</h2>
    <p>Yorliqlarni (tabs) tanlash uchun komponent yaratish. Har bir yorliq bosilganda mos tarkibni ko'rsatish kerak.</p>
    <div className="card-actions justify-end">
    </div>
  </div>
        </div>
        </Link>
        <Link to='/mashiq3'>
        <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title"> 3. Ijtimoiy Media Post (Social Media Post)
</h2>
    <p>Ijtimoiy media posti uchun komponent yaratish. Postda `Like` va `Dislike` tugmalari bo'lishi kerak. Har bir tugma bosilganda like yoki dislike sonini oshirish yoki kamaytirish kerak.
</p>
    <div className="card-actions justify-end">
    </div>
  </div>
        </div>
        </Link>
        <Link to='/mashiq4'>
        <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title"> 4. O'yin Nomi Tanlovchi (Game Name Picker)</h2>
    <p>Bir nechta o'yin nomlari ro'yxatidan tasodifiy o'yin nomini tanlaydigan komponent yaratish. `Pick Game` tugmasi bosilganda yangi o'yin nomi tanlanishi kerak.</p>
    <div className="card-actions justify-end">
    </div>
  </div>
        </div>
        </Link>
        <Link to='/mashiq5'>
        <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">5. Progress Bar (Progress Bar)</h2>
    <p>Progress bar yaratish. `Increase` va `Decrease` tugmalari orqali progressni oshirish yoki kamaytirish kerak.</p>
    <div className="card-actions justify-end">
    </div>
  </div>
        </div>
        </Link>
        <Link to='/mashiq6'>
        <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
    <h2 className="card-title"> 6. Rasm Galereyasi (Image Gallery)</h2>
    <p>Bir nechta rasmlardan iborat galereya yaratish. Har bir rasm ustiga bosilganda katta ko'rinishda rasmni ko'rsatish kerak.</p>
    <div className="card-actions justify-end">
    </div>
  </div>
        </div>
        </Link>
    </div>
  )
}

export default Compon