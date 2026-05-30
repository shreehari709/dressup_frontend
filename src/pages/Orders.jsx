import { useOrders } from "../context/OrderContext";

export default function Orders() {
  const { orders } = useOrders();

  return (
    <div
      style={{
        top: 10,
        background: "#FAF9F6",
        minHeight: "100vh",
        marginTop: 90,
      }}
    >
      <h2 style={{ fontFamily: "inherit", fontSize: "1.5rem", fontWeight: "bold" }}>Your Orders</h2>

      {orders.length === 0 ? (
        <p style={{ fontFamily: "inherit", fontSize: "1rem", color: "#666" }}>No Orders Yet</p>
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
              <h3 style={{ fontFamily: "inherit", fontSize: "1.25rem", fontWeight: "bold" }}>{order.items[0].name}</h3>

              <p style={{ fontFamily: "inherit", fontSize: "1rem" }}>
                <strong>Order ID:</strong> {order.id}
              </p>

              <p style={{ fontFamily: "inherit", fontSize: "1rem" }}>
                <strong>Order Date:</strong> {order.date}
              </p>

              <p style={{ fontFamily: "inherit", fontSize: "1rem" }}>
                <strong>Delivery:</strong>{" "}
                {order.deliveryDate}
              </p>

              <p style={{ fontFamily: "inherit", fontSize: "1rem" }}>
                <strong>Total:</strong> ₹{order.total}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}