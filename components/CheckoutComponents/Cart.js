import React, { useEffect } from "react";
import { useStateContext } from "../../context/StateContext";
import { urlFor } from "../../lib/client";

export default function Cart() {

  const { cartItems, totalPrice,setTotalPrice, onAdd, incQty, decQty, clearCart, removeProduct } = useStateContext();

  return (
    <div className="">
      <h1 className="text-[4vh] font-semibold my-[4vh] text-center">My Cart</h1>
      <button onClick={clearCart} className="text-[2vh] mb-4 bg-red-500 text-white px-3 py-1 rounded">
        Clear Cart
      </button>
      {cartItems.length > 0 ? (
        <div className="w-[100%]">
          {cartItems.map((product) => (
            <div key={product._id} className="border p-4 mb-4">
              <img
                src={urlFor(product.productimage)}
                alt={product.productitle}
                className="w-20 h-20 object-cover rounded"
              />
              <h3 className="text-xl font-semibold">{product.productitle}</h3>

              <p className="text-gray-600">MRP: Rs.{product.finalproductprice}</p>
              <p className="text-gray-600">Size: {product.selectedSize}</p>

              <div className="flex items-center mt-2">
                
                <div className="flex items-center border rounded">
                  <button onClick={() => decQty(product)} className="px-2">
                    -
                  </button>
                  <span className="px-2">{product.quantity}</span>
                  <button onClick={() => incQty(product)} className="px-2">
                    +
                  </button>
                </div>

                <button onClick={() => removeProduct(product._id)} className="text-[2.5vh] font-medium text-red-500 ml-auto">
                  Remove
                </button>

              </div>
            </div>
          ))}
          <p className="text-xl font-semibold text-right">
            Total Price: Rs.{totalPrice} 
          </p>
        </div>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </div>
  );
}