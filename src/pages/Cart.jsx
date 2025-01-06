import { useContext, useState, useEffect } from "react";
import { shopContext } from "../context/ShopContext";

const Cart = () => {
  const { products, cartItems } = useContext(shopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      if (cartItems[items] > 0) {
        tempData.push({
          id: Number(items),
          quantity: cartItems[items],
        });
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div>
      {cartData.map((item, index) => {
        const productData = products.find((product) => product.id === item.id);

        console.log("Cart data:", cartData);
        console.log("Products:", products);

        console.log("productData:", productData);

        if (!productData) {
          return (
            <div key={index}>
              <p>Product data not available</p>
            </div>
          );
        }

        return (
          <div className="flex flex-row" key={index}>
            <img
              className="w-10 h-10"
              src={productData.image}
              alt={productData.title}
            />
            <p>{productData.title}</p>
            <p className="text-5xl ">{item.quantity}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;

// import { useContext, useState } from "react";
// import { shopContext } from "../context/ShopContext";

// const Cart = () => {
//   const { products, cartItems } = useContext(shopContext);

//   const [cartData, setCartData] = useState([]);

//   useState(() => {
//     const tempData = [];

//     for (const items in cartItems) {
//       if (cartItems[items] > 0) {
//         tempData.push({
//           id: items,
//           quantity: cartItems[items],
//         });
//       }
//     }
//     setCartData(tempData);
//   }, [cartItems]);

//   return (
//     <div>
//       {cartData.map((item, index) => {
//         const productData = products.find((product) => product.id === item.id);

//         console.log(productData);

//         return (
//           <div key={index}>
//             <img src={productData.image} alt={productData.title} />
//             <p>{productData.name}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Cart;
