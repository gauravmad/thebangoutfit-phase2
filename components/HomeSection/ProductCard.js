import React from "react";
import Link from "next/link";
import { urlFor } from "../../lib/client";

export default function ProductCard({ product }) {
  const discount = () => {
    const discountPrice =
      product.cuttedproductprice - product.finalproductprice;
    const discountPercentage =
      (discountPrice / product.cuttedproductprice) * 100;
    return discountPercentage.toFixed(0);
    places;
  };

  return (
    <div
      key={product._id}
      className="product-item md:w-[15vw] w-[42vw] shadow-lg  "
    >
      <Link href={`/productdetail/${product.slug.current}`}>
        <div>
          <img
            src={urlFor(product.productimage).url()}
            alt={product.productitle}
            className="w-full h-[40vh] "
          />
          <span className="bg-white  text-[#1E9700] font-sans text-center px-[0.7vh] py-[0.2vh] font-bold text-[2vh] relative bottom-[39vh] left-[20vh] ">
            {discount()} % OFF
          </span>

          <div className="flex flex-col mx-[1.5vh] py-[1.5vh] ">
            <h3 className=" font-medium text-gray-600  ">
              {product.productitle}
            </h3>
            <div className="flex flex-row justify-between items-center mt-[1vh]">
              <p className="text-purple-800  font-medium">
                Rs.{product.finalproductprice}
              </p>
              <p className="text-red-500  font-medium">
                Rs.&nbsp;
                <span className="line-through">
                  {product.cuttedproductprice}
                </span>
              </p>
              <p>
                <span className="text-gray-600">4.3*</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
      {console.log(product)}
    </div>
  );
}
