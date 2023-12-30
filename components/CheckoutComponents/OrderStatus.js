import React from 'react'

export default function OrderStatus({orderConfirmed}) {
  // const orderConfirmed = true;
  return (
    <div className='my-[10vh]'>

      {orderConfirmed ? (
        <div>
          <p className='text-center text-[4vh] my-[6vh] font-semibold text-green-500'>Your Order is Confirmed happy??</p>
        </div>
      ):(
        <div>
          <p className='text-center text-[4vh] my-[6vh] font-semibold text-red-500'>Your Order is not Confirmed sad??</p>
        </div>
      )}
      
    </div>
  )
}
