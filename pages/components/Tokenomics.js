import React from "react";

function Tokenomics() {
  return (
    <div className="h-full pb-44 relative" id="Tokenomics">
      <div className="text-center">
        <p className="text-5xl font-bold">Tokenomics</p>
      </div>

      <div className="flex justify-center items-center">
        <div className="border-2 border-[#CFC297] rounded-3xl mt-10 py-6 px-20 bg-[#1C1C1E] max-[475px]:px-10 max-[400px]:px-4">
          <li className="text-3xl mb-4">Supply : 1 billion</li>
          <li className="text-3xl mb-4">Decimals : 18</li>
          <li className="text-3xl mb-4">Liquidity locked at 20k MC</li>
          <li className="text-3xl mb-4">Tax 3/3</li>
          <li className="text-3xl">100% LP (fair launch)</li>
        </div>
      </div>

      <img className="absolute -z-10 opacity-50 rounded-3xl left-80 bottom-80 w-72 max-[625px]:left-5" src="/OIP.jpg" alt="" />

      <img className="absolute -z-10 opacity-50 rounded-3xl right-80 top-64 w-72 max-[625px]:right-5" src="/OIP.jpg" alt="" />
    </div>
  );
}

export default Tokenomics;
