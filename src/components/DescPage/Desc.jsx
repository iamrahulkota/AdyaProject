import React from 'react'
import { useLocation } from "react-router-dom";
import {useNavigate } from "react-router-dom";
import { Link, NavLink } from 'react-router-dom';

function Desc() {
    const loc = useLocation();

    const SearchParams = new URLSearchParams(loc.search);
    console.log(SearchParams);

    const id = SearchParams.get('id');
    console.log(id);

    const navigate = useNavigate();
    function onHandleBookNow() {
      navigate('/payment');
    }


    const descOfHouse = [
        {
          "id": "1",
          "housetitle": "Aspen",
          "houseprice": "2,25,000/-",
          "noofbedrooms": "5",
          "noofbathrooms" : "9",
          "houseexterior" : "2.18 Acre",
          "imgurl2" : "https://images.pexels.com/photos/17264327/pexels-photo-17264327/free-photo-of-view-of-a-modern-living-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "imgurl3" : "https://images.pexels.com/photos/13722890/pexels-photo-13722890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "propertytype" : "Single Family Homes",
          "marketedby" : "Adya International Ltd",
          "status" : "Available",
          "lotsize" : "2.04",
          "year" : "1934",
          "amentities" : "Deck, Granite Countertops, Dock, Hardwood Flooring, Live Water, 1 Fireplace, panoramic view",
          "lotfeatures" : "Lake, Mountain Views, Water View, Waterfront, Scenic View"

        },
        {
          "id": "2",
          "housetitle": "Leman Locke",
          "houseprice": "1,72,000/-",
          "noofbedrooms": "3",
          "noofbathrooms" : "5",
          "houseexterior" : "374.03 Acre",
          "imgurl2" : "https://images.pexels.com/photos/17264327/pexels-photo-17264327/free-photo-of-view-of-a-modern-living-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "imgurl3" : "https://images.pexels.com/photos/9951401/pexels-photo-9951401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "propertytype" : "Double Family Home",
          "marketedby" : "Adya International Ltd",
          "status" : "Available",
          "lotsize" : "4.45",
          "year" : "1954",
          "amentities" : "Balcony, Pool, Gardens, Indoor Pool, Terrace / Outdoor Space, Outdoor Pool, Solar Power Heating, Garden, panoramic view",
          "lotfeatures" : "Mountain Views, Water View, Ocean Front, Ocean View"
        },
        {
          "id": "3",
          "housetitle": "unObtructed Views",
          "houseprice": "3,18,050/-",
          "noofbedrooms": "6",
          "noofbathrooms" : "8",
          "houseexterior" : "4.47 Acre",
          "imgurl2" : "https://images.pexels.com/photos/5793641/pexels-photo-5793641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "imgurl3" : "https://images.pexels.com/photos/15493331/pexels-photo-15493331/free-photo-of-modern-minimalist-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "propertytype" : "Single Family Homes",
          "marketedby" : "ONE Sotheby's International Realty",
          "status" : "Token Amount Completed",
          "lotsize" : "2.04",
          "year" : "1998",
          "amentities" : "Balcony, Tile Flooring, Marble Flooring",
          "lotfeatures" : "Water View, Waterfront, Ocean View"
        },
        {
          "id": "4",
          "housetitle": "Popcorn Lane",
          "houseprice": "91,520/-",
          "noofbedrooms": "2",
          "noofbathrooms" : "1",
          "houseexterior" : "1 Acre",
          "imgurl2" : "https://images.pexels.com/photos/19672569/pexels-photo-19672569/free-photo-of-bed-in-luxury-bedroom.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "imgurl3" : "https://images.pexels.com/photos/7157115/pexels-photo-7157115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "propertytype" : "Joint Family Homes",
          "marketedby" : "Chile Sotheby's International Realty",
          "status" : "Available",
          "lotsize" : "108726.2",
          "year" : "1934",
          "amentities" : "panoramic view",
          "lotfeatures" : "Lake, Mountain Views, Water View, Waterfront, Bay View, Eco-friendly, Ocean Front, Lagoon, Ocean View, Scenic View"
        },
        {
          "id": "5",
          "housetitle": "Left Fork",
          "houseprice": "2,25,000/-",
          "noofbedrooms": "5",
          "noofbathrooms" : "9",
          "houseexterior" : "2.18 Acre",
          "imgurl2" : "https://images.pexels.com/photos/13722896/pexels-photo-13722896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "imgurl3" : "https://images.pexels.com/photos/22696774/pexels-photo-22696774/free-photo-of-san-marino.jpeg?auto=compress&cs=tinysrgb&w=600",
          "propertytype" : "Single Family Homes",
          "marketedby" : "Adya International Ltd",
          "status" : "Available",
          "lotsize" : "2.04",
          "year" : "1934",
          "amentities" : "Deck, Granite Countertops, Dock, Hardwood Flooring, Live Water, 1 Fireplace, panoramic view",
          "lotfeatures" : "Lake, Mountain Views, Water View, Waterfront, Scenic View"
        },
        {
          "id": "6",
          "housetitle": "Red Tail Court",
          "houseprice": "6,55,870/-",
          "noofbedrooms": "11",
          "noofbathrooms" : "9",
          "houseexterior" : "10,688 Acre",
          "imgurl2" : "https://images.pexels.com/photos/17264327/pexels-photo-17264327/free-photo-of-view-of-a-modern-living-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "imgurl3" : "https://images.pexels.com/photos/10582334/pexels-photo-10582334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "propertytype" : "Single Family Homes",
          "marketedby" : "Côte d'Azur Sotheby's International Realty",
          "status" : "Available",
          "lotsize" : "0.3",
          "year" : "1934",
          "amentities" : "Balcony, Pool, Security System, Gardens, Intercom System, Terrace / Outdoor Space, Wine Cellar / Grotto, Outdoor Pool, panoramic view",
          "lotfeatures" : "Water View, Waterfront, Bay View, Deep Water Mooring, Ocean View"
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
              <button className="mx-4 my-20 font-Roboto bg-black px-10 py-2 text-sm font-semibold text-white" onClick={onHandleBookNow}>Book Now</button>
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



      <div>
      <footer className='w-screen  text-black'>

          <h1 className='text-center text-5xl font-bold'>Amenite & Lot Features</h1>
      

        <div className='w-3/4 mx-auto justify-between flex flex-wrap py-28'>

            <div className='w-full md:w-72 mt-10'>
                <h1 className='text-2xl font-bold mb-12'>Listing Details</h1>

                <h2 className='font-Roboto text-base px-2 text-gray-600 tracking-wider'>PROPERTY ID</h2>
                <p className='font-Roboto text-sm px-2 mb-5'>{HouseDetails.id}</p>

                <h2 className='font-Roboto text-base px-2 text-gray-600 tracking-wider'>PROPERTY TYPE</h2>
                <p className='font-Roboto text-sm px-2 mb-5'>{HouseDetails.propertytype}</p>

                <h2 className='font-Roboto text-base px-2 text-gray-600 tracking-wider'>MARKETED BY</h2>
                <p className='font-Roboto text-sm px-2 mb-5'>{HouseDetails.marketedby}</p>

                <h2 className='font-Roboto text-base px-2 text-gray-600 tracking-wider'>STATUS</h2>
                <p className='font-Roboto text-sm px-2 mb-5'>{HouseDetails.status}</p>
                
            </div>


            <div className='w-32 md:w-44 lg:w-40 mt-10'>
                <h1 className=' text-xl font-bold font-Poppins mb-12'>UtilitesBuilding</h1>

                <h2 className='font-Roboto text-base px-2 text-gray-600 tracking-wider'>YEAR BUILT</h2>
                <p className='font-Roboto text-sm px-2 mb-5'>{HouseDetails.year}</p>

                <h2 className='font-Roboto text-base px-2 text-gray-600 tracking-wider'>LOT SIZE UNIT</h2>
                <p className='font-Roboto text-sm px-2 mb-5'>Acre(s)</p>

                <h2 className='font-Roboto text-base px-2 text-gray-600 tracking-wider'>LOT SIZE</h2>
                <p className='font-Roboto text-sm px-2 mb-5'>{HouseDetails.lotsize}</p>

                <h2 className='font-Roboto text-base px-2 text-gray-600 tracking-wider'>PARKING</h2>
                <p className='font-Roboto text-sm px-2 mb-5'>Garage 2 cars</p>
                
            </div>



            <div className='w-38 md:w-40 lg:w-72 mt-10'>
                <h1 className=' text-xl font-bold font-Poppins mb-12'>Features</h1>
                
                <h2 className='font-Roboto text-base px-2 text-gray-600 tracking-wider'>AMENITIES</h2>
                <p className='font-Roboto text-sm px-2 mb-5'>Deck, Granite Countertops, Dock, Hardwood Flooring, Live Water, 1 Fireplace, panoramic view</p>

                <h2 className='font-Roboto text-base px-2 text-gray-600 tracking-wider'>BATHROOMS</h2>
                <p className='font-Roboto text-sm px-2 mb-5'>{HouseDetails.noofbathrooms}</p>

                <h2 className='font-Roboto text-base px-2 text-gray-600 tracking-wider'>BEDROOMS</h2>
                <p className='font-Roboto text-sm px-2 mb-5'>{HouseDetails.noofbedrooms}</p>

                
            </div>




            <div className='w-32 md:w-44 lg:w-40 mt-10'>
                <h1 className=' text-xl font-bold font-Poppins mb-12 '>AdditionalFeatures</h1>
                
                <h2 className='font-Roboto text-base px-2 text-gray-600 tracking-wider'>LOT_FEATURES</h2>
                <p className='font-Roboto text-sm px-2'>{HouseDetails.lotfeatures}</p>
            </div>

        </div>
      </footer>
      <div className='flex justify-center'>
        <div className='text-cent w-4/5 h-1 border-b-2 border-grey-400 rounded-2xl my-2'></div>
      </div>  
        <h2 className='text-center font-Roboto text-base font-medium tracking-wide px-2 text-gray-600 tracking-wideset my-5'>VIEW MORE</h2>
      </div>
    </>
  )
}

export default Desc
