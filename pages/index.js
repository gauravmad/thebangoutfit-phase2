import { urlFor, client } from "../lib/client";
import { Categories, HomeBanner } from "../components";

export default function Home({ products, categorys, userdetails }) {
  return (
    <div>
      <HomeBanner />

      <div className="w-[90%] mx-auto">
        <h2 className="text-[3vh] font-semibold my-[2vh]">Explore Categories</h2>  
        <div className="bg-green-100 flex flex-row flex-wrap gap-[1vh] p-[1vh] justify-around">
        {categorys?.map((category) => (
          <Categories key={category._id} category={category} />
          ))}
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
