import React from "react";
import Link from "next/link";
import ScrollButton from "./ScrollButton";
import Navbar from "./BurgerNav";

function Header() {
  return (
    <div className="pt-4 px-8 flex justify-between items-center">
      <div>
        <p className="text-5xl">Alchemy</p>
      </div>
      <div className="flex justify-center items-center mt-2">
        <ScrollButton targetId="vision">
          <p className="text-3xl mr-20 underline max-[800px]:mr-10 max-[800px]:text-2xl max-[645px]:hidden">Our Vision</p>
        </ScrollButton>
        <ScrollButton targetId="Tokenomics">
        <p className="text-3xl mr-20 underline max-[800px]:mr-10 max-[800px]:text-2xl max-[645px]:hidden">Tokenomics</p>
        </ScrollButton>
        <ScrollButton targetId="Join Us">
        <p className="text-3xl underline max-[800px]:text-2xl max-[645px]:hidden">Join Us</p>
        </ScrollButton>
      </div>
      <div className="flex justify-between items-center max-[645px]:hidden">
        <Link
          href="https://twitter.com/AlchemyEthErc"
          rel="noreferrer"
          target="_blank"
          className="mr-4"
        >
          <img className="w-8" src="/logo/twAsset_21.svg" alt="" />
        </Link>
        <Link
          href="https://t.me/AlchemyEthErc"
          rel="noreferrer"
          target="_blank"
        >
          <img className="w-8" src="/logo/tgAsset_22.svg" alt="" />
        </Link>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
