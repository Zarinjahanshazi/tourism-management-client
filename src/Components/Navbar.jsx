import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineTravelExplore } from "react-icons/md";


const Navbar = () => {
    const { user, logOut, profilePicture } = useContext(AuthContext);
  const[currentuser,setCurrentUser] = useState()
  useEffect(() =>{
    setCurrentUser(user)
  },[user])


  const handleSignOut = () => {
    logOut().then().catch();
  };

  const photo = () => {
    profilePicture().then().catch();
  };
    const navLinks = (
        <>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/allTourists">All Tourists Spot</NavLink>
          </li>
          <li>
            <NavLink to="/addTourists">Add Tourists Spot</NavLink>
          </li>
          {user && (
            <li>
              <NavLink to="/myList">My List</NavLink>
            </li>
          )}
        </>
      );
    return (
        <div>

<div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3  z-[10] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-[16px] md:text-2xl"> <span><p className="font-extrabold text-[30px] text-green-500"><MdOutlineTravelExplore /></p></span>TouristTrekker</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end mr-4">
        <div className="tooltip lg:tooltip-left" data-tip={currentuser?.displayName}>
        <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost  btn-circle avatar" 
          >
            <div className="w-10  rounded-full" >

              {user ? (
                <div className="flex border justify-center items-center h-full">
                  {user?.photoURL ? (
                    <img  alt="avatar" src={currentuser?.photoURL} />
                  ) : (
                    <RxAvatar className="h-8 w-8" />
                  )}
                </div>
              ) : null}
            </div>
          </div>
  
</div>
          
        </div>

       

           <div className="flex">
           {
              user?<span className="md:btn text-white rounded btn-sm py-2 md:px-6 bg-[#A62F03] md:bg-[#A62F03] md:text-white md:hover:bg-[#A62F03]" onClick={handleSignOut}>Logout</span>:<>
              <button className="">
                <Link to="/login">

                
                    <span className="md:btn text-white rounded btn-sm py-2 md:px-6 bg-[#A62F03] md:bg-[#A62F03] md:text-white md:hover:bg-[#A62F03]">Login</span>
                  
                </Link>
                
              </button>
            <button className="">
                <Link to="/register">
                    
                    <span className="md:btn text-white rounded btn-sm py-2 md:px-6 bg-[#A62F03] md:bg-[#A62F03] md:text-white md:hover:bg-[#A62F03]">register</span>
                  
                </Link>
                
              </button>


              </>


           }
           </div>
      </div>
      </div>
            
        
    );
};

export default Navbar;