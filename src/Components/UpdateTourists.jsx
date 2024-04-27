import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateTourists = () => {

    const {id} = useParams();
    console.log(id);
    const [tourist, setTourist] = useState(null);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/tourist')
            .then(res => res.json())
            .then(data => {
                const one = data.find(f => f._id === id);
                setTourist(one);
                setLoad(false);
            })
            .catch(error => {
                // Handle any network or fetch errors here
                console.error("Error fetching tourist data:", error);
            });
    }, [id]);
    console.log(tourist);
    // const {_id,foodName, foodCategory, quantity, origin, description, price} = food || [];

    const {_id,name,email,touristsSpotName,countryName,location,shortDescription,averageCost,seasonality,travelTime,totalVisitorsPerYear,photo} = tourist || [];

    

    const handleUpdate = ( event) =>{
        event.preventDefault();


        const form = event.target;
        const touristsSpotName = form.touristsSpotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const shortDescription = form.shortDescription.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const photo = form.photo.value;

        const update = {touristsSpotName,countryName,location,shortDescription,averageCost,seasonality,travelTime,totalVisitorsPerYear,photo}
        console.log(update);


        fetch(`http://localhost:5000/tourist/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(update)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    icon: 'success',
                    title: 'Your product has been Updated',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }



    


    return (
        <div className="bg-purple-400 p-24">
            <h2 className="text-3xl text-center text-purple-400">Update</h2>
            <form onSubmit={handleUpdate}>
        {/* form row tourists_spot_name and country_Name */}
       <div className="md:flex mb-8">
       <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Tourists Spot Name</span>
          </label>
          <input type="text"  name="touristsSpotName"  placeholder="tourists_spot_name" className="input input-bordered w-full" required />
        </div>
        <div className="form-control md:w-1/2 ml-4">
          <label className="label">
            <span className="label-text">Country Name</span>
          </label>
          <input type="text" name="countryName" placeholder="Country_Name" className="input input-bordered w-full" required />
        
        </div>
       </div>
        {/* form location and short description row */}
       <div className="md:flex mb-8">
       <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input type="text" name="location" placeholder="location" className="input input-bordered w-full" required />
        </div>
        <div className="form-control md:w-1/2 ml-4">
          <label className="label">
            <span className="label-text">short description</span>
          </label>
          <input type="text" name="shortDescription" placeholder="short description" className="input input-bordered w-full" required />
        
        </div>
       </div>
        {/* form average_cost and seasonality  row */}
       <div className="md:flex mb-8">
       <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Average Cost</span>
          </label>
          <input type="text" name="averageCost" placeholder="Average Cost" className="input input-bordered w-full" required />
        </div>
        <div className="form-control md:w-1/2 ml-4">
          <label className="label">
            <span className="label-text">Seasonality </span>
          </label>
          <input type="text" name="seasonality" placeholder="Seasonality " className="input input-bordered w-full" required />
        
        </div>
       </div>
        {/* form travel_time and totalVisitorsPerYear row */}
       <div className="md:flex mb-8">
       <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Travel Time</span>
          </label>
          <input type="text" name="travelTime" placeholder="Travel Time" className="input input-bordered w-full" required />
        </div>
        <div className="form-control md:w-1/2 ml-4">
          <label className="label">
            <span className="label-text">Total Visitors Per Year</span>
          </label>
          <input type="text" name="totalVisitorsPerYear" placeholder="Total Visitors Per Year" className="input input-bordered w-full" required />
        
        </div>
       </div>
        {/* form photo URL  row */}
       <div className="mb-8">
       <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" required />
        </div>
        
       </div>



        
          
            <input type="submit" value="Update" className="btn btn-block" />
        
      </form>
    
            
        </div>
    );
};

export default UpdateTourists;