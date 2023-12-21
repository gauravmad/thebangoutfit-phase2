import React from 'react'
import { urlFor, client } from '../../lib/client';
import Link from "next/link"

export default function Navbar({userdetails}) {

  const hasUserProfilePic = userdetails && userdetails.userprofilepic;

  // Generate the image URL only if userprofilepic is available
  const userProfilePicUrl = hasUserProfilePic
    ? urlFor(userdetails.userprofilepic).url()
    : '/logo.png';

  return (
    <div className='shadow-xl '>
      <div className='w-[90%] mx-auto mb-[1vh] flex flex-row justify-between items-center p-[1vh]'>

        <img src="/logo.png" className='w-[10vh] shadow-2xlxl' alt="" />

        <div className='flex flex-row items-center justify-end'>
          <div className='mr-[1vh]'>
            <h2 className='text-[3vh] font-semibold mr-[2vh]'>
              {userdetails?.firstname} {userdetails?.lastname}</h2>
            <p>{userdetails?.emailid}</p>

          </div>
          {hasUserProfilePic && (
            <Link href="/myaccount">
              <img
                src={userProfilePicUrl}
                alt="Profile Pic"
                className='w-[10vh] h-[10vh] rounded-full'
              />
            </Link>
          )}
          
        </div>

      </div>
    </div>
  )
}
