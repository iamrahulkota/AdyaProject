import React from 'react'
import NewDelhi from '../../../assets/Images/NewDelhi.png'
import Mumbai from '../../../assets/Images/Mumbai.png'
import Hyderabad from '../../../assets/Images/HYD.png'
import Gurugram from '../../../assets/Images/Gurugram.png'
import Bengaluru from '../../../assets/Images/BLR.png'
import Kolkata from '../../../assets/Images/Kolkata.png'

function Places() {
  return (
    <>
        <div className='w-screen bg-slate-100 text-black'>
{/* Places Texting Starts Here */}
            <div className='mx-[16%]'>
                <h1 className=' pt-10 text-4xl font-semibold font-Poppins'>Trending destinations</h1>
                <p className='text-sm text-[#a5a5a5] font-Roboto'>Most popular choices for travellers from India</p>
                <div className='w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2'></div>
            </div>
{/* Places Texting Ends Here */}
            
{/* Places Cards Starts Here */}
            <div className='w-3/4 mx-auto font-Roboto justify-evenly flex flex-wrap py-24 '>
                <div className='text-center'>
                    <img src={NewDelhi} alt="tech logo"  width="130px"/>
                    <p className="place-name">NewDehil</p>
                </div>
                <div className='text-center'>
                    <img src={Mumbai} alt="tech logo"  width="130px"/>
                    <p className="place-name">Mumbai</p>
                </div>
                <div className='text-center'>
                    <img src={Hyderabad} alt="tech logo"  width="130px"/>
                    <p className="place-name">Hyderabad</p>
                </div>
                <div className='text-center'>
                    <img src={Kolkata} alt="tech logo"  width="130px"/>
                    <p className="place-name">Kolkata</p>
                </div>
                <div className='text-center'>
                    <img src={Gurugram} alt="tech logo"  width="130px"/>
                    <p className="place-name">Gurugram</p>
                </div>
                <div className='text-center'>
                    <img src={Bengaluru} alt="tech logo"  width="130px"/>
                    <p className="place-name">Bengaluru</p>
                </div>
            </div>
{/* Places Cards Ends Here */}
        </div>
    </>
  )
}

export default Places