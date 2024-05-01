import React from 'react'

function Login() {
  return (
    <>
      <div className='w-screen  bg-white'>
        <div className='mx-[16%]  my-20 flex flex-col md:flex md:flex-row'>
          
            <div className='w-full md:w-2/4'>
              <div>
                <h1 className='text-black mb-2 pt-10 text-4xl font-semibold font-Poppins'>Login into your account</h1>
                <p className='text-sm text-[#a5a5a5] font-Roboto'>Don't have an account? <button className='text-black text-lg font-semibold'> Create a free account</button></p>
                <div className='w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2'></div>
              </div>
              <div className='my-20 flex flex-col'>
                <label className='text-xl font-semibold font-Poppins text-black my-5'>Email :</label>
                <input type='text' placeholder='Enter your Email' className='text-lg border text-semibold font-Roboto text-black w-full md:w-4/5 h-12 px-10'></input>
                <label className='text-xl font-semibold font-Poppins text-black my-5'>Password :</label>
                <input type='text' placeholder='Enter your Password' className='text-lg border text-semibold font-Roboto text-black w-full md:w-4/5 h-12 px-10'></input>
                <button className='bg-black font-semibold font-Poppins text-white py-3 px-20 my-20 w-full md:w-4/12'>Log in</button>
              </div>
            </div>


            <div className='md:w-2/4 hidden md:block'>
                <img src='https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5598.jpg?t=st=1714517073~exp=1714520673~hmac=6cdf14b20ec8596cf7239c0a456a11235c68761c6f7361cc5079ec646626870e&w=740'/>
            </div>

        </div>
      </div>
    </>
  )
}

export default Login