import { useLoaderData } from "react-router-dom";
import ShowCountry from "./ShowCountry";


const ViewCountry = () => {
    const country = useLoaderData();
    console.log(country);

    
    return (
        <div>
            {
                country.map(showCountry =><ShowCountry key={showCountry._id} showCountry={showCountry}></ShowCountry>)
            }
            
        </div>
    );
};

export default ViewCountry;