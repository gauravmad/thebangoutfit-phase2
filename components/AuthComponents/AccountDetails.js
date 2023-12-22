import React from 'react'

export default function AccountDetails() {
  return (
    <div className='my-[5vh]'>
        <h2 className='text-center text-[3vh] my-[2vh] font-semibold'>Account Details</h2>
        <div className='w-[60%] mx-auto'>

            <div className=''>
                <input 
                    type="text" 
                    name="" 
                    className="bg-gray-100 w-full p-[1vh] border-2 border-gray-400 my-[1vh]" 
                    placeholder='Enter First Name'
                />
            </div>

            <div>
                <input 
                    type="text" 
                    name="" 
                    className="bg-gray-100 w-full p-[1vh] border-2 border-gray-400 my-[1vh]" 
                    placeholder='Enter Last Name'
                />
            </div>

            <div>
                <input 
                    type="number"
                    maxLength={10} 
                    name="" 
                    className="bg-gray-100 w-full p-[1vh] border-2 border-gray-400 my-[1vh]" 
                    placeholder='Enter Mobile Number'
                />
            </div>

            <div>
                <input 
                    type="email"
                    name="" 
                    className="bg-gray-100 w-full p-[1vh] border-2 border-gray-400 my-[1vh]" 
                    placeholder='Alternate Email (Optional)'
                />
            </div>

            <h2 className='text-[3vh] font-medium my-[2vh]'>Billing Address</h2>

            
            <div>
                <input 
                    type="text"
                    name="" 
                    className="bg-gray-100 w-full p-[1vh] border-2 border-gray-400 my-[1vh]" 
                    placeholder='Flat No./Street Address'
                />
            </div>

            <div>
                <input 
                    type="number"
                    maxLength={6} 
                    name="" 
                    className="bg-gray-100 w-full p-[1vh] border-2 border-gray-400 my-[1vh]" 
                    placeholder='Zip Code'
                />
            </div>

            <div>
                <input 
                    type="text"
                    name="" 
                    className="bg-gray-100 w-full p-[1vh] border-2 border-gray-400 my-[1vh]" 
                    placeholder='City'
                />
            </div>

            <div>
                <input 
                    type="text"
                    maxLength={10} 
                    name="" 
                    className="bg-gray-100 w-full p-[1vh] border-2 border-gray-400 my-[1vh]" 
                    placeholder='State'
                />
            </div>

            <div>
                <input 
                    type="text"
                    maxLength={10} 
                    name="" 
                    className="bg-gray-100 w-full p-[1vh] border-2 border-gray-400 my-[1vh]" 
                    placeholder='Country'
                />
            </div>

            <button className='bg-purple-700 my-[1vh] px-[2vh] py-[1vh] font-medium text-white text-[2.5vh]'>
                Save
            </button>
            
        </div>
    </div>
    
  )
}

