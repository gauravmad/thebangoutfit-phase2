import React, { useState } from "react";
import { client, urlFor } from "../lib/client";
import { ProductCard } from "../components";

export default function men({ products }) {
  return (
    <div className="w-[90vw] mt-[8vh] md:w-full mx-auto  flex flex-col ">

      {/* Title Section */}
      <div>
        <h2 className="md:text-[5vh] text-[3vh] py-[3vh] md:py-[5vh] text-center text-gray-700 border-b-2 font-medium font-poppins ">
          Men Section
        </h2>
      </div>

      {/* Category Section */}
      <div className="flex flex-col-reverse md:flex-row ">
        <div className="pl-[5vh] w-full md:w-[26%] ">
          <h1>CATEGORIES</h1>
          <ul>
            <li><input type="checkbox" />T-shirts</li>
            <li><input type="checkbox" />Shirts</li>
            <li><input type="checkbox" />Sweatshirts</li>
            <li><input type="checkbox" />Kurtas</li>
            <li><input type="checkbox" />Jackets</li>
            <li><input type="checkbox" />Sweaters</li>
            <li><input type="checkbox" />Blazers</li>
          </ul>
        </div>


        {/* Product Display Section */}
        <div>
          <div className=" md:mr-[5vh] ">
            {products.length === 0 ? (
              <div>
                <h2>No Products Found</h2>
              </div>
            ) : (
              <div className="products-container flex flex-row flex-wrap w-full  justify-around   gap-[3vh]">
                {products.map((product) => (
                  <ProductCard product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const productquery =
    '*[_type == "product" && (gender == "men" || gender == "unisex")]';
  const products = await client.fetch(productquery);

  const categoryquery =
    '*[_type == "category" && (gender == "men" || gender == "unisex")]';
  const categorys = await client.fetch(categoryquery);

  return {
    props: { products, categorys },
  };
};
