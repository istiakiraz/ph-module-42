import React from 'react';

const Header = () => {
    return (
        <div>
            <div
  className="hero h-[45.625rem]"
  style={{
    backgroundImage: "url(https://github.com/ProgrammingHero1/B11A7-Simple-React-Assignment/blob/main/assets/Banner-min.jpg?raw=true)",
  }}>
  <div className="hero-overlay"></div>
  <div className=" text-neutral-content w-10/12">
    <div className="max-w-[600px]">
      <h1 className="mb-5 text-5xl  font-bold">Bid on Unique Items from Around the World</h1>
      <p className="mb-5 text-2xl font-light">
      Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
      </p>
      <button className="btn rounded-4xl w-44 ">Explore Auctions</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;