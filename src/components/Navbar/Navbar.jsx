import React from "react";
import { MdOutlineNotificationsActive } from "react-icons/md";


const Navbar = () => {
  return (
    <div className="bg-white" >
      <div className="navbar w-10/12 mx-auto   ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a href="">Auctions</a>
              </li>
              <li>
                <a>Categories</a>
              </li>
              <li>
                <a>How to works</a>
              </li>
            </ul>
          </div>
          <a className="text-2xl text-blue-700">
            Auction<span className="text-yellow-400 font-bold ">Gallery</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-8 text-[1.375rem] px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Auctions</a>
            </li>
            <li>
              <a>Categories</a>
            </li>
            <li>
              <a>How to works</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex justify-items-center items-center gap-3 ">
            <div className=" btn border-none bg-[#ebf0f5] rounded-full w-10">
              <div>
              <MdOutlineNotificationsActive size={25}/>
              </div>
            </div>

            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
