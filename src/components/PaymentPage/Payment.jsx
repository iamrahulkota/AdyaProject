import React from 'react'
import { useNavigate } from 'react-router-dom'

function Payment() {
    const navi = useNavigate();
    function onHandlePayNow(){
        navi('/success')
    }
  return (
    <>
        <div className='w-screen bg-white'>
            <div className='mx-[16%] my-5 flex flex-col'>
                <div className='w-[100%]'>
                    <h1 className='text-black mb-2 pt-10 text-4xl font-semibold font-Poppins'>Payment</h1>
                    <p className='text-sm text-[#a5a5a5] font-Roboto'>Complete your Adya Housing booking by making a payment</p>
                    <div className='w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2'></div>
                </div>

                <div className='w-full md:flex md:flex-row'>
                    <div className='w-full md:w-2/4 px-16 py-20 hidden md:block'>
                        <img src='https://img.freepik.com/free-vector/e-wallet-concept-illustration_114360-7561.jpg?t=st=1714548106~exp=1714551706~hmac=84eb6ad9483756f5dfef9fe38832dfb5b4dbc65f8e947c1958d8752ebf6818b6&w=740'></img>
                    </div>

                    <div className='md:px-16 md:py-20 md:w-2/4 font-Roboto '>
                        <h1 className='text-black mb-2 text-4xl font-semibold '>Payment Method</h1>
                        <p className='text-sm text-[#a5a5a5] mb-6'>Please choose a payment Method</p>
                        <div className='w-100 px-8 py-4 mb-4 border rounded-sm'>Phonepay / Googlepay / Payment</div>
                        <div className='w-100 px-8 py-4 mb-4 border rounded-sm'>Net Banking</div>
                        <div className='w-100 px-8 py-4 mb-4 border rounded-sm'>UPI</div>
                        <div className='w-100 px-8 py-4 mb-4 border rounded-sm'>PayPal</div>
                        <div className='w-100 px-8 py-4 mb-4 border rounded-sm'>Credit Card</div>
                        <button className='w-full px-8 py-4 mb-4 bg-[#0d6efd] rounded-lg text-white font-Poppins' onClick={onHandlePayNow}>Pay Now</button>
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Payment