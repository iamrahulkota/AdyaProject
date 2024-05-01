import React from 'react'
import { useNavigate } from 'react-router-dom'

function Signin() {

  const navigate = useNavigate();

  function onHandleLogin(){
    navigate('/login');
  }

  return (
    <>
        <div className='w-screen  bg-white'>
        <div className='mx-[16%]  my-20 flex flex-col md:flex md:flex-row'>
          
            <div className='w-full md:w-2/4'>
              <div>
                <h1 className='text-black mb-2 pt-10 text-4xl font-semibold font-Poppins'>Login into your account</h1>
                <p className='text-sm text-[#a5a5a5] font-Roboto'>Do u have already an account? <button className='text-black text-lg font-semibold' onClick={onHandleLogin}>Login</button></p>
                <div className='w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2'></div>
              </div>
              <div className='my-10 flex flex-col'>
                <label className='text-xl font-semibold font-Poppins text-black my-3'>Name :</label>
                <input type='text' placeholder='Enter your Name' className='text-lg border text-semibold font-Roboto text-black w-full md:w-4/5 h-12 px-10'></input>
                <label className='text-xl font-semibold font-Poppins text-black my-3'>Email :</label>
                <input type='text' placeholder='Enter your Email' className='text-lg border text-semibold font-Roboto text-black w-full md:w-4/5 h-12 px-10'></input>
                <label className='text-xl font-semibold font-Poppins text-black my-3'>Password :</label>
                <input type='password' placeholder='Enter your Password' className='text-lg border text-semibold font-Roboto text-black w-full md:w-4/5 h-12 px-10'></input>
                <label className='text-xl font-semibold font-Poppins text-black my-3'>Confirm Password :</label>
                <input type='password' placeholder='Enter your Password' className='text-lg border text-semibold font-Roboto text-black w-full md:w-4/5 h-12 px-10'></input>
                <button className='bg-black font-semibold font-Poppins text-white py-3 px-20 my-20 w-full md:w-4/12'>Sign in</button>
              </div>
            </div>


            <div className='md:w-2/4 hidden md:block'>
                <img src='https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?t=st=1714521520~exp=1714525120~hmac=7c461e107d6aa808e3729e819b3f65cc45aada5a0fdd63a1adf73a6c51f0ab60&w=740' />
            </div>

        </div>
      </div>
    </>
  )
}

export default Signin