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
          <div className="dropdown md:hidden">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {links}
              </ul>
            </div>
          <img className='md:w-20 w-10' src="https://i.ibb.co/M7sMZmk/logo.png" alt="logo" />
          <h1 className="md:text-4xl text-2xl font-extrabold">TechTrove</h1>
          </div>
          <div className="navbar-center md:my-0 my-5 hidden md:block">
              <ul>
                {links}
              </ul>
          </div>
          <div className="navbar-end">
          </div>
        </div>
)};

export default Nav;