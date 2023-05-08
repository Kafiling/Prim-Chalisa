import React from 'react'

const Card = ({title,content,img}) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] glassBg max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 ">
    <div className='flex flex-col items-center '>

    <h4 className="font-poppins font-semibold text-[18px] leading-[32.4px] text-black my-10">
      {title}
    </h4>
    <img src={img} className="w-[160px] h-[160px] rounded-full" />

    </div>
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-black my-10">
      {content}
    </p>

    
  </div>
  )
}

export default Card