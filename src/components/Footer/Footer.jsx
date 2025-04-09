import React from "react";

const Footer = () => {
  return (
    <div className="bg-white">
      <footer className="footer footer-horizontal footer-center p-10">
        <aside>
          <a className="text-3xl text-blue-700">
            Auction<span className="text-yellow-400 font-bold ">Gallery</span>
          </a>
            <ul className=" flex justify-center items-center gap-4 text-xl px-1">
              <li>
                <a>Bid.</a>
              </li>
              <li>
                <a>Win.</a>
              </li>
              <li>
                <a>Own.</a>
              </li>
            </ul>
            <br />
            <ul className=" flex justify-center items-center gap-6 text-l px-1">
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
          <p>
            Copyright © {new Date().getFullYear()} - AuctionHub. All rights
            reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
