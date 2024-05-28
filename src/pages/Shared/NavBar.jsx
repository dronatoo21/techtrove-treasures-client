import { useContext, useEffect, useState } from "react";
import { FaList } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FiSun } from "react-icons/fi";
import { BiSolidMoon } from "react-icons/bi";
import { toast } from "react-toastify";

const NavBar = () => {
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
    const handleLogout = () => {
        userLogout()
        .then(res => {
          console.log(res.user);
        })
        .catch(error => console.log(error));
        toast('successfully logged out')
      };

    const links = <>
    <li><NavLink style={({ isActive })=> ({borderBottom: isActive ? "2px solid white" : " ", borderTop: isActive ? "2px solid white" : " ", background: "transparent",})} className="btn btn-sm border-none text-black dark:text-black lg:text-white ml-2 rounded-xl font-semibold" to="/">Home</NavLink></li>
    <li><NavLink style={({ isActive })=> ({borderBottom: isActive ? "2px solid white" : " ", borderTop: isActive ? "2px solid white" : " ", background: "transparent",})} className="btn btn-sm border-none text-black dark:text-black lg:text-white ml-2 rounded-xl font-semibold" to="/addProduct">Add Product</NavLink></li>
    <li><NavLink style={({ isActive })=> ({borderBottom: isActive ? "2px solid white" : " ", borderTop: isActive ? "2px solid white" : " ", background: "transparent",})} className="btn btn-sm border-none text-black dark:text-black lg:text-white ml-2 rounded-xl font-semibold" to="/mycart">My Cart</NavLink></li>
    {
        user ? <li className="lg:hidden"><Link onClick={handleLogout} className="btn btn-sm border-none text-black bg-white lg:text-white ml-2 rounded-xl font-semibold" >Logout</Link></li> : <li className="lg:hidden"><Link to="/login" className="btn btn-sm border-none text-black bg-white lg:text-white ml-2 rounded-xl font-semibold" >Login</Link></li>
    }
    </>

    return (
        <div className="navbar bg-gradient-to-r from-[#3d6ae9] to-[#2684fe] text-white dark:text-black px-5 md:px-10">
          <div className="navbar-start">
            <div className="dropdown lg:hidden flex">
              <div tabIndex={0} role="button" className="btn border-none bg-transparent dark:text-black text-white">
                <FaList className="text-xl"/>
              </div>
              <ul tabIndex={0} className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 mt-10">
                {links}
               
              </ul>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  {links}
                </ul>
              </div>
          </div>
          <div className="navbar-center">
                {/* <img className='md:w-20 w-10' src="https://i.ibb.co/M7sMZmk/logo.png" alt="logo" /> */}
                <Link to='/'><h1 className="md:text-4xl ml-1 text-2xl font-extrabold">TechTrove</h1></Link>
          </div>
          <div className="navbar-end">
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
            { user ?
            <>
          <label tabIndex={0} className="btn btn-sm lg:mr-7 text-white dark:text-black btn-circle avatar mb-4">
            <img className="rounded-full" src={user?.photoURL} alt="photo" />
            <p className=" text-sm text-center">{user?.displayName?.split(' ').pop()}</p>
          </label>
            <button onClick={handleLogout} className="hidden lg:flex btn bg-transparent btn-outline dark:text-black text-white rounded-xl">Logout</button></>
              : <Link to="/login"><button className="hidden lg:flex btn bg-transparent btn-outline dark:text-black text-white rounded-xl">Login</button></Link>
            }
          </div>
        </div>
    );
};

export default NavBar;