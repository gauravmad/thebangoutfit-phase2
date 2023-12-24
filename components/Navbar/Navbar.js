import React from 'react';
import Link from "next/link"
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


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
      router.push('/myaccount');
    } else {
      router.push('/signin');
    }
  };

  function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
    sidebar.classList.add('slideInRight');
    sidebar.classList.remove('slideInLeft');
  }

  function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('slideInLeft');
    setTimeout(() => {
      sidebar.style.display = 'none';
    }, 500);

  }


  return (
    <div className=' pb-[2vh] w-full navbar'>

      <div className='w-[90%] mx-auto mb-[1vh] flex flex-row justify-between items-center p-[1vh]'>
        
        <div>
          <Link href="/"><img src='/logo.png' className='w-[10vh] shadow-2xlxl' alt='' /></Link>
        </div>
        
        <div className="relative ">
          <input
            type="text"
            placeholder="Search for the Clothing, Men, Women, Footwears etc"
            className="text-[1vh] w-[50vw] h-[3vh]  md:text-[2vh] md:w-[60vw] md:h-[5vh] pl-[1vh] md:px-[2vh] border-gray-800 border-[0.2vh] bg-white text-gray-800 "
          />
          <SearchIcon
            fontSize="small"
            className="absolute right-[0.5vh] top-[0.8vh]  md:right-[3vh] md:top-[1vh]"
          />
        </div>

        <div className='flex flex-row items-center justify-end'>
          <div className='flex flex-row items-center'>
            {session ? (
              <div onClick={handleProfileClick} className=''>
                <img
                  src={session.user.image}
                  alt='Profile'
                  className='profilepicicon w-[10vh] mr-[1.5vh] cursor-pointer '
                />
              </div>
            ) : (
              <Link href="/myaccount">
                <AccountCircleIcon className='profilepicicon text-[8vh] mr-[1.5vh]' />
              </Link>
            )}
            <ShoppingBagIcon className=' text-[8vh] mr-[1.5vh]' />
            <div className='signInButton'>
              <button
                onClick={handleSignInOut}
                className={`p-[1.5vh] rounded-lg text-white text-[2.5vh] font-semibold ${session ? 'bg-red-600' : 'bg-purple-600'
                  } active:bg-purple-800`}
              >
                {session ? 'Logout' : 'Sign In'}
              </button>
            </div>
          </div>
        </div>
        
      </div>


      <div>
        <nav>
          <ul className="sidebar" >
            <li onClick={hideSidebar}><Link href="/" className="block text-left px-[1vh] py-[0.5vh] text-[3vh] text-gray-700 navlink"  ><CloseIcon /></Link></li>
            <li onClick={hideSidebar}><Link href="/" className="w-full block text-center px-[1vh] py-[0.5vh] text-[3vh] text-gray-700 navlink"  >HOME</Link></li>
            <li onClick={hideSidebar}><Link href="/aboutus" className="w-full block text-center px-[1vh] py-[0.5vh] text-[3vh] text-gray-700 navlink" >ABOUT US</Link></li>
            <li onClick={hideSidebar}><Link href="/men" className="w-full block text-center px-[1vh] py-[0.5vh] text-[3vh] text-gray-700 navlink" >MEN</Link></li>
            <li onClick={hideSidebar}><Link href="/women" className="w-full block text-center px-[1vh] py-[0.5vh] text-[3vh] text-gray-700 navlink" >WOMEN</Link></li>
            <li onClick={hideSidebar}><Link href="/kids" className="w-full block text-center px-[1vh] py-[0.5vh] text-[3vh] text-gray-700 navlink" >CHILD</Link></li>
            <li onClick={hideSidebar}><Link href="/contact" className="w-full block text-center px-[1vh] py-[0.5vh] text-[3vh] text-gray-700 navlink" >CONTACT</Link></li>
          </ul>
          <ul className="flex justify-evenly " >
            <li className="hideOnMobile"><Link href="/" className="px-[1vh] py-[0.5vh] text-[3vh] text-gray-700 navlink"  >HOME</Link></li>
            <li className="hideOnMobile"><Link href="/aboutus" className="px-[1vh] py-[0.5vh] text-[3vh] text-gray-700 navlink" >ABOUT US</Link></li>
            <li className="hideOnMobile"><Link href="/men" className="px-[1vh] py-[0.5vh] text-[3vh] text-gray-700 navlink" >MEN</Link></li>
            <li className="hideOnMobile"><Link href="/women" className="px-[1vh] py-[0.5vh] text-[3vh] text-gray-700 navlink" >WOMEN</Link></li>
            <li className="hideOnMobile"><Link href="/kids" className="px-[1vh] py-[0.5vh] text-[3vh] text-gray-700 navlink" >KIDS</Link></li>
            <li className="hideOnMobile"><Link href="/contact" className="px-[1vh] py-[0.5vh] text-[3vh] text-gray-700 navlink" >CONTACT</Link></li>
            <li className="menu-button" onClick={showSidebar}><Link href="/" className="px-[1vh] py-[0.5vh]  text-gray-700 navlink" ><MenuIcon fontSize="large" className="text-[#692a91] " /></Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
