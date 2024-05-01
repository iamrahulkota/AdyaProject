import React from 'react'
import { useSelector } from 'react-redux'


function Hero() {

  const user = useSelector(state=>state.user)

  console.log("Hlo", user);

  return (
    <>
        <div className='w-screen '>
            <div className='mx-[16%] my-[5%] flex felx-col md:flex-row'>
              <div className='w-full md:w-2/4'>
                <h1 className='text-4xl font-Roboto font-bold text-black '>Welcome <span className='text-[#8d0ada]'>{user.user}</span></h1>
                <div className='w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2'></div>
                  <h1 className='text-8xl font-Roboto mt-20 font-bold text-black'>Find your next stay</h1>
                  <p className='text-sm font-Roboto mt-2'>Homes for rent that fit your timeline, Search low prices on Housing, Rooms and much more...</p>
                  <button className='font-Roboto bg-black px-8 py-3 text-sm font-semibold text-white hover:bg-white hover:border-2 hover:border-black hover:text-black'>View Now</button>
              </div>
                <div className='w-full md:w-2/4 flex flex-wrap'>
                      <div className=''>
                        <img src="https://images.pexels.com/photos/5793641/pexels-photo-5793641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='h-[300px] '/>
                      </div>
                      <div className='hidden md:block'>
                        <img src="https://images.pexels.com/photos/15493331/pexels-photo-15493331/free-photo-of-modern-minimalist-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='h-[300px] '/>
                      </div>
                      <div className='hidden md:block'>
                        <img src="https://images.pexels.com/photos/19672569/pexels-photo-19672569/free-photo-of-bed-in-luxury-bedroom.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='h-[300px] '/>
                      </div>
                      <div className=''>
                        <img src="https://images.pexels.com/photos/22696774/pexels-photo-22696774/free-photo-of-san-marino.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-[300px] '/>
                      </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero