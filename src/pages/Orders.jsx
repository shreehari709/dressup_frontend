import { useOrders } from "../context/OrderContext";

export default function Orders() {
  const { orders } = useOrders();

  return (
    <div
      style={{
        top: 10,
        background: "#FAF9F6",
        minHeight: "100vh",
        padding: 20,
      }}
    >
      <h2>Your Orders</h2>

      {orders.length === 0 ? (
        <p>No Orders Yet</p>
      ) : (
        <div
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {orders.map((order) => (
            <div
              key={order.id}
              style={{
                background: "white",
                borderRadius: 20,
                padding: 20,
              }}
            >
              <h3>{order.items[0].name}</h3>

              <p>
                <strong>Order ID:</strong> {order.id}
              </p>

              <p>
                <strong>Order Date:</strong> {order.date}
              </p>

              <p>
                <strong>Delivery:</strong>{" "}
                {order.deliveryDate}
              </p>

              <p>
                <strong>Total:</strong> ₹{order.total}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}