import React, {useState} from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useStateContext } from "../../context/StateContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {

  
  const { data: session } = useSession();
  const router = useRouter();

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

  function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
    sidebar.classList.add("slideInRight");
    sidebar.classList.remove("slideInLeft");
  }

  function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.add("slideInLeft");
    setTimeout(() => {
      sidebar.style.display = "none";
    }, 500);
  }
  const buttonDisplay = () => {
    const signInButton = document.querySelector('.signInButton');
    signInButton.classList.remove('hidden'); // Show the sign-in button
  }
  
  const buttonHide = () => {
    const signInButton = document.querySelector('.signInButton');
    signInButton.classList.add('hidden'); // Hide the sign-in button
  }

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Perform search logic or navigation
    router.push(`/search?query=${searchTerm}`);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };


  return (
    <div className=' pb-[2vh] w-full navbar flex md:flex-col lg:flex-col shadow-lg'>

      <div className='my-[1vh] flex flex-row justify-evenly items-center p-[1vh]'>
        
        <div>
          <Link href="/"><img src='/logo.png' className='w-[6vh] md:w-[10vh]  md:mx-[1vh] shadow-2xlxl' alt='' /></Link>
        </div>

        <div className="relative ">
          <input
            type="text"
            placeholder="Search for the Clothing, Men, Women, Footwears etc"
            className="text-[1vh] w-[52vw] h-[4vh] rounded-md mx-[1vh] md:text-[2.5vh] md:w-[65vw] md:h-[6vh] pl-[1vh] md:px-[2vh] border-gray-800 border-[0.2vh] bg-white text-gray-800"
            value={searchTerm}
            onChange={handleChange}
          />

          <Link href="/search">
          <SearchIcon
            onClick={handleSearch}
            fontSize="small"
            className="absolute right-[2vh] text-gray-800 top-[0.8vh]  md:right-[3vh] md:top-[1vh]"
          />
          </Link>
        </div>

        <div className='flex flex-row items-center  '>
          <div className='flex  items-center  '>
            {session ? (
              <div onClick={handleProfileClick} >
                <img
                  src={session.user.image}
                  alt='Profile'
                  className='profilepicicon w-[10vh] mr-[1.5vh] cursor-pointer '
                />
              </div>

            ) : (
              <Link href="/myaccount" className='profileIcon' >
                <AccountCircleIcon className='profilepicicon text-[#431751] text-[5vh] md:text-[7vh] lg:text-[8vh] ' />
                
              </Link>
            )}

            <div onMouseEnter={buttonDisplay} onMouseLeave={buttonHide}  className='signInButton  hidden'>
              <div className='absolute  triangle'></div>
              <button 
                onClick={handleSignInOut}
                className={`p-[1.5vh] rounded-lg w-full text-white text-[2.5vh] font-semibold ${session ? 'bg-red-600' : 'bg-purple-600'
                  } active:bg-purple-800`}
              >
                {session ? 'Logout' : 'Sign In'}
              </button>
              <p className='text-center'>New User! Please Sign in</p>
            </div>
          </div>

          <div className="relative">
            <Link href='/cart'>
            <ShoppingBagIcon className='text-[#431751] text-[5vh] md:ml-[5vh] md:text-[7vh] lg:text-[8vh]' />
            </Link>
              <p className="bg-purple-400 text-black absolute -top-[1vh] -right-[1vh] p-[0.5vh] text-[1.5vh] md:text-[2vh] font-semibold rounded-2xl ">
                20
              </p>
          </div>
          
        </div>
       
      </div>

      <div>
        <nav>
          <ul className="sidebar">
            <li onClick={hideSidebar}>
              <Link
                href="/"
                className="block text-left px-[1vh] py-[0.5vh] text-[3vh] text-gray-700 navlink"
              >
                <CloseIcon />
              </Link>
            </li>
            <li onClick={hideSidebar}>
              <Link
                href="/"
                className="w-full block text-center px-[1vh] py-[0.5vh] text-[3vh] text-gray-700 navlink"
              >
                HOME
              </Link>
            </li>
            <li onClick={hideSidebar}>
              <Link
                href="/aboutus"
                className="w-full block text-center px-[1vh] py-[0.5vh] text-[3vh] text-gray-700 navlink"
              >
                ABOUT US
              </Link>
            </li>
            <li onClick={hideSidebar}>
              <Link
                href="/men"
                className="w-full block text-center px-[1vh] py-[0.5vh] text-[3vh] text-gray-700 navlink"
              >
                MEN
              </Link>
            </li>
            <li onClick={hideSidebar}>
              <Link
                href="/women"
                className="w-full block text-center px-[1vh] py-[0.5vh] text-[3vh] text-gray-700 navlink"
              >
                WOMEN
              </Link>
            </li>
            <li onClick={hideSidebar}>
              <Link
                href="/kids"
                className="w-full block text-center px-[1vh] py-[0.5vh] text-[3vh] text-gray-700 navlink"
              >
                KIDS
              </Link>
            </li>
            <li onClick={hideSidebar}>
              <Link
                href="/contact"
                className="w-full block text-center px-[1vh] py-[0.5vh] text-[3vh] text-gray-700 navlink"
              >
                CONTACT US
              </Link>
            </li>
          </ul>


          <ul className="navbar-links flex justify-evenly ">
            <li className="hideOnMobile">
              <Link
                href="/"
                className="px-[1vh] py-[0.5vh] text-[3vh] text-gray-700 navlink"
              >
                HOME
              </Link>
            </li>
            <li className="hideOnMobile">
              <Link
                href="/aboutus"
                className="px-[1vh] py-[0.5vh] text-[3vh] text-gray-700 navlink"
              >
                ABOUT US
              </Link>
            </li>
            <li className="hideOnMobile">
              <Link
                href="/men"
                className="px-[1vh] py-[0.5vh] text-[3vh] text-gray-700 navlink"
              >
                MEN
              </Link>
            </li>
            <li className="hideOnMobile">
              <Link
                href="/women"
                className="px-[1vh] py-[0.5vh] text-[3vh] text-gray-700 navlink"
              >
                WOMEN
              </Link>
            </li>
            <li className="hideOnMobile">
              <Link
                href="/kids"
                className="px-[1vh] py-[0.5vh] text-[3vh] text-gray-700 navlink"
              >
                KIDS
              </Link>
            </li>
            <li className="hideOnMobile">
              <Link
                href="/contact"
                className="px-[1vh] py-[0.5vh] text-[3vh] text-gray-700 navlink"
              >
                CONTACT US
              </Link>
            </li>
            <li className="menu-button" onClick={showSidebar}>
              <Link
                href="/"
                className="px-[1vh] py-[0.5vh]  text-gray-700 navlink"
              >
                <MenuIcon fontSize="large" className="text-[#692a91] " />
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    </div>
  );
}

