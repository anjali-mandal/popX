import { Link } from "react-router-dom";

export default function Login() {
  const BUTTON_COLOR = "bg-[#6C25FF] hover:bg-[#CBCBCB]";

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <div className="w-full max-w-md bg-[#F7F8F9] p-6 h-auto ">
        <h2 className="text-2xl font-bold mb-3 text-left">
          Sign in to your<br />PopX account
        </h2>

        <p className="text-md text-gray-700 mb-6 text-left font-semibold">
          Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.
        </p>

        <form className="space-y-6">
          {/* Email Field */}
          <div className="relative text-left">
            <label
              htmlFor="email"
              className="absolute -top-2 left-2 text-xs font-semibold text-[#6C25FF] bg-[#F7F8F9] px-1 z-10"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder=""
              className="w-full border border-gray-300 rounded-md text-sm text-gray-800 py-2 px-3 focus:outline-none focus:border-violet-600 bg-[#F7F8F9]"
            />
          </div>

          {/* Password Field */}
          <div className="relative text-left">
            <label
              htmlFor="password"
              className="absolute -top-2 left-2 text-xs font-semibold text-[#6C25FF] bg-[#F7F8F9] px-1 z-10"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder=""
              className="w-full border border-gray-300 rounded-md text-sm text-gray-800 py-2 px-3 focus:outline-none focus:border-violet-600 bg-[#F7F8F9]"
            />
          </div>

          {/* Login Button */}
          <button
            type="button"
            className={`${BUTTON_COLOR} w-full py-2.5 rounded-md font-semibold text-white transition`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
