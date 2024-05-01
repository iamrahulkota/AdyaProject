import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  function onHandleLogin(){
    
    navigate('/login');
  }


  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white">
      <nav className="flex justify-around  items-center  mx-auto py-3" >
        <div>
          <h1 className="cursor-pointer text-xl font-bold font-Poppins">Adya Housing</h1>
        </div>
        <div
          className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[50vh] left-0 ${
            menuOpen ? 'top-[68px]' : '-top-[100%]'
          } md:w-auto w-full flex items-center px-5`}
        >
          <ul className="font-Roboto  text-black  text-sm flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <Link className= "px-3 py-2 hover:text-white hover:bg-gray-900 hover:px-3 hover:py-2 hover:rounded-md" to=''>
                Home
              </Link>
            </li>
            <li>
              <Link className="px-3 py-2 hover:text-white hover:bg-gray-900 hover:px-3 hover:py-2 hover:rounded-md" to=''>
                About
              </Link>
            </li>
            <li>
              <Link className="px-3 py-2 hover:text-white hover:bg-gray-900 hover:px-3 hover:py-2 hover:rounded-md" to=''>
                Premiere 
              </Link>
            </li>
            <li>
              <Link className="px-3 py-2 hover:text-white hover:bg-gray-900 hover:px-3 hover:py-2 hover:rounded-md" to=''>
                Events
              </Link>
            </li>
            <li>
              <Link className="px-3 py-2 hover:text-white hover:bg-gray-900 hover:px-3 hover:py-2 hover:rounded-md" to=''>
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-gray-900 text-lg font-semibold font-Poppins text-white px-5 py-2 rounded-full hover:bg-[#87acec]" onClick={onHandleLogin}>
            Sign in
          </button>
          <i className="fa-solid fa-bars text-3xl cursor-pointer md:hidden" onClick={onToggleMenu} name={menuOpen ? 'close' : 'menu'}></i>

        </div>
      </nav>
    </header>
  );
}

export default Header;
