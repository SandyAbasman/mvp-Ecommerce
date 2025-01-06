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
import Cart from "./pages/Cart";
import Not_found from "./component/not_found";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index path="/" element={<Home />} />
      <Route path="/allproduct" element={<AllProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="*" element={<Not_found />} />
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
