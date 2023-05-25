import React from 'react'
import styles from '../style'

const Project2 = () => {
   return(
   <>
      <section id='project1-1' className={`flex md:flex-row flex-col py-4  `}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>
      <div className="flex flex-row items-center pt-[16px] px-4 mb-2">

        <div className='flex justify-between items-center w-full'>
          <h4 className='flex-1 font-poppins  ss:text-[32px] text-[24px] text-violet  z-[99]'>
            Personal Projects
          </h4>
        </div>
        
        
        
      </div>
      <div className="flex flex-row items-center py-[6px] px-4 mb-2">
      <div className='flex justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[64px] text-[52px] text-violet ss:leading-[100px] leading-[75px] z-[99]'>
          Build a dam
          </h1>
        </div>
      </div>
      
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black pb-4 z-[99]`}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
      <div className='ss:flex hidden'>
      

      </div>
      
    </div>
    <div className=' flex items-center  justify-center'>
        <img src='https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-preview.jpg' alt='Prim' className='w-[65%]  relative rounded-lg z-[5]'/>
        
      </div>
       
  </section>

  <section id='project1-2' className={`flex md:flex-row-reverse  flex-col pt-4 pb-8  `}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>
      <div className="flex flex-row items-center pt-[16px] px-4 mb-2">

        <div className='flex justify-between items-center w-full'>
          <h4 className='flex-1 font-poppins  ss:text-[32px] text-[24px] text-violet  z-[99]'>
            Personal Projects
          </h4>
        </div>
        
        
        
      </div>
      
      
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black pb-4 z-[99]`}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
      <div className='ss:flex hidden'>
      

      </div>
      
    </div>
    <div className=' flex items-center md:justify-start justify-center'>
        <img src='https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-preview.jpg' alt='Prim' className='w-[65%]  relative rounded-lg z-[5]'/>
        
      </div>
       
  </section>
   </>
    
   )
  
}

export default Project2