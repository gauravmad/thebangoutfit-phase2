import React from "react";
import { client, urlFor } from "../lib/client";
import { ProductCard } from "../components";


export default function men({products}) {
  return (
    <div className="w-[90%] mx-auto mb-[10vh]">
      <h2 className="text-[4vh] font-medium my-[4vh] text-center">
        MEN Section
      </h2>
      {console.log(products)}

      <div className="flex flex-row ">
        <div className="w-[20%] h-[100vh] bg-amber-50 shadow-2xl">
          Sidebar Section
        </div>

        <div className="w-[80%]">
          {products.length === 0 ? (
            <div>
              <h2>No Products Found</h2>
            </div>
          ) : (
            <div className="products-container flex flex-row flex-wrap justify-center gap-[3vh]">
              {products.map((product) => (
                <ProductCard product={product} />
              ))}
            </div>
          )}
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
