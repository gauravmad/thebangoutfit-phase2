import { urlFor, client } from "../lib/client";
import { Categories, HomeBanner } from "../components";
import React, { useEffect, useState } from 'react';

export default function Home({ products, categorys, userdetails }) {
  return (
    <div>
      <HomeBanner />

      <div className="w-[90%] mx-auto my-[3vh] ">
        <h2 className="text-[3vh] font-semibold my-[2vh] ">Explore Categories</h2>
        <div className=" my-[2vh]  overflow-auto bg-green-100">
          <div className=" flex flex-row items-center gap-[2vh]  p-[2vh]">
            {categorys?.map((category) => (
              <Categories key={category._id} category={category} />
            ))}
          </div>
        </div>
      </div>

      {console.log(categorys)}
    </div>
  );
}

export const getServerSideProps = async () => {
  const userquery = '*[_type == "userdetails"]';
  const userdetails = await client.fetch(userquery);

  const productquery = '*[_type == "product"]';
  const products = await client.fetch(productquery);

  const categoryquery = '*[_type == "category"]';
  const categorys = await client.fetch(categoryquery);

  return {
    props: { products, categorys, userdetails },
  };
}
