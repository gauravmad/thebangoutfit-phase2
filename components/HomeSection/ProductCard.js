import React from "react";
import Link from "next/link";
import { urlFor } from "../../lib/client";

export default function ProductCard({ product }) {
  return (
    <div key={product._id} className="product-item w-[34vh]  shadow-lg ">
      <Link href={`/productdetail/${product.slug.current}`}>
        <div className="bg-slate-100">
          <img
            src={urlFor(product.productimage).url()}
            alt={product.productitle}
            className="w-[90vh] h-[45vh] "
          />
          <div className="bg-white text-[#1E9700] font-sans text-center p-[0.8vh]">
              55% OFF
            </div>



          <div className="flex flex-col mx-[1.5vh] py-[1.5vh] ">
            
            <h3 className="text-[2.3vh] font-medium text-gray-600 ">
              {product.productitle}
            </h3>
            <div className="flex flex-row justify-between items-center mt-[1vh]">
              <p className="text-purple-800 text-[2.2vh] font-medium">
                Rs.{product.finalproductprice}
              </p>
              <p className="text-red-500 text-[2.2vh] font-medium">
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
