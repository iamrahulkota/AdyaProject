import React from 'react'

function HCard({houseImg,houseTitle,housepara}) {
  return (
    <>
        <div className='w-[250px]'>
            <div className=''>
                <img src={houseImg} className='w-[250px] h-[350px] rounded-xl ' />
            </div>
            <div className='text-white'>
                <h1 className='text-lg font-bold font-Roboto mt-2'>{houseTitle}</h1>
                <p className='text-xs font-Poppins text-[#a5a5a5] font-semibold'>{housepara}</p>
                
            </div>
        </div>
    </>
  )
}

export default HCard

