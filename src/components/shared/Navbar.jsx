import { Link, NavLink } from "react-router-dom";
import Container from "../Container";

const Navbar = () => {
  //   const { user, logoutUser } = useAuth();

  //   const [isAdmin] = useAdmin();
  //   const [isInstructor] = useInstructor();

  //   const handleLogout = () => {
  //     logoutUser()
  //       .then(() => {})
  //       .catch(() => {});
  //   };
  const navItem = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/instructors">Colleges</NavLink>
      </li>
      <li>
        <NavLink to="/classes">Admission</NavLink>
      </li>
      <li>
        <NavLink to="/classes">My College</NavLink>
      </li>
    </>
  );
  const userMenu = (
    <>
      {/* {user ? ( */}
      <>
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="text-gray-800 bg-gray-100 hover:cursor-pointer"
          >
            <Link to="/login">
              <button className="bg-purple-500 hover:bg-purple-600 duration-300 text-gray-200 px-4 py-2 rounded-md">
                Login
              </button>
            </Link>
          </label>
        </div>
      </>
      {/* ) : (
        <Link to="/login" className="btn">
          Login
        </Link>
      )} */}
    </>
  );
  return (
    <Container>
      <div className="navbar bg-[#F1F0F0] p-0 mb-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content z-10 mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <a className="hover:cursor-pointer normal-case text-xl p-0">
            <img
              src="https://png.pngtree.com/png-vector/20220503/ourmid/pngtree-admission-open-tag-abstract-shape-png-png-image_4562208.png"
              width={80}
              alt=""
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex my-nav">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end my-nav">{userMenu}</div>
      </div>
    </Container>
  );
};

export default Navbar;