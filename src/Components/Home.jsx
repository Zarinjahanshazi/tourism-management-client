import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TouristCard from "./TouristCard";


const Home = () => {
    const loadedTourists = useLoaderData();
  const [tourists,setTourists] = useState(loadedTourists);
    return (
        <div>
            <h2>Tourists Length:{tourists.length}</h2>
            {/* banner */}

            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full h-[500px] rounded-2xl">
    <img src="https://i.ibb.co/njBprQ3/beautiful-sunrise-fishing-dip-nets-pakpra-phatthalung-thailand.jpg" className="w-full rounded-2xl" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full h-[500px] rounded-2xl">
    <img src="https://i.ibb.co/86cZCWY/pileh-blue-lagoon-phi-phi-island-thailand.jpg" className="w-full rounded-2xl"  />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full h-[500px] rounded-2xl">
    <img src="https://i.ibb.co/ZYdmcr9/bali-pagoda-indonesia.jpg" className="w-full rounded-2xl" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full h-[500px] rounded-2xl">
    <img src="https://i.ibb.co/GMSnTBy/firework-display-singapore.jpg" className="w-full rounded-2xl" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>





            <div className='grid md:grid-cols-2 gap-4'>
      {
         tourists.map(tourist => <TouristCard key={tourist._id} tourist={tourist} tourists={tourists} setTourists={setTourists}></TouristCard>)
      }
      </div>
        </div>
    );
};

export default Home;