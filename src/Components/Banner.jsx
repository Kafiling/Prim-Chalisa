import React from 'react'
import styles from '../style'

const Banner = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-warp  `}>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[64px] text-[48px] text-violet ss:leading-[100px] leading-[75px] z-[99] text-center'>
            Personal Project
         </h1>   
         
    </section>
  )
}

export default Banner