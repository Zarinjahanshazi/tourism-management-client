import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";


const MyLIst = () => {
    const [lists,setLIsts] = useState([]);
    const [myList,setMyList] = useState([]);
    const {user} = useContext(AuthContext)
   
   


   
    useEffect(() =>{
        fetch('http://localhost:5000/tourist')
        .then( res=> res.json())
        .then(data =>{
            setLIsts(data);
        })
    },[])


    useEffect(() =>{
        const data = lists.filter(list => list?.email === user?.email);
        setMyList(data);
    },[lists,user])

    console.log(user);

    console.log(myList,lists)


    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              
             fetch(`http://localhost:5000/tourist/${_id}`,{
                method: 'DELETE'
             })
             .then(res => res.json())
             .then(data => {
                if(data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your item has been deleted.',
                        'success'
                      )
                      const remain = myList.filter(user => user._id !== _id);
                      console.log(remain);
                      setMyList(remain);
                }
             })
            }
          })
    }







    return (
        <div>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        
        <th>tourists_spot_name</th>
        <th>country_Name</th>
        <th>average_cost</th>
        <th>Action1</th>
        <th>Action2</th>
      </tr>
    </thead>
    <tbody>
    {
        myList.map((p) => <tr key={p._id}>
           <th>{p.touristsSpotName}</th>
           <td>{p.countryName}</td>
           <td>{p.averageCost}</td>
           <td>
                <Link to={`/updateTourist/${p._id}`}><button className="btn">Update</button></Link>
            </td>
            <td>
                <button onClick={() => handleDelete(p._id)} className="btn">Delete</button>
            </td>
        </tr>)
    }
      {/* row 1 */}
      
        {/* <tr>
            <th></th>
            to={`/update/${x._id}`}
            <td>3</td>onClick={() => handleDelete(x._id)}
            <td>4</td>
            
          </tr>)
       */}
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyLIst;