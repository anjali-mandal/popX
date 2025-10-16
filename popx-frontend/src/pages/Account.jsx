import React from "react";

export default function Account() {
  const user = {
    name: "Marry Doe",
    email: "Marry@Gmail.Com",
    profileImageUrl:
      "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.1.0&auto=format&fit=crop&w=600&q=60",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Sadipiscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam.",
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 bg-white md:bg-white">
      <div className="w-full max-w-md flex flex-col border border-gray-100 overflow-hidden min-h-screen">
        
        {/* Header */}
        <div className="bg-white p-4 shadow-sm z-10">
          <h1 className="text-lg font-semibold text-gray-900 mb-2">
            Account Settings
          </h1>
        </div>

        {/* Profile Section */}
        <div className="bg-[#F7F8F9] flex flex-col flex-grow min-h-[calc(100vh-64px)] md:min-h-0 p-6">
          {/* Profile Info */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative w-20 h-20">
              <img
                src={user.profileImageUrl}
                alt="User Profile"
                className="w-20 h-20 rounded-full object-cover border-4 border-white"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/100x100/7c3aed/ffffff?text=MD";
                }}
              />
              <div className="absolute bottom-0 right-0 p-1.5 bg-[#6C25FF] rounded-full shadow-md">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7h2l1-2h12l1 2h2a1 1 0 011 1v11a2 2 0 01-2 2H4a2 2 0 01-2-2V8a1 1 0 011-1zm9 3a4 4 0 100 8 4 4 0 000-8z"
                  />
                </svg>
              </div>
            </div>

            <div className="flex flex-col text-left">
              <h2 className="text-xl font-bold text-black">{user.name}</h2>
              <p className="text-md text-black font-semibold">{user.email}</p>
            </div>
          </div>

          {/* Description fills remaining space */}
          <div className="flex flex-col flex-grow justify-between">
            <p className="text-black text-base leading-relaxed mb-4 flex-grow">
              {user.description}
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}
