import Hero from "../component/Hero";
import BestCollection from "../component/BestCollection";
import Stats from "../component/Stats";

const Home = () => {
  return (
    <div className="flex h-auto w-screen flex-col items-center justify-start gap-4">
      <Hero />
      <Stats />
      <div>
        <BestCollection />
      </div>
    </div>
  );
};

export default Home;
