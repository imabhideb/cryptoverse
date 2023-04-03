import { useEffect, useState } from "react";
import Axios from "axios";
import CoinCard from "./Components/CoinCard";



function App() {

  const [coinList, setCoinList] = useState([]);

  const [searchWord, setSearchWord] = useState("");


  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=10")
    .then((response) => {
      setCoinList(response.data.coins);
      console.log(response.data.coins);
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  const filteredCoins = coinList.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });


  return (
    <div className="bg-[#03001C] sm:w-[100vw] md:w-[100vw] min-h-[965px] flex flex-col items-center">
      <h1 className=" text-center font-semibold text-white text-[25px] sm:text-[60px] mb-[20px] mt-[20px] sm:mb-[40px]">
        Welcome to Cryptoverse
      </h1>
      <div>
        <div className="cryptoHeader">
          <input
            className="w-[350px] sm:w-[800px] h-[50px] mb-6 outline-none bg-slate-400 bg-opacity-40 text-white font-semibold rounded-xl pl-4"
            type="text"
            placeholder="Enter the coin..."
            onChange={(event) => {
              setSearchWord(event.target.value);
            }}
          />
        </div>
      </div>

      {/* Header */}
      <div className="sm:w-[1000px] h-[60px] rounded-lg flex gap-[20px] text-center items-center bg-gray-600 bg-opacity-60 text-white m-3">
        <h1 className=" sm:flex pl-[10px] sm:pl-[20px] w-[50px] sm:w-[100px] sm:font-bold sm:text-[20px] text-left">
          Rank
        </h1>

        <div className="w-[80px] pl-[10px] sm:w-[188px] sm:font-bold sm:text-[20px] text-left">
          <h1> Coin </h1>
        </div>
        <div className="hidden sm:flex sm:w-[100px] sm:font-bold sm:text-[20px] text-left">
          <h1> Symbol</h1>
        </div>
        <div className="w-[90px] pl-[18px] sm:pl-0 sm:w-[190px] sm:font-bold sm:text-[20px] text-left">
          <h1> Curr Price</h1>
        </div>
        <div className="hidden sm:flex sm:w-[80px] sm:font-bold sm:text-[20px] text-left">
          <h1> 1hr</h1>
        </div>
        <div className="pr-3 sm:w-[80px] sm:font-bold sm:text-[20px] text-left">
          <h1> 1day</h1>
        </div>
        <div className="hidden sm:flex sm:w-[70px] sm:font-bold sm:text-[20px] text-left">
          <h1> 1week</h1>
        </div>
      </div>

      {/* Main Information */}

      {filteredCoins.map((coin) => {
        return (
          <CoinCard
            className="mt-5"
            rank={coin.rank}
            icon={coin.icon}
            name={coin.name}
            symbol={coin.symbol}
            price={coin.price}
            priceChange1d={coin.priceChange1d}
            priceChange1h={coin.priceChange1h}
            priceChange1w={coin.priceChange1w}
          />
        );
      })}
    </div>
  );
}

export default App;
