import React from "react";
import { client, urlFor } from "../lib/client";
import { ProductCard } from "../components";

export default function men({ products }) {
  return (
    <div className="w-[95vw] mx-auto mb-[10vh] ">
      <h2 className="text-[5vh] py-[5vh] mb-[5vh] text-center text-purple-800 border-b-2 font-medium font-sans">
        Men Section
      </h2>

      <div className="flex flex-col-reverse md:flex-row justify-evenly">
        <div className="m-[5vh] md:m-[1vh] h-[100vh] shadow-2xl  ">
          <div className="bg-[#9E00FF1A] p-[2vh]"><h1 className="text-[3vh]">Category</h1></div>
          <div className="pr-[2vh]">
            <h2 className="m-[2vh] text-[3vh] text-gray-700">Indian & Fusion Wear</h2>
            <ul className="px-[2vh]">
              <li className="mb-[1vh]"><label className=" text-[2.5vh] text-gray-500"><input type="checkbox" className="w-[3vh] h-[2.3vh] " />Kurtas</label></li>
              <li className="mb-[1vh]"><label className=" text-[2.5vh] text-gray-500"><input type="checkbox" className="w-[3vh] h-[2.3vh] " />Sherwani</label></li>
              <li className="mb-[1vh]"><label className=" text-[2.5vh] text-gray-500"><input type="checkbox" className="w-[3vh] h-[2.3vh] " />Dhoti</label></li>
              <li className="mb-[1vh]"><label className=" text-[2.5vh] text-gray-500"><input type="checkbox" className="w-[3vh] h-[2.3vh] " />Pathani</label></li>
            </ul>
          </div>
          <div>
            <h2 className="m-[2vh] text-[3vh] text-gray-700">Western Wear</h2>
            <ul className="px-[2vh]">
              <li className="mb-[1vh]"><label className=" text-[2.5vh] text-gray-500"><input type="checkbox" className="w-[3vh] h-[2.3vh] " />Formal Shirts</label></li>
              <li className="mb-[1vh]"><label className=" text-[2.5vh] text-gray-500"><input type="checkbox" className="w-[3vh] h-[2.3vh] " />T-Shirts</label></li>
              <li className="mb-[1vh]"><label className=" text-[2.5vh] text-gray-500"><input type="checkbox" className="w-[3vh] h-[2.3vh] " />Trousers</label></li>
              <li className="mb-[1vh]"><label className=" text-[2.5vh] text-gray-500"><input type="checkbox" className="w-[3vh] h-[2.3vh] " />Joggers</label></li>
              <li className="mb-[1vh]"><label className=" text-[2.5vh] text-gray-500"><input type="checkbox" className="w-[3vh] h-[2.3vh] " />Sneakers</label></li>
            </ul>
          </div>
          <div>
            <h2 className="m-[2vh] text-[3vh] text-gray-700">Foot Wear</h2>
            <ul className="px-[2vh]">
              <li className="mb-[1vh]"><label className=" text-[2.5vh] text-gray-500"><input type="checkbox" className="w-[3vh] h-[2.3vh] " />Slider</label></li>
              <li className="mb-[1vh]"><label className=" text-[2.5vh] text-gray-500"><input type="checkbox" className="w-[3vh] h-[2.3vh] " />Crocs</label></li>
              <li className="mb-[1vh]"><label className=" text-[2.5vh] text-gray-500"><input type="checkbox" className="w-[3vh] h-[2.3vh] " />Formal Shoes</label></li>
              <li className="mb-[1vh]"><label className=" text-[2.5vh] text-gray-500"><input type="checkbox" className="w-[3vh] h-[2.3vh] " />Flip-Flop</label></li>
              <li className="mb-[1vh]"><label className=" text-[2.5vh] text-gray-500"><input type="checkbox" className="w-[3vh] h-[2.3vh] " />Sneakers</label></li>
            </ul>
          </div>
        </div>

        <div>
          <div className="h-[50%] overflow-y-scroll ">
            {products.length === 0 ? (
              <div>
                <h2>No Products Found</h2>
              </div>
            ) : (
              <div className="products-container flex flex-row flex-wrap w-full md:w-[72vw] justify-center my-[3vh] gap-[3vh]">
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
