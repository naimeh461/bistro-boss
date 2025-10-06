import { 
    FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, 
    FaSearch, FaShoppingCart, FaUsers, FaUtensils 
  } from "react-icons/fa";
  import { NavLink, Outlet } from "react-router-dom";
  import useCart from "../hooks/useCart";
  import useAdmin from "../hooks/useAdmin";
  
  const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
  
    // Active link styling
    const activeClass = "bg-yellow-500 text-black font-semibold";
    const inactiveClass = "text-gray-300 hover:bg-yellow-400 hover:text-black";
  
    return (
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-gray-900 text-white shadow-lg flex flex-col">
          <div className="text-center py-6 border-b border-gray-700">
            <h1 className="text-2xl font-bold text-yellow-500">BistroBoss</h1>
            <p className="text-gray-400 text-sm mt-1">Dashboard Panel</p>
          </div>
  
          <ul className="flex-1 p-4 space-y-2">
            {isAdmin ? (
              <>
                <li>
                  <NavLink
                    to="/dashboard/adminHome"
                    className={({ isActive }) => 
                      `flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive ? activeClass : inactiveClass}`
                    }
                  >
                    <FaHome /> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/addItems"
                    className={({ isActive }) => 
                      `flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive ? activeClass : inactiveClass}`
                    }
                  >
                    <FaUtensils /> Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manageItems"
                    className={({ isActive }) => 
                      `flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive ? activeClass : inactiveClass}`
                    }
                  >
                    <FaList /> Manage Items
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink
                    to="/dashboard/bookings"
                    className={({ isActive }) => 
                      `flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive ? activeClass : inactiveClass}`
                    }
                  >
                    <FaBook /> Manage Bookings
                  </NavLink>
                </li> */}
                <li>
                  <NavLink
                    to="/dashboard/users"
                    className={({ isActive }) => 
                      `flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive ? activeClass : inactiveClass}`
                    }
                  >
                    <FaUsers /> All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/dashboard/userHome"
                    className={({ isActive }) => 
                      `flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive ? activeClass : inactiveClass}`
                    }
                  >
                    <FaHome /> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/history"
                    className={({ isActive }) => 
                      `flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive ? activeClass : inactiveClass}`
                    }
                  >
                    <FaCalendar /> My History
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/cart"
                    className={({ isActive }) => 
                      `flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive ? activeClass : inactiveClass}`
                    }
                  >
                    <FaShoppingCart /> My Cart ({cart.length})
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/review"
                    className={({ isActive }) => 
                      `flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive ? activeClass : inactiveClass}`
                    }
                  >
                    <FaAd /> Add a Review
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/paymentHistory"
                    className={({ isActive }) => 
                      `flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive ? activeClass : inactiveClass}`
                    }
                  >
                    <FaList /> Payment History
                  </NavLink>
                </li>
              </>
            )}
  
            {/* Shared Links */}
            <div className="border-t border-gray-700 my-4"></div>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => 
                  `flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive ? activeClass : inactiveClass}`
                }
              >
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/order/salad"
                className={({ isActive }) => 
                  `flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive ? activeClass : inactiveClass}`
                }
              >
                <FaSearch /> Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/order/contact"
                className={({ isActive }) => 
                  `flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive ? activeClass : inactiveClass}`
                }
              >
                <FaEnvelope /> Contact
              </NavLink>
            </li>
          </ul>
        </div>
  
        {/* Main Content */}
        <div className="flex-1 bg-gray-100 p-8 min-h-screen">
          <Outlet />
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  