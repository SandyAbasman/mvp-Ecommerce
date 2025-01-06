import { useNavigate } from "react-router";
import Carousel from "./Carousel";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="flex h-auto w-full flex-row items-center justify-between bg-[#00B3DC] px-36 pt-24 mix-blend-multiply">
      <div className="motion-duration-8000 motion-preset-slide-right flex h-auto w-1/2 flex-col gap-3">
        <div className="flex h-auto w-full flex-col gap-4">
          <p className="font-semi-bold text-2xl text-white">Welcome to Store</p>
          <h2 className="text text-7xl font-bold text-white">NEW COLLECTION</h2>
          <p className="font-semi-bold text-2xl text-white">
            We know how large objects will act,
            <br /> but things on a small scale.
          </p>
        </div>
        <div className="h-auto w-full">
          <button
            onClick={() => navigate("/allproduct")}
            className="motion-duration-8000 rounded-sm border-4 border-[#2DC071] bg-[#2DC071] px-[2.5rem] py-[0.9375rem] text-[1.3rem] font-bold text-white hover:bg-opacity-50"
          >
            SHOP NOW
          </button>
        </div>
      </div>
      <div className="motion-duration-8000 motion-preset-slide-left h-auto w-1/2">
        <Carousel />
      </div>
    </div>
  );
}

export default Hero;
