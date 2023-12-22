import React from 'react'
import { client } from '../lib/client';
import { useSession , signIn, signOut} from "next-auth/react";

import { SignIn, AccountDetails, AccountSidebar } from '../components';

export default function myaccount({userdetails}) {

  const { data:session}= useSession();

  if(session){
    const {user} = session;
    return(
      <div className='w-[90%] mx-auto'>
        <AccountSidebar/>
        <AccountDetails/>
      </div>

    )
  } else{
    return(
      <div>
        <SignIn/>
      </div>
    )

  }

}

export const getServerSideProps = async ()=>{

  const userquery = '*[_type == "userdetails"]';
  const userdetails = await client.fetch(userquery);

  return{
    props:{userdetails}
  }
}