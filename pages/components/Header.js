import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="pt-4 px-4 flex justify-between items-center">
      <div>
        <p className="text-5xl">Alchemy</p>
      </div>
      <div></div>
      <Link href="https://twitter.com/AlchemyEthErc">
        <img className="w-8" src="/logo/twAsset_21.svg" alt="" />
      </Link>
    </div>
  );
}

export default Header;
