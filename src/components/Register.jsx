import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../config";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    contactNumber:"",
    password: "",
    confirmPassword: "",
  });

const [passwordError, setPasswordError] = useState("");

const handleSubmit = async (e) => {

  e.preventDefault();

   if (form.password !== form.confirmPassword) {
  setPasswordError("Passwords do not match");
  return;
}

setPasswordError("");

  if (form.password.length < 8) {
    setPasswordError("Password must be at least 8 characters");
    return;
  }

  setLoading(true);

  try {
    const res = await axios.post(
      `${backendUrl}/auth/register`,
      {
      name: form.name,
  email: form.email,
  contactNumber: form.contactNumber,
  password: form.password,
  confirmPassword: form.confirmPassword,
      }
    );

    localStorage.setItem(
      "token",
      res.data.token
    );

    localStorage.setItem(
      "user",
      JSON.stringify(res.data.user)
    );

    setPasswordError("");
    alert("🎉 Account Created Successfully");

    navigate("/profile");
  } catch (error) {
    alert(
      error.response?.data?.message ||
      "Registration Failed"
    );
  } finally {
    setLoading(false);
  }
};


<>
  {loading && (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        background: "#ffffff",
        zIndex: 99999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "220px",
          height: "2px",
          background: "#e5e5e5",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "40%",
            height: "100%",
            background: "#000",
            position: "absolute",
            animation: "loadingBar 1s linear infinite",
          }}
        />
      </div>

      <p
        style={{
          marginTop: 18,
          color: "#000",
          fontSize: 14,
          letterSpacing: 1,
        }}
      >
        Creating Account...
      </p>
    </div>
  )}

  {/* Your existing registration form */}
</>



  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm text-gray-600 mb-1">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="w-full px-4 py-3 rounded-xl border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          className="w-full px-4 py-3 rounded-xl border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
      </div>


              <div>
        <label className="block text-sm text-gray-600 mb-1">
          Contact Number
        </label>
        <input
          type="number"
          placeholder="Enter your contact number"
          value={form.contactNumber}
          onChange={(e) =>
            setForm({ ...form, contactNumber: e.target.value })
          }
          className="w-full px-4 py-3 rounded-xl border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">
          Password
        </label>
        <input
          type="password"
          placeholder="Create password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
          className="w-full px-4 py-3 rounded-xl border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="Confirm password"
          value={form.confirmPassword}
          onChange={(e) =>
            setForm({
              ...form,
              confirmPassword: e.target.value,
            })
          }
          className="w-full px-4 py-3 rounded-xl border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        {passwordError && (
          <p className="text-red-500 text-sm mt-1">{passwordError}</p>
        )}
      </div>

      <button
  type="submit"
  disabled={loading}
  className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
>
  {loading ? "Creating Account..." : "Create Account"}
</button>
    </form>
  );
}