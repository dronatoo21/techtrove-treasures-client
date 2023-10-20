import { NavLink } from "react-router-dom";

const Nav = () => {

    const links = <>
    <li className="btn btn-neutral ml-2 border-2 rounded-xl font-semibold"><NavLink to="/">Home</NavLink></li>
    <li className="btn btn-neutral ml-2 border-2 rounded-xl font-semibold"><NavLink to="#">Contact</NavLink></li>
    <li className="btn btn-neutral ml-2 border-2 rounded-xl font-semibold"><NavLink to="#">About us</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 flex lg:flex-row flex-col">
          <div className="navbar-start">
          <img className='md:w-20 w-10' src="https://i.ibb.co/M7sMZmk/logo.png" alt="logo" />
          <h1 className="md:text-4xl text-2xl font-extrabold">TechTrove</h1>
          </div>
          <div className="navbar-center md:my-0 my-5 sm:hidden md:block">
              <ul>
                {links}
              </ul>
          </div>
          <div className="navbar-end">
          </div>
        </div>
)};

export default Nav;