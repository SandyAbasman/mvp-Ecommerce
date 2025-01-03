function Hero() {
  return (
    <div className="w-full h-[50rem] bg-[url('/shopHerobg.jpeg')] bg-cover bg-no-repeat  justify-between items-center px-20 mb-10   flex flex-row ">
      <div className="w-1/2 h-auto flex flex-col gap-3">
        <div className="w-full h-auto  flex flex-col gap-4 ">
          <p className="text-2xl text-white font-semi-bold">Welcome to Store</p>
          <h2 className="text-7xl font-bold text-white text">NEW COLLECTION</h2>
          <p className="text-2xl text-white font-semi-bold">
            We know how large objects will act,
            <br /> but things on a small scale.
          </p>
        </div>
        <div className="w-full h-auto">
          <button className="bg-[#2DC071] text-[1.3rem] font-bold  px-[2.5rem] py-[0.9375rem] text-white rounded-sm ">
            SHOP NOW
          </button>
        </div>
      </div>

      
    </div>
  );
}

export default Hero;
