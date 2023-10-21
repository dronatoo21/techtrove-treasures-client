import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";


const Login = () => {
    const {loginUser, googleLogin} = useContext(AuthContext)
    const [logError, setLogError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [showPass, setShowPass] = useState();
    const location = useLocation();
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        setLogError('');
        setSuccessMsg('');
        googleLogin(googleProvider)
        .then(res => {
            console.log(res.user);
            setSuccessMsg('successfully logged in');
            toast("successfully logged in");
            navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
            setLogError(error.message);
        })
    }
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.eamil.value;
        const password = e.target.password.value;
        console.log(email, password);

        setLogError('');
        setSuccessMsg('');

        loginUser(email, password)
        .then(res => {
            console.log(res.user);
            setSuccessMsg('successfully logged in');
            toast("successfully logged in");
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            setLogError(error.message);
        })
    };
    return (
        <div>
            <div>
            <div className="hero my-12 md:mb-24">
              <div className="hero-content flex-col">
                <div className="text-center">
                  <h1 className="text-4xl text-black font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input type="email" placeholder="email" name="eamil" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <div className="relative">
                        <input type={showPass ? "text" : "password"} placeholder="password" name="password" className="input input-bordered w-full" required />
                        <span className="absolute top-4 right-2" onClick={()=> setShowPass(!showPass)}>
                          {
                          showPass ? <FaEye/> : <FaEyeSlash/>
                          }
                          </span>
                      </div>
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn bg-gray-600 text-white">Login</button>
                    </div>
                  </form>
                  <h1 className='text-center -mt-5'>OR</h1>
                  <button onClick={handleGoogleSignIn} className="btn bg-gray-600 mx-8 mt-2 text-white">Login with Google</button>
                  {
                    logError && <p className="text-red-700 px-8 pb-5">{logError}</p>
                  }
                  {
                    successMsg && <p className="text-green-500 px-8 pb-5">{successMsg}</p>
                  }
                  <p className="px-8 pb-5">New here? Please <Link className="text-purple-700 font-bold" to="/Register">Register</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div> 
    );
};

export default Login;