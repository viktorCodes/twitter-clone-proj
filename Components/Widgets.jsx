import { SearchIcon } from "@heroicons/react/outline";
import Trending from "./Trending";
import Image from "next/image";
import {TwitterTimelineEmbed} from 'react-twitter-embed'

function Widgets({  trendingResults, followResults  }) {
  return (
    <div className="hidden lg:inline ml-8 xl:w-[450px] py-1 space-y-5">
      <div className="sticky top-0 py-1.5 bg-black z-50 w-11/12 xl:w-9/12">
        <div className="flex items-center bg-[#202327] p-3 rounded-full relative">
          <SearchIcon className="z-50 h-5 text-gray-500" />
          <input
            type="text"
            className="bg-transparent placeholder-gray-500 outline-none text-[#d9d9d9] absolute inset-0 pl-11 border border-transparent w-full focus:border-[#1d9bf0] rounded-full focus:bg-black focus:shadow-lg"
            placeholder="Search Twitter"
          />
        </div>
      </div>
     
      <TwitterTimelineEmbed
  sourceType="profile"
  screenName="ShawnBasquiat"
  options={{height: 400}}
  theme = "dark"  />

    </div>
  );
}

export default Widgets;