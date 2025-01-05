import Hero from "../component/Hero";
import BestCollection from "../component/BestCollection";

const Home = () => {
  return (
    <div className="w-screen h-auto flex flex-col justify-start items-center">
      <Hero />
      <div>
        <BestCollection />
        {/* <AllProduct /> */}
      </div>
    </div>
  );
};

export default Home;
