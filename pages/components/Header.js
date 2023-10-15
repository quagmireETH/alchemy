import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="pt-4 px-8 flex justify-between items-center">
      <div>
        <p className="text-5xl">Alchemy</p>
      </div>
      <div className="flex justify-between items-center">
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
    </div>
  );
}

export default Header;
