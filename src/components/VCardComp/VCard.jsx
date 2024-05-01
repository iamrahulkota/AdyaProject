import React from 'react'
import {useNavigate } from "react-router-dom";

function VCard({houseImg,houseTitle,housepara,housePrice,houseid}) {
    const navigate = useNavigate();

    function onClickHandle(id){
        console.log(id);
        navigate(`housingdesc?id=${id}`);
    }
  return (
    <>
        <div className='md:w-[350px] bg-white border'>
            <div className=''>
                <img src={houseImg} className='w-[350px] h-[250px]' />
            </div>
            <div className='text-black py-6 px-3'>
                <h1 className='text-xl font-bold font-Roboto'>{houseTitle}</h1>
                <p className='text-xs font-Poppins text-[#a5a5a5] font-semibold'>{housepara}</p>
                <div className='flex justify-between mt-9'>
                    <p className='text-2xl font-bold font-Poppins text-black'>{housePrice}</p>
                    <button className=" font-Roboto bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white hover:border hover:text-black" onClick={()=>onClickHandle(houseid)}>Book Now</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default VCard