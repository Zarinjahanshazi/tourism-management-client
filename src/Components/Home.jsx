import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TouristCard from "./TouristCard";


const Home = () => {
    const loadedTourists = useLoaderData();
  const [tourists,setTourists] = useState(loadedTourists);
    return (
        <div>
            <h2>Tourists Length:{tourists.length}</h2>
            <p>email:{tourists.email}</p>

            <div className='grid md:grid-cols-2 gap-4'>
      {
         tourists.map(tourist => <TouristCard key={tourist._id} tourist={tourist} tourists={tourists} setTourists={setTourists}></TouristCard>)
      }
      </div>
        </div>
    );
};

export default Home;