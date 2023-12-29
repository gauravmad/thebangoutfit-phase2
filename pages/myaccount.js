import React from "react";
import { client } from "../lib/client";
import { useSession, getSession, signIn, signOut } from "next-auth/react";

import { SignIn, AccountDetails, AccountSidebar } from "../components";

export default function myaccount() {
  const { data: session } = useSession();

  if (session) {
    const { user } = session;
    return (
      <div className="w-[90%] flex flex-col md:flex-row justify-evenly mx-auto  ">
        <AccountSidebar />
        <AccountDetails user={user}/>
      </div>
    );
  } else {
    return (
      <div>
        <SignIn />
      </div>
    );
  }
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  let userdetails = null;

  if (session) {
    const user = session.user;
    const { email, name: fullName } = user;
    // const [firstName, lastName] = fullName.split(' ');

    const userQuery = '*[_type == "userdetails" && emailid == $email]';
    userdetails = await client.fetch(userQuery, { email });
  }

  return {
    props: {
      userdetails: userdetails || null,
    },
  };
};