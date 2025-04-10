import React, { useEffect, useState } from "react";
import Item from "../Item/Item";

const Items = ({handleFavorite, handleAmountSum, removeFromFavorites,resetItemId}) => {

    const [items, setItems]= useState([])

    useEffect(()=>{
        fetch("Items.json")
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])

  return (
    

    <div>
      <div className="bg-white pt-3 rounded-2xl pb-3 mb-5 ">
      <div className="border-b border-gray-300">
          <div className="flex justify-between w-11/12 mx-auto mt-8 text-xl mb-8  ">
            <div>Items</div>
            <div className="flex justify-around gap-20">
              <p>Current Bid</p>
              <p>Time Left</p>
              <p>Bid Now</p>
            </div>
          </div>
        </div>
        {
            items.map((item)=><Item item={item} handleFavorite={handleFavorite} handleAmountSum={handleAmountSum} removeFromFavorites={removeFromFavorites} key={item.id} resetItemId={resetItemId} ></Item>)
        }
      </div>
    </div>
  );
};

export default Items;
