import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const Nav = () => {

    const {user, userLogout} = useContext(AuthContext);

    const links = <>
    <li className="btn btn-neutral ml-2 border-2 rounded-xl font-semibold"><NavLink to="/">Home</NavLink></li>
    <li className="btn btn-neutral ml-2 border-2 rounded-xl font-semibold"><NavLink to="/addtocart">Add Product</NavLink></li>
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
        <div className="navbar bg-base-100 flex lg:flex-row flex-col md:py-9 lg:py-6">
          <div className="navbar-start">
          <img className='md:w-20 w-10' src="https://i.ibb.co/M7sMZmk/logo.png" alt="logo" />
          <h1 className="md:text-4xl text-2xl font-extrabold">TechTrove</h1>
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
            <div className="ml-4 md:mx-3">
              <p className="font-semibold">Dark mode</p>
            <input type="checkbox" className="toggle"/>
            </div>
          </div>
        </div>
)};

export default Nav;