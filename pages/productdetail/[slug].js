import React, { useState } from "react";
import { client, urlFor } from "../../lib/client";

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
                  <div key={s} className="mb-[2vh] flex flex-row">
                    <button className="text-[3.5vh] w-[7vh] h-[7vh]  bg-purple-100 rounded-full shadow-2xl">
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
                  <div key={w} className="mb-[2vh] flex flex-row">
                    <button className="text-[3.5vh] w-[7vh] h-[7vh] bg-purple-100 rounded-full shadow-2xl">
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
                  <div key={f} className="mb-[2vh] flex flex-row">
                    <button className="text-[3.5vh] w-[7vh] h-[7vh] bg-purple-100 rounded-full shadow-2xl">
                      {f}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <button className="text-[3.5vh] mr-[2vh] text-white bg-purple-600 px-[4vh] py-[1.5vh]">Add to Cart</button>
            <button className="text-[3.5vh] text-white bg-purple-600 px-[4vh] py-[1.5vh]">Buy Now</button>
          </div>

        </div>
      </div>

      {console.log(product)}
      <h3></h3>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params; // Retrieve slug from the URL
  // Fetch the product based on the slug
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
