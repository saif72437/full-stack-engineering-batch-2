import React, { useEffect, useState } from "react";
import { account, getCurrentUserData } from "../contants";
import MyButton from "../components/MyButton";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate()

  useEffect(() => {
    getCurrentUserData()
      .then((data) => {
        setUser(data);

        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex items-start justify-center gap-5 flex-col bg-neutral-100 p-2 rounded-md">

        
   
        <h1 className="text-2xl font-semibold text-neutral-700">Name: {user?.name} 

          {user?.emailVerification && "✅"}
        </h1>
        <p className="text-xl font-normal text-neutral-400">Email:{user?.email}</p>

        <MyButton text={"Logout"} onClick={ async ()=>{
            let logoutSuccessfully = await account.deleteSession('current')
            if(logoutSuccessfully){
              toast.success("User logged out Successfully")

              setTimeout(()=>{
                navigate("/login")
              }, 2000)
            }
        }} />
      </div>
    </div>
  );
}

export default Profile;
