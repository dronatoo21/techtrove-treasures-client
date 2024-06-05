import { updateProfile } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../providers/AuthProvider';
import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('');
    const [showPass, setShowPass] = useState();
    const [successMsg, setSuccessMsg] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.eamil.value;
        const password = e.target.password.value;
        const checked = e.target.checkbox.checked;
        console.log(name, email, password);
        setRegisterError('');
        setSuccessMsg('');
        if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
          setRegisterError('Please write a valid email!');
          return;
        }else if(password.length < 6) {
            setRegisterError('Password must be at least 6 characters')
            return ;
        }else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
          return setRegisterError('Password must contain at least one special character')
        }else if(!/[A-Z]/.test(password)) {
            setRegisterError('Your password must have at least 1 upper case letter');
            return;
        }  else if(!checked){
            setRegisterError('Please accept our terms and conditions');
            return;
        }      
        createUser(email, password)
        .then(res => {
            console.log(res.user);
            setSuccessMsg('Successfully Registered')
            toast("successfully Registered");
            navigate(location?.state ? location.state : '/')
            updateProfile(res.user, {
              displayName: name,
              photoURL: "#"
            })
            .then(()=> {
              window.location.reload()
            })
            .catch(error=> console.error(error.message))
        })
        .catch(error => {
            setRegisterError(error.message);
        });
    }
    return (
        <div>
            <div className="hero my-12 md:mb-24">
              <div className="hero-content flex-col">
                <div className="text-center">
                <h1 className="font-bold text-lg md:text-2xl lg:text-3xl text-center ">Register Now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 dark:bg-transparent dark:border-2 dark:text-white">
                  <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text dark:text-white">Name</span>
                      </label>
                      <input type="text" placeholder="Your name" name="name" className="dark:bg-transparent dark:border-white input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label"> 
                        <span className="label-text dark:text-white">Email</span>
                      </label>
                      <input type="email" placeholder="email" name="eamil" className="dark:bg-transparent dark:border-white input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text dark:text-white">Password</span>
                      </label>
                      <div className="relative">
                        <input type={showPass ? "text" : "password"} placeholder="password" name="password" className="dark:bg-transparent dark:border-white input input-bordered w-full" required />
                        <span className="absolute top-4 right-2" onClick={()=> setShowPass(!showPass)}>
                          {
                          showPass ? <FaEyeSlash/> : <FaEye/>
                          }
                          </span>
                      </div>
                    </div><br />
                    <div>
                        <input type="checkbox" name="checkbox" id="terms" />
                        <label  className="ml-3" htmlFor="terms">Accept our <a className="text-purple-700 font-medium" href="#">terms and conditions!</a></label>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn bg-gray-600 text-white">Register</button>
                    </div>
                  </form>
                  {
                    registerError && <p className="text-red-700 px-8 pb-5">{registerError}</p>
                  }
                  {
                    successMsg && <p className="text-green-500 px-8 pb-5">{successMsg}</p>
                  }
                  <p className="px-8 pb-5">Already have an account? Please <Link className="text-purple-700 font-bold" to="/login">Login</Link></p>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Register;