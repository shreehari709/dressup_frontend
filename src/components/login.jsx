import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../config";
import "./progress.css";
export default function Login() {
  const navigate = useNavigate();
const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    const res = await axios.post(
      `${backendUrl}/auth/login`,
      {
        email: form.email,
        password: form.password,
      }
    );

    if (res.data.success) {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful");
      navigate("/profile");
    } else {
      alert(res.data.message);
    }
  } catch (error) {
    alert(
      error.response?.data?.message ||
      "Login Failed"
    );
  } finally {
    setLoading(false);
  }
};
  return (
  <>
    {loading && (
      <div className="progress-overlay">
        <div className="progress">
          <div className="progress-value"></div>
        </div>
      </div>
    )}

    <form
      className="space-y-4"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="block text-sm text-gray-600 mb-1">
          Email Address
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
          required
          className="w-full px-4 py-3 rounded-xl border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter password"
          value={form.password}
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
          required
          className="w-full px-4 py-3 rounded-xl border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  </>
);
}