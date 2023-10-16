import React from "react";

function Roadmap() {
  return (
    <div className="relative">
      <div className="flex flex-col justify-center items-center">
        <p className="text-5xl font-bold">Roadmap</p>
      </div>

      <div className="flex flex-col justify-evenly items-center mt-10">
        <div className="flex flex-col justify-center items-start border-2 border-[#CFC297] rounded-xl mb-10 py-6 px-16 max-[475px]:px-10 max-[425px]:px-6">
          <p className="text-4xl">Phase 1</p>
          <li className="text-3xl">Create a website</li>
          <li className="text-3xl">Start Social Media Marketing</li>
          <li className="text-3xl">Launch</li>
        </div>
        <div className="flex flex-col justify-center items-start border-2 border-[#CFC297] rounded-xl mb-10 py-6 px-24 max-[475px]:px-[73px] max-[425px]:px-[58px]">
          <p className="text-4xl">Phase 2</p>
          <li className="text-3xl">Tier 1 Callers</li>
          <li className="text-3xl">Reach 1000+ Holders</li>
          <li className="text-3xl">$200k+ Daily Volume</li>
        </div>
        <div className="flex flex-col justify-center items-start border-2 border-[#CFC297] rounded-xl py-6 px-16 max-[475px]:px-10 max-[425px]:px-6">
          <p className="text-4xl">Phase 3</p>
          <li className="text-3xl">Apply to CMC and CoinGecko</li>
          <li className="text-3xl">Reach 5k holders</li>
          <li className="text-3xl">$1M Daily Volume</li>
        </div>
      </div>

      <img className="absolute -z-10 top-0 opacity-20" src="/alchemy_book.jpg" alt="" />
    </div>
  );
}

export default Roadmap;
