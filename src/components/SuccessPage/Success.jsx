import React from 'react'


function Success() {
  return (
    <>
        <div className='w-screen h-screen'>
            <div className='mx-[5%] md:mx-[16%] h-screen flex items-center justify-center'>
                <div className='md:w-2/6 py-40 text-black bg-white shadow-lg text-center mx-auto'>
                    <i className="fa-solid fa-check text-5xl mb-4"></i>
                    <h1 className="text-xl font-semibold font-Poppins mb-2">Your Booking Payment is Successful</h1>
                    <p className="font-Roboto text-base mb-8">Thanks you for your payment. An anutomated payment receipt will be sent to your registered email. </p>
                    <p className="font-Roboto text-[10px]">Order ID: IC-1243-AZXI-108053 | Transaction ID : 8164844548487561545</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Success