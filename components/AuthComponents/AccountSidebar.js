import React from "react";
import { useSession, signOut } from "next-auth/react";

export default function AccountSidebar() {

  const { data: session } = useSession();
  const {user} = session;

  return (
    <div className="w-[20vw] bg-fuchsia-800">
      <h2 className="text-[3vh] my-[5vh] text-center">My Account</h2>
      <div>
        <img className="w-[20vh]" src={user?.image} alt="profile" />
        <p className="text-[3vh] font-medium my-[0.5vh]">Name: {user?.name}</p>
        <p className="text-[3vh] font-normal my-[0.5vh]">Email: {user.email}</p>
      </div>
      <button onClick={signOut} className="my-[1vh] text-[2.5vh] p-[1.5vh] bg-red-500 text-white">
        LogOut
      </button>
    </div>
  );
}

