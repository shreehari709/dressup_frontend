import { useState } from "react";
import Login from "../components/login";
import Register from "../components/Register";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-white to-rose-50 flex items-center justify-center px-4">

      <div className="w-full max-w-md">

        {/* Brand */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 font-serif">
            🌸 Phool Si Pyari
          </h1>

          <p className="text-gray-500 mt-2">
            Fashion inspired by elegance
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-pink-100 overflow-hidden">

          {/* Toggle */}
          <div className="p-2 bg-pink-50">
            <div className="flex rounded-2xl bg-white p-1">

              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 rounded-xl font-medium transition-all ${
                  isLogin
                    ? "bg-black text-white"
                    : "text-gray-600"
                }`}
              >
                Login
              </button>

              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 rounded-xl font-medium transition-all ${
                  !isLogin
                    ? "bg-black text-white"
                    : "text-gray-600"
                }`}
              >
                Register
              </button>

            </div>
          </div>

          {/* Form */}
          <div className="p-6">
            {isLogin ? <Login /> : <Register />}
          </div>

          {/* Footer */}
          <div className="pb-6 text-center text-sm text-gray-500">
            {isLogin ? (
              <>
                Don't have an account?{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-pink-600 font-semibold"
                >
                  Register
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-pink-600 font-semibold"
                >
                  Login
                </button>
              </>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}