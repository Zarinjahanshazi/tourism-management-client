import { useLoaderData, useParams } from "react-router-dom";

import { IoMdTime } from "react-icons/io";
import { FaSackDollar } from "react-icons/fa6";
import { TiWeatherCloudy } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";
// import { useEffect, useState } from "react";


const Tourist = () => {
    const {_id} = useParams();
    const spots = useLoaderData();

   
    
    
    console.log(spots.countryName)
    return (
        <div>
            



            <div className="lg:grid lg:grid-cols-2 gap-10">
                <div>
                        <img className="rounded-2xl w-[700px] h-[600px]" src={spots.photo} alt="" />
                </div>

                <div className="">
                    <h1 className="text-[#131313] font-bold text-4xl">User Name:{spots.name}</h1>
                    <h4 className="text-base font-medium py-4">User Email:{spots.email}</h4>
                    <p className='border-b-2'></p>
                    {/* <h3 className="text-base font-medium py-4">{book.category}</h3> */}
                    <p className='border-b-2'></p>
                    <h1 className="py-4"><span className="font-bold text-base">Description:</span>{spots.shortDescription}</h1>

                    <p className='border-b-2 '></p>
                    <div className="flex gap-10">
                    <p className="flex items-center"><span><FaSackDollar /></span>{spots.averageCost}</p>
                    <p className="flex items-center"><span><IoMdTime /></span>{spots.travelTime}</p>
                </div>
                <p className="border-b-2"></p>
                <div className="flex gap-10">
                    <p className="flex items-center">Location:{spots.location}</p>
                    <p className="flex items-center">Visitors:{spots.totalVisitorsPerYear}</p>
                </div>
                <p className="border-b-2"></p>
                <div className="flex gap-10">
                    <p className="flex items-center"><span><CiLocationOn /></span>{spots.touristsSpotName}</p>
                    <p className="flex items-center"><span><TiWeatherCloudy /></span>{spots.seasonality}</p>
                </div>
                

                    {/* <div className="flex gap-10">
                        <div className="text-[#131313B2]">
                            <p>Number of Pages:</p>
                            <p>Publisher:</p>
                            <p>Year of Publishing:</p>
                            <p>Rating:</p>

                        </div>

                        <div className="text-[#131313] text-base font-semibold">
                            <p>{book.totalPages}</p>
                            <p>{book.publisher}</p>
                            <p>{book.yearOfPublishing}</p>
                            <p>{book.rating}</p>

                        </div>

                    </div> */}

                   



                </div>
            </div>
        </div>
    );
};

export default Tourist;