import React, { useState, useEffect } from "react";
import ScrollButton from "./ScrollButton";
import Link from "next/link";

function MobileNav({ open, setOpen }) {
  const [shouldRender, setShouldRender] = useState(open);

  useEffect(() => {
    // Render the MobileNav component only after mounting on the client-side
    setShouldRender(true);
  }, []);

  return shouldRender ? (
    <div
      className={`fixed top-0 bottom-0 right-0 h-screen w-[37%] z-30 bg-[#1C1C1E] border-2 border-[#CFC297] transform ${
        open ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out filter  `}
    >
      <div className="flex flex-col justify-start items-start mt-10 p-5">
        <a className="my-4 border-b border-[#CFC297] w-full">
          <ScrollButton targetId="vision">
            <p className="text-2xl mb-4">Our Vision</p>
          </ScrollButton>
        </a>
        <a className="my-4 border-b border-[#CFC297] w-full">
          <ScrollButton targetId="Tokenomics">
            <p className="text-2xl mb-4">Tokenomics</p>
          </ScrollButton>
        </a>
        <a className="my-4 border-b border-[#CFC297] w-full">
          <ScrollButton targetId="Join Us">
            <p className="text-2xl mb-4">Join Us</p>
          </ScrollButton>
        </a>

        <Link
          href="https://twitter.com/AlchemyEthErc"
          rel="noreferrer"
          target="_blank"
          className="my-4"
        >
          <img src="/logo/twAsset_21.svg" className="w-8 my-2 cursor-pointer" alt="" />
        </Link>
        <Link href="https://t.me/AlchemyEthErc" rel="noreferrer" target="_blank">
          <img src="/logo/tgAsset_22.svg" className="w-8 my-2 cursor-pointer" alt="" />
        </Link>
      </div>
    </div>
  ) : null;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="hidden max-[645px]:contents">
      <MobileNav open={open} setOpen={setOpen} />
      <div>
        <div
          className="group z-50 relative w-9 h-6 cursor-pointer flex-col justify-between items-center flex"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 bg-[#CFC297] rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-2.5" : ""
            } ${open ? "fixed" : ""} ${open ? "w-[37px]" : "w-full"}`}
          />
          <span
            className={`h-1 bg-[#CFC297] rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 bg-[#CFC297] rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-2.5" : ""
            } ${open ? "fixed" : ""} ${open ? "w-[37px]" : "w-full"} ${
              open ? "mt-[19px]" : ""
            } ${open ? "mr-[2px]" : ""}`}
          />
        </div>
      </div>
    </div>
  );
}
