import { Outlet } from "react-router-dom";
import Header from "./component/Header";
// import SplashScreen from "./component/SplashScreen";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {/* footer */}
    </div>
  );
};

export default RootLayout;
