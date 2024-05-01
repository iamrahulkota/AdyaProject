import React from 'react'
import { Link, NavLink } from 'react-router-dom';
function Footer() {
  return (
    <>

{/* Main Footer Starts Here */}
    <footer className='w-screen bg-zinc-900 text-white'>
        <div className='w-4/5 mx-auto justify-between flex flex-wrap py-28'>
{/* Footer Adya Hosuing Starts Here */}
            <div className='w-full md:w-96 mt-10'>
                <h1 className='footer-title text-2xl font-bold mb-12'>ADYA Housing
                <br></br>
                <div className='w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2'></div>
                </h1>
                
                <p className='footer-para font-Roboto text-sm px-2'>Ultimate destination for finding your dream home. Whether you're looking to buy, rent, or sell, we're here to streamline your search with our comprehensive listings and expert guidance. Let us help you unlock the door to your next chapter.</p>
                <h1 className="mt-12 font-Roboto"><Link to="" className="footer-para px-2 hover:text-blue-500">Email: adyabooking@gmail.com</Link></h1>
                <Link to="/"><i className="text-xl px-2 py-1 mr-[5px] hover:bg-white hover:text-black footer-icons fa-brands fa-youtube"></i></Link>
                <Link to="https://www.instagram.com/"><i className="text-xl px-2 py-1 mr-[5px] hover:bg-white hover:text-black footer-icons fa-brands fa-instagram"></i></Link>
                <Link to="https://www.linkedin.com/"><i className="text-xl px-2 py-1 mr-[5px] hover:bg-white hover:text-black footer-icons fa-brands fa-linkedin"></i></Link>
                <Link to="https://twitter.com/"><i className="text-xl px-2 py-1 mr-[5px] hover:bg-white hover:text-black footer-icons fa-brands fa-twitter"></i></Link>
                <Link to="mailto:adyabooking@gmail.com"><i className="text-xl px-2 py-1 mr-[5px] hover:bg-white hover:text-black footer-icons fa-solid fa-envelope"></i></Link>
            </div>
{/* Footer Adya Hosuing Ends Here */}

{/* Footer Quick Links Starts Here */}
            <div className='w-32 md:w-44 lg:w-32 mt-10'>
                <h1 className='footer-title text-xl font-bold font-Poppins mb-12'>Quick Links</h1>
                <div className='font-Roboto text-sm'>
                <div className='font-Roboto text-sm flex flex-col'>
                <Link to="" className="text-white hover:text-blue-500 pb-1">Home</Link> 
                <Link to="" className="text-white hover:text-blue-500 pb-1">About</Link>
                <Link to="" className="text-white hover:text-blue-500 pb-1">Events</Link>
                <Link to="" className="text-white hover:text-blue-500 pb-1">Teams</Link>
                <Link to="success" className="text-white hover:text-blue-500 pb-1">Success Page</Link>
                </div>
                </div>
            </div>
{/* Footer Quick Links Ends Here */}

{/* Footer Consumer Policy Starts Ends Here */}
            <div className='w-38 md:w-44 lg:w-42 mt-10'>
                <h1 className='footer-title text-xl font-bold font-Poppins mb-12'>Consumer Policy</h1>
                <div className='font-Roboto text-sm flex flex-col'>
                    <Link to="" className="text-white hover:text-blue-500 pb-1">Canncellation & Returns</Link>
                    <Link to="" className="text-white hover:text-blue-500 pb-1">Terms of use</Link>
                    <Link to="" className="text-white hover:text-blue-500 pb-1">Advertise</Link>
                    <Link to="" className="text-white hover:text-blue-500 pb-1">Privacy</Link>
                    <Link to="" className="text-white hover:text-blue-500 pb-1">Gift cards</Link>
                    <Link to="" className="text-white hover:text-blue-500 pb-1">Become a Seller</Link>
                </div>
            </div>
{/* Footer Consumer Policy Ends Here */}


{/* Footer Help Starts Ends Here */}
            <div className='w-32 md:w-44 lg:w-32 mt-10'>
                <h1 className='footer-title text-xl font-bold font-Poppins mb-12'>Help</h1>
                <div className='font-Roboto text-sm flex flex-col'>
                    <Link to="" className="text-white hover:text-blue-500 pb-1">Help Center</Link>
                    <Link to="" className="text-white hover:text-blue-500 pb-1">How it works</Link>
                    <Link to="" className="text-white hover:text-blue-500 pb-1">FAQ's</Link>
                    <Link to="" className="text-white hover:text-blue-500 pb-1">Video Tutorials</Link>
                    <Link to="" className="text-white hover:text-blue-500 pb-1">Booking Channels</Link>
                    <Link to="" className="text-white hover:text-blue-500 pb-1">Security Check</Link>
                    <Link to="" className="text-white hover:text-blue-500 pb-1">Partner Program</Link>
                </div>
            </div>
{/* Footer Help Ends Here */}


{/* Footer Powered By Starts Ends Here */}
            <div className='w-full md:w-96 mt-10'>
                <h1 className='footer-title text-xl font-bold font-Poppins mb-12'>Powered By ADYA Booking</h1>
                <p className='footer-para font-Roboto text-sm'>Thank you to our Partners for their support towards the community, If you want to be showcased through Adya Housing, contact Here for Sponsorship details.</p>
            </div>
        </div>
    </footer>
{/* Footer Powered By Ends Here */}


{/* Main Footer Ends Here */}




{/* Copyright Footer Starts Here */}

    <div className="w-full bg-white py-4 mx-auto text-center">
        <h2 className="text-black-600 font-Poppins font-semibold ">Copyright ©2024 ADYAHousing Ltd. All rights reserved</h2>
    </div>

{/* Copyright Footer Ends Here */}


    </>
  )
}

export default Footer


{/* <div className="">
                    <Link to="" className="footer-link">Home</Link>
                    <Link to="" className="footer-link">About</Link>
                    <Link to="" className="footer-link">Events</Link>
                    <Link to="" className="footer-link">Teams</Link>
                    <Link to="" className="footer-link">Projects</Link>
                    <Link to="" className="footer-link">PaymentSuccess</Link>
                    <Link to="" className="footer-link">FAQ's</Link>
                </div>  */}