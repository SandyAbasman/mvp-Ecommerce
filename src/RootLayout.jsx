import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import SearchBar from "./component/SearchBar";
// import SplashScreen from "./component/SplashScreen";

const RootLayout = () => {
  return (
    <div className="bg-[#f8f8f8]/50">
      <Header />
      <SearchBar />
      <Outlet />
      {/* footer */}
    </div>
  );
};

export default RootLayout;
