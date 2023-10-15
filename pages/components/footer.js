import React from "react";

function Footer() {
  return (
    <div id="Join Us">
      <div className="flex flex-col justify-center items-center mb-44">
        <p className="text-5xl font-bold">Join Us</p>
        <p className="text-center mt-10 text-3xl w-5/6">
          We invite you to embark on an alchemical journey with us. Join us in
          unlocking the secrets of prosperity and transformation. Together,
          we&apos;ll forge a future where every transaction holds the promise of
          boundless wealth. Will you heed the call and join our alchemical
          revolution?
        </p>
      </div>

      <div className="flex justify-center items-center pb-32">
        <div className="border-2 border-[#CFC297] w-96" />
      </div>

      <div className="flex flex-col justify-center items-center mb-20">
        <p className="text-5xl font-bold">Disclaimer</p>
        <p className="text-center mt-10 text-3xl w-5/6">
          There is no formal team or roadmap. The coin is completely useless and
          for entertainment purposes only. <br />
          Cryptocurrency investments carry risks, and users should conduct their
          research and consult with financial professionals before making any
          investment decisions.
        </p>
      </div>
    </div>
  );
}

export default Footer;
