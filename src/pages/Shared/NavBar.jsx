import { FaList } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavBar = () => {

    const links = <>
    <li className="btn btn-outline text-white ml-2 rounded-xl font-semibold"><NavLink to="/">Home</NavLink></li>
    <li className="btn btn-outline text-white ml-2 rounded-xl font-semibold"><NavLink to="/addProduct">Add Product</NavLink></li>
    <li className="btn btn-outline text-white ml-2 rounded-xl font-semibold"><NavLink to="/mycart">My Cart</NavLink></li>
    </>
    return (
        <div className="navbar bg-gradient-to-r from-[#3d6ae9] to-[#2684fe] text-white px-10">
          <div className="navbar-start">
            <div className="dropdown lg:hidden flex">
              <div tabIndex={0} role="button" className="btn btn-circle">
                <FaList/>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-20 p-2  text-black shadow bg-base-100 rounded-box w-52">
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
                <h1 className="md:text-4xl ml-1 text-2xl font-extrabold">TechTrove</h1>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
    );
};

export default NavBar;