import Header from "./components/Header";
import Vision from "./components/Vision";
import Tokenomics from "./components/Tokenomics";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex justify-evenly items-center h-screen -mt-12 max-[1000px]:justify-around max-[900px]:justify-center">
        <div className="flex flex-col justify-center items-center">
          <p className="text-5xl font-bold">About Us</p>
          <p className="w-[700px] text-center mt-10 text-3xl max-[1170px]:w-[550px] max-[900px]:w-5/6">
            Just as alchemists aimed to unlock hidden potentials, our crypto
            coin aims to unlock the untapped potential of decentralized finance
            for the masses <br /><br />
            The mysterious allure of alchemy is mirrored in our crypto coin&apos;s
            ability to create value through the fusion of advanced cryptography
            and decentralized systems
          </p>
        </div>
        <img className="w-96 max-[1000px]:w-80 max-[900px]:hidden" src="/8-pointed-stars.jpg" alt="" />
      </div>

      <div className="flex justify-center items-center pt-12 pb-24">
        <div className="border-2 border-[#CFC297] w-3/4" />
      </div>

      <Vision />

      <div className="flex justify-center items-center -mt-20 pb-32">
        <div className="border-2 border-[#CFC297] w-3/4" />
      </div>

      <Tokenomics />

      <div className="flex justify-center items-center pt-12 pb-32">
        <div className="border-2 border-[#CFC297] w-3/4" />
      </div>

      <Footer />
    </div>
  );
}
