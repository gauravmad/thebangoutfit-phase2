import React from "react";
import Link from "next/link";
import { urlFor } from "../../lib/client";

export default function ProductCard({product}) {
  return (
    <div key={product._id} className="product-item w-[30vh] p-[2vh] bg-white shadow-2xl">
       <Link href={`/productdetail/${product.slug.current}`}>
        <div>
          <img
            src={urlFor(product.productimage).url()}
            alt={product.productitle}
            className="w-[30vh] h-[35vh] shadow-xl"
          />
          <h3 className="text-[2.5vh] font-medium my-[1vh]">
            {product.productitle}
          </h3>
          <div className="flex flex-row justify-between items-center">
            <p className="text-purple-800 text-[2.9vh] font-semibold">
              Rs. {product.finalproductprice}
            </p>
            <p className="text-red-500 text-[2.4vh] font-semibold">
              Rs. &nbsp;
              <span className="line-through">
                {product.cuttedproductprice}
              </span>
            </p>
          </div>
        </div>
      </Link>
      {console.log(product)}
    </div>
  );
}
