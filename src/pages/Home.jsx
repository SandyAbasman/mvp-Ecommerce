// import { useLoaderData } from "react-router";
// import { useContext } from "react";
import Hero from "../component/Hero";
import LoadMoreButton from "../component/LoadMoreButton";

// import { shopContext } from "../context/ShopContext";
import BestCollection from "../component/BestCollection";
// import AllProduct from "./AllProduct";

const Home = () => {
  // const productList = useLoaderData();

  // const { products } = useContext(shopContext);

  // console.log(products);

  return (
    <div className="w-screen h-auto flex flex-col justify-start items-center">
      <Hero />
      <div>
        <BestCollection />
        <div className="w-full h-auto flex flex-row justify-center items-start ">
          {/* <AllProduct /> */}
          <LoadMoreButton buttonName="Load More Products " />
        </div>
      </div>
    </div>
  );
};

export default Home;
