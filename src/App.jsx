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
import Product from "./component/Product";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index path="/" element={<Home />} />
      <Route path="/allproduct" element={<AllProduct />} />
      <Route path="/product/:productId" element={<Product />} />
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
