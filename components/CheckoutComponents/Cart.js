import React, {useEffect} from 'react';
import { useStateContext } from "../../context/StateContext";
import { urlFor } from '../../lib/client';

export default function Cart() {
  const {
    cartItems,
    totalPrice,
    onAdd,
    incQty,
    decQty,
  } = useStateContext();

  const saveCartToSanity = async () => {
    try {
      const response = await fetch('/api/saveCartItems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: 'emailid',
          cartItems: cartItems,
        }),
      });

      if (response.ok) {
        console.log('Cart items saved to Sanity!');
      } else {
        console.error('Failed to save cart items to Sanity.');
      }
    } catch (error) {
      console.error('Error saving cart items:', error);
    }
  };

  // Trigger the saveCartToSanity function when cartItems change
  useEffect(() => {
    saveCartToSanity();
  }, [cartItems]);

  return (
    <div className=''>
      <h1 className='text-[4vh] font-semibold my-[4vh] text-center'>My Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((product) => (
            <div key={product._id} className="border p-4 mb-4">
              <img src={urlFor(product.productimage)} alt={product.productitle} className="w-20 h-20 object-cover rounded" />
              <h3 className="text-xl font-semibold">{product.productitle}</h3>
              <p className="text-gray-600">MRP: ${product.price}</p>
              <div className="flex items-center mt-2">
                <button onClick={() => onAdd(product, 1)} className="bg-blue-500 text-white px-2 py-1 mr-2">Add More</button>
                <div className="flex items-center border rounded">
                  <button onClick={decQty} className="px-2">-</button>
                  <span className="px-2">{product.quantity}</span>
                  <button onClick={incQty} className="px-2">+</button>
                </div>
              </div>
            </div>
          ))}
          <p className="text-xl font-semibold text-right">Total Price: ${totalPrice}</p>
        </div>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </div>
  )
}
