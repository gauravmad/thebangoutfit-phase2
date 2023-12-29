import React, { useState } from "react";
// import SignIn from "../AuthComponents/SignIn";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { useStateContext } from "../../context/StateContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();

  const [showSignInButton, setShowSignInButton] = useState(false);

  const handleSignInOut = async () => {
    if (session) {
      await signOut();
    } else {
      await signIn();
    }
  };

  const handleProfileClick = () => {
    if (session) {
      router.push("/myaccount");
    } else {
      router.push("/signin");
    }
  };

  // const handleMouseEnter = () => {
  //   setShowSignInButton(true);
  // };

  // const handleMouseLeave = () => {
  //   setShowSignInButton(false);
  // };

  const { totalQuantities } = useStateContext();

  return (
    <div className="navbar bg-white py-[1vh] shadow-md">
      <div className="w-[90%] mx-auto flex flex-row justify-between items-center">
        {/* Logo section */}
        <div>
          <Link href="/">
            <img
              src="/logo.png"
              className="w-[6vh] md:w-[8vh]  md:mx-[1vh] shadow-2xlxl"
              alt=""
            />
          </Link>
        </div>

        <div>
          <ul className="flex flex-row gap-x-[3vh]">
            <Link href="/">
              <li className="text-[2.5vh] font-medium">Home</li>
            </Link>
            <Link href="/aboutus">
              <li className="text-[2.5vh] font-medium">About</li>
            </Link>
            <Link href="/men">
              <li className="text-[2.5vh] font-medium">Men</li>
            </Link>
            <Link href="/women">
              <li className="text-[2.5vh] font-medium">Women</li>
            </Link>
            <Link href="/kids">
              <li className="text-[2.5vh] font-medium">Kids</li>
            </Link>
            <Link href="/contact">
              <li className="text-[2.5vh] font-medium">Contact</li>
            </Link>
          </ul>
        </div>

        <div className="flex flex-row justify-start items-center">
          <div className="border-2  border-gray-600 p-[1vh] flex flex-row items-center mr-[3vh]">
            <input
              type="text"
              placeholder="Search Clothing.."
              className="focus:outline-none w-[20vh]"
            />
            <Link href="">
              <FontAwesomeIcon
                className="text-gray-600 text-[2.5vh]"
                icon="fa-solid fa-magnifying-glass"
              />
            </Link>
          </div>

          <Link href="">
            <div
              className="mr-[2.5vh] relative"
              
            >
              {!session?(

              <FontAwesomeIcon
                className="text-[3.7vh] text-gray-600"
                icon="fa-solid fa-user"
              />
              ):(
                <img
                  src={session.user.image}
                  alt="Profile"
                  className="w-[7vh] rounded-full"
                />
              )}

              <div
                className={`absolute signHover top-[8vh] w-[13vw] -right-[12vh] p-[2vh] shadow-2xl bg-white bottom-[0vh]${
                  showSignInButton ? "shadow-2xl" : "hidden"
                }`}
              >
                <div className="absolute text-white triangle"></div>
                {!session?(

                  <div>
                    <button 
                      onClick={signIn}
                      className="bluebtn text-[2.5vh] w-full bg-purple-500 p-[1vh] rounded-lg flex flex-row justify-center items-center text-white font-semibold">
                      Sign In
                    </button>
                    <h2 className="text-center mt-[1vh]">Please Sign In!</h2>
                  </div>
                ):(
                  <div>
                    <Link href="/myaccount">
                    <div onClick={handleProfileClick} className="text-center mt-[1vh] flex flex-row items-center mb-[1.5vh]">
                      <FontAwesomeIcon
                        className="text-[3vh] ml-[0.5vh] text-gray-600"
                        icon="fa-solid fa-user"
                      />
                      <h2 className="text-[2.5vh] ml-[1.5vh]">My Account</h2>
                    </div>

                    </Link>
                    <button 
                      onClick={signOut}
                      className="redbtn text-[2.5vh] w-full bg-red-500 p-[1vh] rounded-lg flex flex-row justify-center items-center text-white font-semibold">
                      Logout
                    </button>
                  </div>
                )}

              </div>

            </div>
          </Link>

          <Link href="">
            <div className=" relative">
              <FontAwesomeIcon
                className="text-[3.7vh] text-gray-600"
                icon="fa-solid fa-cart-shopping"
              />

              <h1 className="bg-purple-700 w-[3.5vh] h-[3.5vh] rounded-full -top-[2vh] -right-[2vh] border-2 border-white text-[2.2vh] text-white absolute flex flex-row justify-center items-center">
                {totalQuantities}
              </h1>

            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
