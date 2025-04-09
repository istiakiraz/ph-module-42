import React, { useEffect, useState } from "react";

const Items = () => {

    const [items, setItems]= useState([])

    useEffect(()=>{
        fetch("Items.json")
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])

    console.log(items);

  return (
    // <div>
    //   <ul className="list bg-base-100 rounded-box shadow-md">
    //     <div className="border-b border-gray-300">
    //       <div className="flex justify-between w-11/12 mx-auto mt-8 text-xl mb-8  ">
    //         <div>Items</div>
    //         <div className="flex justify-around gap-20">
    //           <li>Current Bid</li>
    //           <li>Time Left</li>
    //           <li>Bid Now</li>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="border-b border-gray-300">
    //     <div className="w-11/12 mx-auto">
    //       <div className="list-row">
    //         <div>
    //           <img
    //             className="size-18"
    //             src="https://img.daisyui.com/images/profile/demo/1@94.webp"
    //           />
    //         </div>
    //         <div>
    //           <div className="text-[1.125rem] text-gray-600 ">Vintage Leica M3 Camera</div>
    //         </div>

    //         <div className="flex justify-around gap-28">
    //           <li className="text-[1.125rem] text-gray-600 ">$2,850</li>
    //           <li className="text-[1.125rem] text-gray-600 ">2 Days left</li>
    //           <li className="text-[1.125rem] text-gray-600 ">
    //             <a>
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 strokeWidth={1.5}
    //                 stroke="currentColor"
    //                 className="size-6"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
    //                 />
    //               </svg>
    //             </a>
    //           </li>
    //         </div>
    //       </div>
    //     </div>
    //     </div>
    //   </ul>
    // </div>

    <div>
        {
            items.map((item)=><Items></Items>)
        }
    </div>
  );
};

export default Items;
