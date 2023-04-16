import React, { useEffect, useState, useContext } from 'react'
import {AiTwotoneExperiment} from 'react-icons/ai'
import {FaBars, FaTimes} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import './Navbar.css'



function Navbar(){
    const [click, setClick] = useState(false)
    const [button, setBotton] = useState(true)

    const handleClick = ()=> setClick(!click)
    const closeMobileMenu = ()=> setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 650) {
            setBotton(false)
        }

        else{
            setBotton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])
 
    window.addEventListener('resize',showButton) 
    return (
        <>
        <IconContext.Provider value={{color : '#fff'}}>
        <div className="navbar">
            <div className="navbar-container container"> 
                <div to= '/' className="navbar-logo" onClick={closeMobileMenu}>
                <img src='https://firebasestorage.googleapis.com/v0/b/prim-chalisa.appspot.com/o/ballet.png?alt=media&token=43ab66f5-76f5-485c-897a-10b93b609317'
                className='navbar-icon' />
                Prim Chalisa
                </div>
                <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes/> : <FaBars/>}
                </div>
                <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <div to= '/help' className="nav-links" onClick={closeMobileMenu}>
                        About Me
                        </div>
                    </li>
                    <li className='nav-item'>
                        <div to= '/' className="nav-links" onClick={closeMobileMenu}>
                        Projects
                        </div>
                    </li>
                    <li className='nav-item'>
                        <div to= '/playground' className="nav-links" onClick={closeMobileMenu}>
                        Extracurricular 
                        </div>
                    </li>
                    <li className='nav-item'>
                        <div to= '/aboutUs' className="nav-links" onClick={closeMobileMenu}>
                        Awards
                        </div>
                    </li>
                    
                    
                </ul>

            </div>
        </div>
        </IconContext.Provider>
        </>
    )
}



export default Navbar