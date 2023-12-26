import { urlFor } from "../../lib/client";
import React from "react";
import Link from "next/link";

export default function Categories({ category: { Title,slug, image, trending } }) {
  return (
    <Link href={`/category/${slug.current}`}>
      <div className="flex flex-col w-[30vh] bg-white shadow-2xl p-[2vh] ">
        <img
          src={urlFor(image)}
          className="w-[30vh] h-[35vh] object-cover"
          alt=""
        />
        <h2 className="text-[2.5vh] text-purple-600 font-medium text-center">
          {Title}
        </h2>
        <p className="text-center text-purple-400">{trending}</p>
      </div>
    </Link>
  );
}
