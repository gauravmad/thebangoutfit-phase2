import React from "react";
import Link from "next/link";
import { urlFor } from "../../lib/client";

export default function ProductCard({ product }) {
  return (
    <div key={product._id} className="product-item md:w-[15vw] w-[42vw] shadow-lg ">
      <Link href={`/productdetail/${product.slug.current}`}>
        <div className="bg-slate-100">
          <img
            src={urlFor(product.productimage).url()}
            alt={product.productitle}
            className="w-full h-[40vh] "
          />
          <div className="bg-white text-[#1E9700] font-sans text-center p-[0.8vh]">
              55% OFF
            </div>



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
