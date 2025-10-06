import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  const [scrolled, setScrolled] = useState(false);

  const handleLogOut = () => {
    logOut().catch((error) => console.log(error));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="hover:text-yellow-400 duration-300">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/menu" className="hover:text-yellow-400 duration-300">
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink to="/order/salad" className="hover:text-yellow-400 duration-300">
          Order Food
        </NavLink>
      </li>

      {user && isAdmin && (
        <li>
          <NavLink to="/dashboard/adminHome" className="hover:text-yellow-400 duration-300">
            Dashboard
          </NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <NavLink to="/dashboard/userHome" className="hover:text-yellow-400 duration-300">
            Dashboard
          </NavLink>
        </li>
      )}

      <li>
        <Link to="/dashboard/cart" className="relative flex items-center justify-center px-2 py-1 hover:text-yellow-400 duration-300">
          <FaShoppingCart size={20} />
          <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold rounded-full px-1.5 py-0.5">
            {cart.length || 0}
          </span>
        </Link>
      </li>

      {/* Login / Logout inside nav */}
      <li>
        {user ? (
          <button
            onClick={handleLogOut}
            className="hover:text-yellow-400 duration-300 font-semibold"
          >
            Logout
          </button>
        ) : (
          <NavLink to="/login" className="hover:text-yellow-400 duration-300 font-semibold">
            Login
          </NavLink>
        )}
      </li>
    </>
  );

  return (
    <div
      className={`navbar fixed z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "bg-black bg-opacity-80 shadow-md backdrop-blur-md" : "bg-transparent"
      } text-white px-6 lg:pr-20  xl:pr-[600px] py-4`}
    >
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-4 shadow-lg bg-gray-900 rounded-xl w-52 text-white"
          >
            {navLinks}
          </ul>
        </div>

        <Link to="/" className="font-extrabold text-2xl tracking-wide text-yellow-500">
          Bistro<span className="text-white">Boss</span>
        </Link>
      </div>
      <div className="navbar-center mr-20">
        <ul className="menu menu-horizontal gap-6 text-sm font-semibold uppercase tracking-wider">
          {navLinks}
        </ul>
      </div>

    </div>
  );
};

export default NavBar;
