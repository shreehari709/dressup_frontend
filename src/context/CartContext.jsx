import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product, size) => {
    const existing = cart.find(
      (item) =>
        item.id === product.id &&
        item.selectedSize === size
    );

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id &&
          item.selectedSize === size
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          qty: 1,
          selectedSize: size,
        },
      ]);
    }
  };

  const updateQty = (id, size, delta) => {
    setCart(
      cart
        .map((item) =>
          item.id === id &&
          item.selectedSize === size
            ? {
                ...item,
                qty: Math.max(1, item.qty + delta),
              }
            : item
        )
    );
  };

  const removeFromCart = (id, size) => {
    setCart(
      cart.filter(
        (item) =>
          !(
            item.id === id &&
            item.selectedSize === size
          )
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQty,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);