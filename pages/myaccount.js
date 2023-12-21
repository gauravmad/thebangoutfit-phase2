import React from 'react'
import { client } from '../lib/client';

export default function myaccount({userdetails}) {
  return (
    <div>
      My Account
      {console.log(userdetails)}
      {userdetails && userdetails[0] &&(
        <h2>{userdetails[0].firstname}</h2>
      )}
    </div>
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