import React from 'react'
import VCard from '../../VCardComp/VCard'

function Mountain() {
  return (
    <>
        <div className='w-screen bg-white text-black'>
{/* Places Mountain Starts Here */}
            <div className='mx-[16%]'>
                <h1 className=' pt-10 text-4xl font-semibold font-Poppins'>Stay at our Majestic Mountains</h1>
                <p className='text-sm text-[#a5a5a5] font-Roboto'>Adventure awaits at every altitude.</p>
                <div className='w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2'></div>
            </div>
{/* Places Mountain Ends Here */}


{/* Mountains Cards Starts Here */}
<div className='w-3/4 mx-auto justify-evenly flex flex-wrap py-28 '>
        <div className='mx-2 mb-8'>
          <VCard houseImg="https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" houseTitle="Aspen, Co" housepara="5 Bedrooms/9Bathrooms/13,31 Sq Ft/2.18 Acre(s)" housePrice="2,25,000/-" houseid="1"/>
        </div>
        <div className='mx-2 mb-8'>
            <VCard houseImg="https://images.pexels.com/photos/14951474/pexels-photo-14951474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" houseTitle="Leman Locke" housepara="3 Bedrooms/5 Bathrooms/13,31 Sq Ft/374.03 Acre(s)" housePrice="1,72,000/-" houseid="2"/>
        </div>
        <div className='mx-2 mb-8'>
            <VCard houseImg="https://images.pexels.com/photos/2031689/pexels-photo-2031689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" houseTitle="unObtructed Views" housepara="6 Bedrooms/8 Bathrooms/8,963 Sq Ft/4.47 Acre(s)" housePrice="3,18,050/-" houseid="3"/>
        </div>
        <div className='mx-2 mb-8'>
            <VCard houseImg="https://images.pexels.com/photos/9956964/pexels-photo-9956964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" houseTitle="Popcorn Lane" housepara="2 Bedrooms/1 Bathrooms/2,3 Sq Ft/1 Acre(s)" housePrice="91,520/-" houseid="4"/>
        </div>
        <div className='mx-2 mb-8'>
            <VCard houseImg="https://images.pexels.com/photos/259817/pexels-photo-259817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" houseTitle="Left Fork" housepara="5 Bedrooms/9Bathrooms/13,31 Sq Ft/2.18 Acre(s)" housePrice="2,25,000/-" houseid="5"/>
        </div>
        <div className='mx-2 mb-8'>
            <VCard houseImg="https://images.pexels.com/photos/259772/pexels-photo-259772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" houseTitle="Red Tail Court" housepara="11 Bedrooms/9 Bathrooms/10,688 Sq Ft/1.83 Acre(s)" housePrice="6,55,870/-" houseid="6"/>
        </div>
      </div>
{/* Mountains Cards Ends Here */}

        </div>
    </>
  )
}

export default Mountain


