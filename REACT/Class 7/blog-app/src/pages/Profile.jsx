import React from "react";

const Profile = () => {
  // Example user data (you can fetch this from backend / context)
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 123 456 7890",
    address: "123 Main Street, New York, USA",
    role: "Frontend Developer",
    joined: "January 2023",
    avatar: "https://i.pravatar.cc/150?img=12", // random avatar
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6">
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-md"
          />
          <h2 className="mt-4 text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-500">{user.role}</p>
        </div>

        {/* User Details */}
        <div className="mt-6 space-y-4">
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-600 font-medium">Email:</span>
            <span className="text-gray-800">{user.email}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-600 font-medium">Phone:</span>
            <span className="text-gray-800">{user.phone}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-600 font-medium">Address:</span>
            <span className="text-gray-800">{user.address}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-600 font-medium">Joined:</span>
            <span className="text-gray-800">{user.joined}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg shadow hover:bg-blue-600 transition">
            Edit Profile
          </button>
          <button className="flex-1 bg-red-500 text-white py-2 rounded-lg shadow hover:bg-red-600 transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
