// import { getAuth, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import app from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";
// import { GithubAuthProvider } from "firebase/auth/cordova";


const LOgIn = () => {
    
  const { signIn,googleLogin,updateProfile } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
 

  

  const auth = getAuth(app);
  //this project
//   const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    console.log("hello")
      googleLogin()
      .then((result) => {
        toast.success("Account successfully login.");
        setTimeout(() => {
          navigate(location.state ? location.state : "/")
        }, 1000);
      })
      .catch((error) => {
        toast.error("Something was wrong.");
      })
  };


    //this project
//   const handleGithubSignIn = () => {
//     signInWithPopup(auth, githubProvider)
//       .then((result) => {
//         const user = result.user;
//         updateProfile(user.displayName,user.photoURL);
        
       

//         toast.success("Login successfully");
//         setTimeout(() => {
//           navigate(location.state ? location.state : "/")
//         }, 1000);

        
//       })
//       .catch((error) => {
//         toast.error(error.message);
//       });
//   };

  const handleLogin = (e) => {
    e.preventDefault();
    
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    
    signIn(email, password)
      .then((result) => {
      
        const user = result.user;
       
        e.target.reset();
        toast.success("Login successfully");
        setTimeout(() => {
          navigate(location.state ? location.state : "/")
        }, 1000);

       
      })
      .catch((error) => {
        toast.error('incorrect email or password');
      });
  };
    return (
        <div>
             <ToastContainer />


             <div>
        <h2 className="text-3xl my-10 text-center">Please Login</h2>
        <form
          onSubmit={handleLogin}
          className="card-body mx-auto md:w-3/4 lg:w-1/2"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">
              Login
            </button>
            <button
              onClick={handleGoogleSignIn}
              className="btn mt-6 btn-secondary"
            >
              Google Login
            </button>
            {/* this project
            <button
              onClick={handleGithubSignIn}
              className="btn mt-6 btn-secondary"
            >
              Github Login
            </button> */}
            
          </div>
        </form>

        <p className="text-center mt-4">
          Do not have a account?{" "}
          <Link className=" font-bold text-red-600" to="/register">
            Register
          </Link>
        </p>
      </div>
            
        </div>
    );
};

export default LOgIn;