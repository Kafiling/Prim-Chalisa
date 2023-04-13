import React from 'react'
import './Navbar.css'
import './App.css'
export default function Navbar(){

    return(
        <div className='Nav-container'>
        <ul className='HomeUl'>
            <li className='Nav-cursive'>Prim Chalisa</li>
        </ul>
        <ul className='SideUl'>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
        </ul>
        </div>
    )
}

