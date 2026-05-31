import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../config";
export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contactNumber:"",
    password: "",
    confirmPassword: "",
  });



const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      `${backendUrl}/auth/register`,
      {
        name: form.name,
        email: form.email,
        contactNumber: form.contactNumber,
        password: form.password,
      }
    );

    alert(res.data.message);
  } catch (error) {
    alert(
      error.response?.data?.message ||
        "Registration Failed"
    );
  }
};


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
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
      >
        Create Account
      </button>
    </form>
  );
}