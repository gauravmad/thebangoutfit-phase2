import { urlFor, client } from "../lib/client";
import { Navbar } from "../components";

export default function Home({products, category, userdetails}) {
  return (
    <>
      <h2>Hello World</h2>
    </> 
  )
}

export const getServerSideProps = async ()=>{

  const userquery = '*[_type == "userdetails"]';
  const userdetails = await client.fetch(userquery);

  const productquery = '*[_type == "product"]';
  const products = await client.fetch(productquery)

  const categoryquery = '*[_type == "category"]';
  const category = await client.fetch(categoryquery);

  return{
    props:{products, category, userdetails}
  }
}