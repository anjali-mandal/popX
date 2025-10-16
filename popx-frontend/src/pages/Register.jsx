import { Link } from "react-router-dom";

export default function Register() {
  const BUTTON_COLOR = "bg-[#6C25FF]";
  const FOCUS_RING_COLOR = "focus:ring-[#6C25FF] focus:border-[#6C25FF]";
  const RADIO_COLOR = "text-violet-600 focus:ring-[#642AF5]";

  return (
    <div className="flex items-center justify-center px-4 min-h-screen bg-white md:bg-white bg-[#F7F8F9]">
      <div className="w-full h-screen md:h-auto max-w-md bg-[#F7F8F9] p-6">
        {/* Top Section */}
        <h2 className="text-2xl font-bold leading-tight mb-8 text-left">
          Create your<br />PopX account
        </h2>

        {/* Form */}
        <form className="space-y-5">
          {[ 
            { id: "fullName", label: "Full Name", required: true, type: "text", placeholder: "Marry Doe" },
            { id: "phoneNumber", label: "Phone Number", required: true, type: "tel", placeholder: "00000 00000" },
            { id: "emailAddress", label: "Email address", required: true, type: "email", placeholder: "marry@popx.com" },
            { id: "password", label: "Password", required: true, type: "password", placeholder: "********" },
            { id: "companyName", label: "Company name", required: false, type: "text", placeholder: "PopX Innovations" },
          ].map(({ id, label, required, type, placeholder }) => (
            <div key={id} className="relative text-left">
              <label
                htmlFor={id}
                className="absolute -top-2 left-3 px-1 text-xs font-semibold text-[#6C25FF] z-10"
                style={{ backgroundColor: "#F7F8F9" }}
              >
                {label}
                {required && <span className="text-red-500">*</span>}
              </label>
              <input
                id={id}
                type={type}
                placeholder={placeholder}
                className={`w-full border border-gray-300 rounded-lg px-3 pt-2 pb-2 text-sm text-gray-800 focus:outline-none ${FOCUS_RING_COLOR} transition-all duration-200 bg-[#F7F8F9]`}
              />
            </div>
          ))}

          {/* Agency Section */}
          <div className="pb-4 text-left">
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Are you an Agency?<span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-6 text-sm mb-40">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  className={`h-4 w-4 border-gray-300 ${RADIO_COLOR}`}
                  defaultChecked
                />
                <span className="ml-2 text-gray-700">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  className={`h-4 w-4 border-gray-300 ${RADIO_COLOR}`}
                />
                <span className="ml-2 text-gray-700">No</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full ${BUTTON_COLOR} text-white py-2 rounded-lg font-semibold text-lg transition duration-150 shadow-md`}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
