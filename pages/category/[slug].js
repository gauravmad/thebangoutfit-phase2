import React from "react";
import { client, urlFor } from "../../lib/client";
import Link from "next/link";

export default function CategoryProduct({ products, category }) {
  return (
    <>
      <div className="w-[90%] mx-auto p-[2vh]">
        <h2 className="text-[3vh] font-semibold text-center my-[3vh]">
          {category.Title}
        </h2>
        {/* Displaying products */}

        <div className="products-container flex flex-row flex-wrap justify-center gap-[3vh]">
          {products.map((product) => (
            <div
              key={product._id}
              className="product-item w-[30vh] p-[2vh] bg-white shadow-2xl"
            >
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
                  <div className="flex flex-row  justify-between items-center">
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
            </div>
          ))}
        </div>
        {/* {console.log(products)} */}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;

  const categoryQuery = `*[_type == "category" && slug.current == $slug][0]`;
  const category = await client.fetch(categoryQuery, { slug });

  if (!category) {
    return {
      notFound: true,
    };
  }

  const productsQuery = `*[_type == "product" && references($category._id)]`;
  const products = await client.fetch(productsQuery, { category });

  return {
    props: {
      category,
      products,
    },
  };
}
