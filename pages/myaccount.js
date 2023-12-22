import React from "react";
import { client } from "../lib/client";
import { useSession, getSession, signIn, signOut } from "next-auth/react";

import { SignIn, AccountDetails, AccountSidebar } from "../components";

export default function myaccount({ userdetails }) {
  const { data: session } = useSession();

  if (session) {
    const { user } = session;
    return (
      <div className="w-[90%] mx-auto">
        <AccountSidebar />
        {userdetails && (
          <AccountDetails user={user} userdetails={userdetails} />
        )}
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
    const userquery = '*[_type == "userdetails"]';
    userdetails = await client.fetch(userquery);

    // Extract the user's image from the session
    const { user } = session;
    const userImage = user.image; // Update 'user.image' based on your session structure

    // If the user image is available and not already saved in the database
    if (
      userImage &&
      !userdetails.some((detail) => detail.userprofilepic === userImage)
    ) {
      try {
        // Save the user's image to the 'userdetails' collection in Sanity
        await client.create({
          _type: "userdetails",
          userprofilepic: userImage,
          // Other fields if needed
        });
      } catch (error) {
        console.error("Error saving user image:", error);
      }
    }

    // Save email, first name, and last name if not already present
    const { email, name: fullName } = user;
    const [firstName, lastName] = fullName.split(' '); // Splitting the full name into first and last name

    const userExists = userdetails.find(
      (detail) => detail.emailid === email && detail.firstname === firstName && detail.lastname === lastName
    );

    if (!userExists) {
      try {
        await client.create({
          _type: "userdetails",
          emailid: email,
          firstname: firstName,
          lastname: lastName,
          // Other fields if needed
        });
      } catch (error) {
        console.error("Error saving user details:", error);
      }
    }
  }

  return {
    props: {
      userdetails: userdetails || null,
    },
  };
};
