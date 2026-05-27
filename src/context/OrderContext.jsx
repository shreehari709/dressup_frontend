import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);

  const placeOrder = (orderData) => {
    setOrders((prev) => [orderData, ...prev]);
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        placeOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export const useOrders = () => useContext(OrderContext);