import React, { useEffect, useState } from "react";
import { account, getCurrentUserData } from "../contants";
import MyButton from "../components/MyButton";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { BadgeCheck  } from "lucide-react";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentUserData()
      .then((data) => setUser(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-200 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center">
        
        {/* Avatar */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-indigo-500 flex items-center justify-center text-white text-3xl font-bold shadow-md">
          {user?.name
            ? user.name
                .split(" ")
                .map((word) => word[0])
                .join("")
                .toUpperCase()
            : "U"}
        </div>

        {/* Name + Verified Badge */}
        <h1 className="mt-4 text-2xl sm:text-3xl font-semibold text-neutral-800 flex items-center gap-2">
          {user?.name || "Unnamed User"}
          {user?.emailVerification && (
            <BadgeCheck  size={22} className="text-indigo-500" />
          )}
        </h1>

        {/* Email */}
        <p className="text-neutral-500 text-base sm:text-lg mt-1">
          {user?.email}
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-neutral-200 my-6" />

        {/* Actions */}
        <MyButton
          text={"Logout"}
          onClick={async () => {
            let logoutSuccessfully = await account.deleteSession("current");
            if (logoutSuccessfully) {
              toast.success("User logged out Successfully");
              setTimeout(() => {
                navigate("/login");
              }, 2000);
            }
          }}
          className="w-full"
        />
      </div>
    </div>
  );
}

export default Profile;
