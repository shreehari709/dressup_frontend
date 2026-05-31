import { useNavigate } from "react-router-dom";

export default function AuthButton({
  text = "Login / Register",
  className = "",
}) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/auth")}
      className={`
        px-5 py-2.5
        rounded-full
        bg-black
        text-white
        text-sm
        font-semibold
        hover:opacity-90
        transition-all
        duration-300
        shadow-sm
        ${className}
      `}
    >
      {text}
    </button>
  );
}