import { useNavigate } from "react-router";
import Carousel from "./Carousel";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-auto  pt-10 bg-[#00B3DC] mix-blend-multiply   justify-between items-center  px-36  flex flex-row ">
      <div className="w-1/2 h-auto flex flex-col gap-3 motion-preset-slide-right  motion-duration-8000">
        <div className="w-full h-auto  flex flex-col gap-4 ">
          <p className="text-2xl text-white font-semi-bold">Welcome to Store</p>
          <h2 className="text-7xl font-bold text-white text">NEW COLLECTION</h2>
          <p className="text-2xl text-white font-semi-bold">
            We know how large objects will act,
            <br /> but things on a small scale.
          </p>
        </div>
        <div className="w-full h-auto">
          <button
            onClick={() => navigate("/allproduct")}
            className="  bg-[#2DC071]  border-4 border-[#2DC071] text-[1.3rem] font-bold  px-[2.5rem] py-[0.9375rem] text-white rounded-sm hover:bg-opacity-50  motion-duration-8000  "
          >
            SHOP NOW
          </button>
        </div>
      </div>
      <div className="w-1/2 h-auto  motion-preset-slide-left  motion-duration-8000 ">
        <Carousel />
      </div>
    </div>
  );
}

export default Hero;
