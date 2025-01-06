import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import SearchBar from "./component/SearchBar";
// import SplashScreen from "./component/SplashScreen";

const RootLayout = () => {
  return (
    <div className="">
      <Header />
      <SearchBar />
      <Outlet />
      {/* footer */}
    </div>
  );
};

export default RootLayout;
