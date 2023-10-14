import React from "react";

function Vision() {
  return (
    <div className="h-full pb-44">
      <div className="flex flex-col justify-center items-center">
        <p className="text-5xl font-bold">Our Vision</p>
        <p className="text-center mt-10 text-3xl w-5/6">
          Just as alchemists aimed to unlock hidden potentials, our crypto coin
          aims to unlock the untapped potential of decentralized finance for the
          masses <br />
          <br />
          The mysterious allure of alchemy is mirrored in our crypto coin's
          ability to create value through the fusion of advanced cryptography
          and decentralized systems
        </p>
      </div>

      <div className="flex justify-around items-center mt-20 max-[850px]:justify-center">
        <img className="w-[500px] rounded-2xl max-[1100px]:w-[400px] max-[435px]:w-[350px]" src="/AlchemySymbols-1.webp" alt="" />
        <img className="w-[500px] rounded-2xl max-[1100px]:w-[400px] max-[850px]:hidden" src="/jhkjhjlbjkb.jpg" alt="" />
      </div>
    </div>
  );
}

export default Vision;
