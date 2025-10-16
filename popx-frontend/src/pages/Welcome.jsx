import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-white md:bg-white bg-[#F7F8F9]">
      <div className="flex flex-col justify-end w-full max-w-md h-full bg-[#F7F8F9] p-6">
        <h2 className="text-2xl font-bold mb-2 text-[#1D2226]">Welcome to PopX</h2>
        <p className="text-sm text-gray-500 mb-8 font-semibold">
          Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.
        </p>

        <div className="space-y-4 w-full">
          <Link to="/register">
            <button className="w-full bg-[#6C25FF] text-[#FFFFFF] py-2.5 rounded-md mb-3 font-medium hover:bg-gray-500 transition">
              Create Account
            </button>
          </Link>

          <Link to="/login">
            <button className="w-full bg-[#6C25FF4B] text-[#1D2226] py-2.5 rounded-md mb-1 font-medium hover:bg-purple-200 transition">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
