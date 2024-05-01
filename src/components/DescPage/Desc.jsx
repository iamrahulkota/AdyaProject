import React from 'react'
import { useLocation } from "react-router-dom";
import {useNavigate } from "react-router-dom";

function Desc() {
    const loc = useLocation();

    const SearchParams = new URLSearchParams(loc.search);
    console.log(SearchParams);

    const id = SearchParams.get('id');
    console.log(id);


    const descOfHouse = [
        {
          "id": "1",
          "housetitle": "Aspen",
          "houseprice": "2,25,000/-",
          "noofbedrooms": "5",
          "noofbathrooms" : "9",
          "houseexterior" : "2.18 Acre",
          "imgurl2" : "https://images.pexels.com/photos/17264327/pexels-photo-17264327/free-photo-of-view-of-a-modern-living-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "imgurl3" : "https://images.pexels.com/photos/13722890/pexels-photo-13722890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          "id": "2",
          "housetitle": "Leman Locke",
          "houseprice": "1,72,000/-",
          "noofbedrooms": "3",
          "noofbathrooms" : "5",
          "houseexterior" : "374.03 Acre",
          "imgurl2" : "https://images.pexels.com/photos/17264327/pexels-photo-17264327/free-photo-of-view-of-a-modern-living-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "imgurl3" : "https://images.pexels.com/photos/9951401/pexels-photo-9951401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          "id": "3",
          "housetitle": "unObtructed Views",
          "houseprice": "3,18,050/-",
          "noofbedrooms": "6",
          "noofbathrooms" : "8",
          "houseexterior" : "4.47 Acre",
          "imgurl2" : "https://images.pexels.com/photos/5793641/pexels-photo-5793641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "imgurl3" : "https://images.pexels.com/photos/15493331/pexels-photo-15493331/free-photo-of-modern-minimalist-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          "id": "4",
          "housetitle": "Popcorn Lane",
          "houseprice": "91,520/-",
          "noofbedrooms": "2",
          "noofbathrooms" : "1",
          "houseexterior" : "1 Acre",
          "imgurl2" : "https://images.pexels.com/photos/19672569/pexels-photo-19672569/free-photo-of-bed-in-luxury-bedroom.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "imgurl3" : "https://images.pexels.com/photos/7157115/pexels-photo-7157115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          "id": "5",
          "housetitle": "Left Fork",
          "houseprice": "2,25,000/-",
          "noofbedrooms": "5",
          "noofbathrooms" : "9",
          "houseexterior" : "2.18 Acre",
          "imgurl2" : "https://images.pexels.com/photos/13722896/pexels-photo-13722896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "imgurl3" : "https://images.pexels.com/photos/22696774/pexels-photo-22696774/free-photo-of-san-marino.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
          "id": "6",
          "housetitle": "Red Tail Court",
          "houseprice": "6,55,870/-",
          "noofbedrooms": "11",
          "noofbathrooms" : "9",
          "houseexterior" : "10,688 Acre",
          "imgurl2" : "https://images.pexels.com/photos/17264327/pexels-photo-17264327/free-photo-of-view-of-a-modern-living-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "imgurl3" : "https://images.pexels.com/photos/10582334/pexels-photo-10582334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      ];



    function findHouseById(id){
        return descOfHouse.find(house => house.id === id)
    }

    const HouseDetails = findHouseById(id);

  return (
    <>
      <div className='w-screen  bg-white'>
        <div className='mx-[16%]  py-28 flex flex-col md:flex md:flex-row'>
          
            <div className='w-full md:w-2/4'>
              <h1 className='text-4xl font-bold mb-12 font-Poppins '>{HouseDetails.housetitle}</h1>
              <div className='flex flex-col md:flex-row '>
                <div className='py-5 px-4'>
                  <h1 className='text-black font-Poppins uppercase tracking-wider font-semibold'>Price</h1>
                  <p className='text-black font-Roboto text-lg'>{HouseDetails.houseprice}</p>
                </div>
                <div className='py-5 px-4'>
                  <h1 className='text-black font-Poppins uppercase tracking-wider font-semibold'>Bedrooms</h1>
                  <p className='text-black font-Roboto text-lg'>{HouseDetails.noofbedrooms}</p>
                </div>
                <div className='py-5 px-4'>
                  <h1 className='text-black font-Poppins uppercase tracking-wider font-semibold'>Bathrooms</h1>
                  <p className='text-black font-Roboto text-lg'>{HouseDetails.noofbathrooms}</p>
                </div>
                <div className='py-5 px-4'>
                  <h1 className='text-black font-Poppins uppercase tracking-wider font-semibold'>Exterior</h1>
                  <p className='text-black font-Roboto text-lg'>{HouseDetails.houseexterior}</p>
                </div>
              </div>
              <button className="mx-4 my-20 font-Roboto bg-black px-10 py-2 text-sm font-semibold text-white">Book Now</button>
            </div>
            <div className='w-full md:w-2/4 flex flex-wrap'>
                  <div className=''>
                    <img src={HouseDetails.imgurl2} className='h-[324px] w-full'/>
                  </div>
                  <div className=''>
                    <img src={HouseDetails.imgurl3} className='h-[324px] w-full'/>
                  </div>
            </div>

          </div>

      </div>
    </>
  )
}

export default Desc