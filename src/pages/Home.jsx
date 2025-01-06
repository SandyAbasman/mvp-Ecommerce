import Hero from "../component/Hero";
import BestCollection from "../component/BestCollection";
import Stats from "../component/Stats";

const Home = () => {
  return (
    <div className="w-screen h-auto flex flex-col justify-start items-center  gap-4 ">
      <Hero />
      <div>
        <BestCollection />
        <Stats />
      </div>
    </div>
  );
};

export default Home;
