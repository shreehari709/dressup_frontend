export default function CheckoutForm({
  formData,
  setFormData,
}) {
  const inputStyle = {
    padding: 16,
    borderRadius: 14,
    border: "1px solid #ddd",
    outline: "none",
    fontSize: 14,
    background: "white",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        marginTop: 20,
      }}
    >
      <input
        placeholder="Full Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({
            ...formData,
            name: e.target.value,
          })
        }
        style={inputStyle}
      />

      <textarea
        placeholder="Address"
        value={formData.address}
        onChange={(e) =>
          setFormData({
            ...formData,
            address: e.target.value,
          })
        }
        style={{
          ...inputStyle,
          minHeight: 100,
        }}
      />

      <input
        placeholder="City"
        value={formData.city}
        onChange={(e) =>
          setFormData({
            ...formData,
            city: e.target.value,
          })
        }
        style={inputStyle}
      />

      <input
        placeholder="State"
        value={formData.state}
        onChange={(e) =>
          setFormData({
            ...formData,
            state: e.target.value,
          })
        }
        style={inputStyle}
      />

      <input
        placeholder="Contact Number"
        value={formData.contact}
        onChange={(e) =>
          setFormData({
            ...formData,
            contact: e.target.value,
          })
        }
        style={inputStyle}
      />

      <input
        placeholder="Pin Code"
        value={formData.pincode}
        onChange={(e) =>
          setFormData({
            ...formData,
            pincode: e.target.value,
          })
        }
        style={inputStyle}
      />
    </div>
  );
}