import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import TouristCard from "./TouristCard";
import AllCard from "./AllCard";


const AllTouristsSpot = () => {
    const loadedTourists = useLoaderData();
    console.log(loadedTourists);
  const [tourists,setTourists] = useState([]);
  useEffect(() =>{
    fetch('http://localhost:5000/tourist')
    .then(res => res.json())
    .then(data =>{
        setTourists(data);
    })
  },[])
    return (
        <div>
             <h2>Tourists Length:{tourists.length}</h2>
            <div>
            <div className='grid md:grid-cols-3 gap-4'>
      {
         tourists.map(tourist => <AllCard key={tourist._id} tourist={tourist} tourists={tourists} setTourists={setTourists}></AllCard>)
      }
      </div>

            </div>
        </div>
    );
};

export default AllTouristsSpot;