import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import { FiSun } from "react-icons/fi";
import { BiSolidMoon } from "react-icons/bi";

const Nav = () => {
    const [mode, setMode] = useState("light");

    function changeTheme () {
      const html = document.documentElement
      if(mode === "light") {
        html.classList.remove("light")
        html.classList.add("dark")
        setMode("dark")
        localStorage.setItem("mode", "dark")
      } else{
        html.classList.remove("dark")
        html.classList.add("light")
        setMode("light")
        localStorage.setItem("mode", "light")
      }
    }

    useEffect(()=>{
      const currentMode = localStorage.getItem("mode")|| "light";
      setMode(currentMode)  
      const html = document.documentElement
      html.classList.add(currentMode)
    },[])

    const {user, userLogout} = useContext(AuthContext);

    const links = <>
    <li className="btn btn-neutral ml-2 border-2 rounded-xl font-semibold"><NavLink to="/">Home</NavLink></li>
    <li className="btn btn-neutral ml-2 border-2 rounded-xl font-semibold"><NavLink to="/addProduct">Add Product</NavLink></li>
    <li className="btn btn-neutral ml-2 border-2 rounded-xl font-semibold"><NavLink to="/mycart">My Cart</NavLink></li>
    </>

    const handleLogout = () => {
      userLogout()
      .then(res => {
        console.log(res.user);
      })
      .catch(error => console.log(error));
      toast('successfully logged out')
    };

    return (
        <div className="navbar flex lg:flex-row flex-col md:h-auto h-60 md:py-9 lg:py-6">
          <div className="navbar-start">
          <img className='md:w-20 w-10' src="https://i.ibb.co/M7sMZmk/logo.png" alt="logo" />
          <h1 className="md:text-4xl ml-1 text-2xl font-extrabold">TechTrove</h1>
          </div>
          <div className="navbar-center md:my-0 my-5 sm:hidden md:block">
              <ul>
                {links}
              </ul>
          </div>
          <div className="navbar-end md:-ml-24 md:my-1 lg:-ml-0 lg:my-0 mb-5">
          { user ?
            <>
          <label tabIndex={0} className="btn mr-5 btn-ghost btn-circle avatar">
            <img className="rounded-full" src={user?.photoURL} alt="" />
            <p className="w-16">{user?.displayName}</p>
          </label>
            <button onClick={handleLogout} className="btn bg-gray-800 text-white rounded-xl">Logout</button></>
              : <Link to="/login"><button className="btn bg-gray-800 text-white rounded-xl">Login</button></Link>
            }
            <div className="ml-4 md:mx-3 mt-3">
            <label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
                <input onClick={changeTheme} type="checkbox" />
                {/* sun icon */}
                <h1 className="swap-on fill-current w-10 h-10"><FiSun className="text-3xl"/></h1>
                {/* moon icon */}
                <h1 className="swap-off fill-current w-10 h-10"><BiSolidMoon className="text-3xl"/></h1>
              </label>
            </div>
          </div>
        </div>
)};

export default Nav;