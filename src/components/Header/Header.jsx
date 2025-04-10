import React from 'react';

const Header = () => {
    return (
        <div>
            <div
  className="hero h-[45.625rem]"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/ksJVGw8n/Banner-min.jpg)",
  }}>
  <div className="hero-overlay"></div>
  <div className=" text-neutral-content w-10/12">
    <div className="max-w-[650px]">
      <h1 className="mb-5 text-5xl font-semibold">Bid on Unique Items from Around the World</h1>
      <p className="mb-5 text-2xl font-light">
      Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
      </p>
      <button className="btn rounded-[35px] w-44 ">Explore Auctions</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;