import React from 'react'

const CoinCard = ({rank, icon, name, symbol, price, priceChange1d
, priceChange1h, priceChange1w}) => {

    
  return (
    <div className='sm:w-[1000px] h-[60px] rounded-lg flex gap-[20px] text-center items-center bg-gray-600 bg-opacity-60 text-white m-3'>
        <h1 className='pl-[15px] sm:pl-[30px] sm:mr-5'> {rank}</h1>
        <img src={icon} className='w-[22px]  sm:w-[30px]' alt="" />
        <div className='w-[90px] sm:w-[200px] text-left'>
            <h1> {name}</h1>
        </div>
        <div className='hidden sm:flex sm:w-[80px] text-left'>
            <h1> {symbol}</h1>
        </div>
        <div className='w-[70px] sm:w-[190px] text-left '>
            {/* <h1><CurrencyConverter from={'USD'} to={'CAD'} value={29}/></h1> */}
            <h1>$ {price.toFixed(2)}</h1>
        </div>
        <div className='hidden sm:flex sm:w-[80px] text-left '>
            <h1 className={`${priceChange1h > 0 ? "text-green-400" : "text-red-600"}`}> {priceChange1h}</h1>
        </div>
        <div className='w-[50px] sm:w-[80px] text-left'>
            <h1 className={`${priceChange1d > 0 ? "text-green-400" : "text-red-600"}`}> {priceChange1d}</h1>
        </div>
        <div className='hidden sm:flex sm:w-[70px] text-left'>
            <h1 className={`${priceChange1w > 0 ? "text-green-400" : "text-red-600"}`}> {priceChange1w}</h1>
        </div>
    </div>
  )
}

export default CoinCard