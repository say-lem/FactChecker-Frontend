import { useState, FormEvent } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/Asset 1@4x 1.png";

export const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();


  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; userName?: string; password?: string }>({});
  const [focusedInput, setFocusedInput] = useState<null | string>(null);

  const handleBack = () => {
    const currentPath = location.pathname;
    if (currentPath === "/signup" || currentPath === "/login") {
      navigate("/");
    } else {
      navigate(-1);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);


    setIsLoading(false);
  };

  const handleFocus = (field: string) => setFocusedInput(field);
  const handleBlur = () => setFocusedInput(null);

  const switchToLogin = () => navigate("/login");

  const inputClass = (field: string) =>
    `border rounded-lg p-3 mt-4 w-80 transition-colors ${
      focusedInput === field ? "border-blue-500" : "border-[#00008B]"
    }`;

  return (
    <div className="flex   justify-center">
      <div className="flex flex-col  container h-screen w-screen text-black cursor-default max-w-7xl mx-auto px-4 py-3">
        <div
          className="flex absolute top-4  items-center gap-2 cursor-pointer mb-6 md:mb-[70px] text-[#181D6B]"
          onClick={handleBack}
        >
          <FaArrowLeft className="hidden md:block" />
          <span>Back</span>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col bg-white items-center justify-center p-8 pt-0 rounded-lg">
          <div className="text-xl font-semibold flex items-center gap-3 pb-20">
            <img src={logo} alt="logo" />
            <p className="text-[#181D6B]">TruthCheck</p>
          </div>

          <div className="flex flex-col items-center justify-center p-4 px-0">
            <div className="flex items-center justify-center pb-5">
              <p className="text-[#181D6B] text-[22px] font-bold">Sign Up</p>
            </div>

            <div className={inputClass("email")}>
              <input
                type="email"
                value={email}
                onFocus={() => handleFocus("email")}
                onBlur={handleBlur}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((prev) => ({ ...prev, email: "" }));
                }}
                className="w-full outline-none bg-transparent text-black"
                placeholder="Email"
              />
            </div>

            <div className={inputClass("userName")}>
              <input
                type="text"
                value={userName}
                onFocus={() => handleFocus("userName")}
                onBlur={handleBlur}
                onChange={(e) => {
                  setUserName(e.target.value);
                  setErrors((prev) => ({ ...prev, userName: "" }));
                }}
                className="w-full outline-none bg-transparent text-black"
                placeholder="Username"
              />
            </div>

            <div className={inputClass("password")}>
              <input
                type="password"
                value={password}
                onFocus={() => handleFocus("password")}
                onBlur={handleBlur}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors((prev) => ({ ...prev, password: "" }));
                }}
                className="w-full outline-none bg-transparent text-black"
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              className={`bg-[#333FE88A] text-white rounded-full mt-6 w-full p-3 hover:bg-[#333FE88A50] ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Continue"}
            </button>

            <div className="flex gap-1 w-full pt-4">
              <p className="text-gray-500">Already have an account?</p>
              <p
                onClick={switchToLogin}
                className="text-[#333FE8] font-bold cursor-pointer"
              >
                Login
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
