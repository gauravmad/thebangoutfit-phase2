import React, { useState } from "react";
import { client, urlFor } from "../../lib/client";
import {useStateContext } from "../../context/StateContext";
import { toast } from "react-hot-toast";

export default function ProductDetail({ product }) {
  const {
    productitle,
    productimage,
    productvarieties,
    productType,
    productdesc,
    availability,
    finalproductprice,
    cuttedproductprice,
    size,
    waistSize,
    footwearuksize,
  } = product;

  const [isAvailable, setIsAvailable] = useState(availability);

  const [selectedSize, setSelectedSize] = useState(null);

  const {onAdd,qty}=useStateContext();

  const addToCart=()=>{
    if(!selectedSize){
      toast.error('Please select size!')
    }else{
      onAdd({...product,selectedSize},qty);
    }
  };
  
  
  return (
    <div className="w-[80%] mx-auto my-[6vh]">
      <h2 className="text-[3vh] font-medium text-center my-[3vh]">
        ProductDetail
      </h2>

      <div className="flex flex-row justify-start gap-[3vh]">
        <div className="w-[30%] mr-[4vh]">
          <img
            src={urlFor(productimage)}
            className="w-[55vh] h-[70vh] p-[1vh] bg-white shadow-2xl "
            alt="productimage"
          />
          <div className="flex flex-row justify-around my-[3vh]">
            <img
              src={urlFor(productimage)}
              className=" bg-purple-300 p-[1vh] w-[12vh]"
              alt=""
            />
            <img
              src={urlFor(productimage)}
              className=" bg-purple-300 p-[1vh] w-[12vh]"
              alt=""
            />
            <img
              src={urlFor(productimage)}
              className=" bg-purple-300 p-[1vh] w-[12vh]"
              alt=""
            />
            <img
              src={urlFor(productimage)}
              className=" bg-purple-300 p-[1vh] w-[12vh]"
              alt=""
            />
          </div>
        </div>

        <div className="w-[60%]">
          <h2 className="text-[4vh] font-medium text-gray-700">
            {productitle}
          </h2>
          <h3 className="text-[3vh]">{productdesc}</h3>
          <p
            className={`text-[3vh] font-medium ${
              isAvailable ? "text-green-600" : "text-red-500"
            }`}
          >
            {isAvailable ? "In Stock" : "Out of Stock"}
          </p>

          <div className="flex flex-row  justify-start items-center">
            <p className="text-purple-800 text-[3.9vh] font-semibold mr-[3vh]">
              Rs. {finalproductprice}
            </p>
            <p className="text-red-500 text-[3.4vh] font-semibold">
              Rs. &nbsp;
              <span className="line-through">{cuttedproductprice}</span>
            </p>
          </div>

          {productType === "topwear" && (
            <div>
              <h2 className="text-[3vh] my-[2vh]">Available in Sizes</h2>
              <div className="flex flex-row gap-[2vh]">
                {size.map((s) => (
                  <div 
                    key={s} 
                    className="mb-[2vh] flex flex-row"
                    onClick={()=>setSelectedSize(s)}
                  >
                    <button 
                      className={`text-[3.5vh] w-[7vh] h-[7vh]  bg-purple-100 rounded-full shadow-2xl ${selectedSize === s ? 'border border-purple-600':''}`}
                      onClick={()=>setSelectedSize(s)}
                    >
                      {s}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {productType === "bottomwear" && (
            <div>
              <h2 className="text-[3vh] my-[2vh]">Available in Sizes</h2>
              <div className="flex flex-row gap-[2vh]">
                {waistSize.map((w) => (
                  <div 
                    key={w} 
                    className="mb-[2vh] flex flex-row"
                    onClick={()=>setSelectedSize(w)}
                  >
                    <button 
                      className={`text-[3.5vh] w-[7vh] h-[7vh] bg-purple-100 rounded-full shadow-2xl ${selectedSize === w ? 'border border-purple-500':''}`}
                      onClick={()=>setSelectedSize(w)}
                    >
                      {w}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {productType === "footwear" && (
            <div>
              <h2 className="text-[3vh] my-[2vh]">Available in Sizes (UK)</h2>
              <div className="flex flex-row gap-[2vh]">
                {footwearuksize.map((f) => (
                  <div 
                    key={f} 
                    className="mb-[2vh] flex flex-row"
                    onClick={()=>setSelectedSize(f)}
                  >
                    <button 
                      className={`text-[3.5vh] w-[7vh] h-[7vh] bg-purple-100 rounded-full shadow-2xl ${selectedSize === f ? 'border border-purple-500':''}`}
                      onClick={()=>setSelectedSize(f)}
                    >
                      {f}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <button 
              onClick={addToCart} 
              className="text-[3.5vh] mr-[2vh] text-white bg-purple-600 px-[4vh] py-[1.5vh]"
            >
              Add to Cart
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const productQuery = `*[_type == "product" && slug.current == $slug][0]`;
  const product = await client.fetch(productQuery, { slug });

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
}