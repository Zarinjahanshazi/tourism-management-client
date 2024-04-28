import { Link } from "react-router-dom";


const ShowCountry = ({showCountry}) => {
    const {_id,touristsSpotName,countryName,location,shortDescription,averageCost,seasonality,travelTime,totalVisitorsPerYear,photo} =showCountry
    return (
        <div className='grid md:grid-cols-2 gap-4'>
            <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={photo} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2>{touristsSpotName}</h2>
            <h1>{countryName}</h1>
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
            <Link to={`/tourist/${_id}`}><button className="btn btn-primary">View DEtails</button></Link>
            </div>
        </div>
        </div>
            
        </div>
    );
};

export default ShowCountry;