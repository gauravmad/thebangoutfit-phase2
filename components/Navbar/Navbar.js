import React from 'react';
import Link from "next/link"
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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

  return (
    <div className='shadow-xl '>
      <div className='w-[90%] mx-auto mb-[1vh] flex flex-row justify-between items-center p-[1vh]'>
        <Link href="/">
          <img src='/logo.png' className='w-[10vh] shadow-2xlxl' alt='' />
        </Link>

        <div className='flex flex-row items-center justify-end'>
          <div className='flex flex-row items-center'>
            {session ? (
              <div onClick={handleProfileClick}>
                <img
                  src={session.user.image}
                  alt='Profile'
                  className='profilepicicon w-[10vh] mr-[1.5vh] cursor-pointer'
                />
              </div>
            ) : (
              <Link href="/myaccount">
                <AccountCircleIcon className='profilepicicon text-[8vh] mr-[1.5vh]'/>
              </Link>
            )}
            <div>
              <button
                onClick={handleSignInOut}
                className={`p-[1.5vh] rounded-lg text-white text-[2.5vh] font-semibold ${
                  session ? 'bg-red-600' : 'bg-purple-600'
                } active:bg-purple-800`}
              >
                {session ? 'Logout' : 'Sign In'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
