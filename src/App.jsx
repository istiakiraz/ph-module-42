import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Items from "./components/Items/Items";
import { FaRegHeart } from "react-icons/fa";
import { TbXboxX } from "react-icons/tb";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [favoriteList, setFavoriteList] = useState([]);
  const [amountSum, setAmountSum] = useState(0);
  const [showInfo, setShowInfo] = useState(true);
  const [resetItemId, setResetItemId] = useState(null);
 


  const handleFavorite = (item) => {
    setFavoriteList([...favoriteList, item]);
    handleAmountSum(item.currentBidPrice);
    toast("🦄 Item Added to your Favorite Lists");
    setShowInfo(false);
  };

  const removeFromFavorites = (id, price) => {
    setFavoriteList(favoriteList.filter((item) => item.id !== id));
    setAmountSum(amountSum - price);
    toast.info("Remove Item to your Favorite Lists");
  };

  const handleAmountSum = (amount) => {
    setAmountSum(amountSum + amount);
  };

  return (
    <>
      <div className="bg-[#ebf0f5]">
        <Navbar></Navbar>
        <Header></Header>
        <div className="w-10/12 mx-auto mb-14">
          <div className="mt-[8.25rem] mb-[2rem]">
            <h1 className="text-[2rem] text-[#0E2954]">Active Auctions</h1>
            <p className="text-gray-600 text-xl">
              Discover and bid on extraordinary items
            </p>
          </div>

          <div className="flex lg:gap-6 flex-col lg:flex-row">
            <div className="lg:w-[70%]">
              <Items
                handleFavorite={handleFavorite}
                removeFromFavorites={removeFromFavorites}
                resetItemId={resetItemId}
              ></Items>
              <ToastContainer />
            </div>

            <div className="lg:w-[30%]">
              <ul className="list bg-base-100 rounded-2xl">
                <li className="text-3xl font-semibold text-[#0E2954] flex justify-center items-center gap-2 border-b border-gray-300 pb-8 pt-8">
                  <span>
                    <FaRegHeart size={20} />
                  </span>{" "}
                  <span>Favorite Items</span>
                </li>

                {showInfo && (
                  <div className="pt-12 text-center border-b border-gray-300 pb-8 ">
                    <h1 className="text-2xl font-semibold mb-6">
                      No favorites yet
                    </h1>
                    <p className="text-xl opacity-75 ">
                      Click the heart icon on any item <br /> to add it to your
                      favorites
                    </p>
                  </div>
                )}

                {favoriteList.map((listed) => (
                  <li key={listed.id} className="list-row">
                    <div>
                      <img
                        className="size-18 object-cover"
                        src={listed.image}
                      />
                    </div>
                    <div>
                      <div className="truncate w-75 text-xl font-semibold">
                        {listed.title}
                      </div>
                      <br />
                      <div className="text-xl space-x-6 -mt-3 ">
                        <span>${listed.currentBidPrice}</span>{" "}
                        <span>Bids: {listed.bidsCount}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        removeFromFavorites(listed.id, listed.currentBidPrice);
                        setResetItemId(listed.id);
                      }}
                      className="btn btn-square hover:bg-red-100 btn-ghost"
                    >
                      <span>
                        <TbXboxX size={25} />
                      </span>
                    </button>
                  </li>
                ))}

                <div>
                  <h1 className="flex justify-center gap-12 text-2xl p-8 font-semibold">
                    <span>Total bids Amount</span>
                    <span>${amountSum.toString().padStart(4, '0')}</span>
                  </h1>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
