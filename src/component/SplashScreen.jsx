// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

const SplashScreen = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate("/home");
  //   }, 3000); // 3 seconds delay
  // }, [navigate]);

  return (
    <div className="w-screen h-screen bg-purple-700 ">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to the App</h1>
        <p className="text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default SplashScreen;
