import { FaRegHeart, FaHeart } from "react-icons/fa";
import React, { useState } from 'react'; 


const Item = ({item, handleFavorite, handleAmountSum, removeFromFavorites}) => {

        const [liked, setLiked] = useState(false);
    const toggleLike = () => {
        setLiked(!liked);
      };

    return (
        <div>
            
            <div>
      <ul className="list bg-base-100  ">
        <div className="border-b border-gray-300">
        <div className="w-11/12 mx-auto">
          <div className="list-row">
            <div>
              <img
                className="size-18 object-cover"
                src={item.image}
              />
            </div>
            <div>
              <div className="text-[1.125rem] text-gray-600 ">{item.title}</div>
            </div>

            <div className="flex justify-around gap-28">
              <li className="text-[1.125rem] text-gray-600 ">${item.currentBidPrice}</li>
              <li className="text-[1.125rem] text-gray-600 ">{item.timeLeft}</li>
              <li className="text-[1.125rem] text-gray-600 ">
               <button
                    onClick={()=>{
                        toggleLike()
                        handleFavorite(item)
                        handleAmountSum(item.currentBidPrice)
                        
                    }}
                    disabled={liked}
                    className={`text-xl  ${liked  ? "btn-disabled cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    {liked ? <FaHeart color="red" /> : <FaRegHeart color="gray" />}
                  </button>
                  
              </li>
            </div>
          </div>
        </div>
        </div>
      </ul>
    </div>
            
        </div>
    );
};

export default Item;