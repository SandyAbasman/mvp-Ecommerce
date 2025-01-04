import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./pages/Home";
import ShopContextProvider from "./context/ShopContext";
import AllProduct from "./pages/AllProduct";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index path="/" element={<Home />} />
      <Route index path="/allproduct" element={<AllProduct />} />
    </Route>
  )
);

function App() {
  return (
    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>
  );
}

export default App;
