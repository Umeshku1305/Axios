import React, { useState } from "react";
import axios from "axios";
const App = () => {
  const [ImageData, setImageData] = useState([]);
  const [CartData, setCartData] = useState([]);

  async function ClickBtn() {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data);
    setImageData(response.data);
    // setCartData(response.data)
    // console.log(setCartData[response.data]);.

    const CartCopyData = [...CartData];
    CartCopyData.push([response.data]);
    setCartData(CartCopyData);
  }
  return (
    <div className="p-10">
      <button
        onClick={ClickBtn}
        className=" absolute top-0 px-3 py-2 active:scale-95 bg-blue-300 rounded-lg"
      >
        GET products
      </button>

      {ImageData.map(function (item, idx) {
        return (
          <div
            key={idx}
            className="w-full h-screen bg-red-100 flex items-center justify-between  gap-4"
          >
            <div className=" h-screen w-[80%] bg-red-300">
              <div className="">
                <img
                  className=" h-60  border-2 px-1.5 py-3 border-amber-300"
                  src={item.image}
                />
                <p className="text-red-500">Price: {item.price}</p>
                <p className="text-blue-500">Category: {item.category}</p>
                {/* <p>Id: {item.id}</p> */}
                <button
                  className="px-3 py-2 bg-orange-500  rounded-md mt-3 m-5"
                  onClick={() => addToCart(item)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
            {CartData.map(function (item, index) {
              return (
                <div className="w-60">
                  <div key={index} className="">
                    <img
                      className=" h-40 w-40 border-2 px-1.5 py-3 border-amber-300"
                      src={item.image}
                    />
                    <p className="text-red-500">Price: {item.price}</p>
                    <p className="text-blue-500"> Category: {item.category}</p>
                    {/* <p>Id: {item[0].id}</p> */}
                    <button className="px-3 py-2 bg-orange-500  rounded-md mt-3 m-5">
                      Remove From Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default App;
