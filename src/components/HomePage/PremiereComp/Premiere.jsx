import React from 'react'
import HCard from '../../HCardComp/HCard'

function Premiere() {
  return (
    <>
{/* Perimere Housing Starts Here */}
    <div className='w-screen bg-zinc-900'>

{/* Perimere Housing Texting Starts Here */}
      <div className='mx-[16%]'>
        <h1 className='text-white pt-10 text-4xl font-semibold font-Poppins'>Premiere Houses</h1>
        <p className='text-sm text-[#a5a5a5] font-Roboto'>Peace, like charity, begins at home.</p>
        <div className='w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2'></div>
      </div>
{/* Perimere Housing Texting Ends Here */}

{/* Perimere Housing Cards Starts Here */}
      <div className='w-3/4 mx-auto justify-evenly flex flex-wrap py-28 '>
        <div className='mx-2 mb-3'>
          <HCard houseImg="https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg" houseTitle="Premier Dwellings" housepara="White Interior/Old Town" />
        </div>
        <div className='mx-2 mb-3'>
          <HCard houseImg="https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" houseTitle="TopTier" housepara="Sand Interior/Czech Republic" />
        </div>
        <div className='mx-2 mb-3'>
          <HCard houseImg="https://images.pexels.com/photos/1454805/pexels-photo-1454805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" houseTitle="Aparthotel Stare Miasto" housepara="Clay Interior/Hugary" />
        </div>
        <div className='mx-2 mb-3'>
          <HCard houseImg="https://images.pexels.com/photos/5824901/pexels-photo-5824901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" houseTitle="Rock Living" housepara="Sky Interior/Madrid" />
        </div>
      </div>
{/* Perimere Housing Cards Ends Here */}

    </div>

{/* Perimere Housing Ends Here */}

    </>
  )
}

export default Premiere