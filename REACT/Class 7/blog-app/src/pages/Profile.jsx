import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../context/UserContext'
import { account } from '../appwrite/Services';

function Profile() {
  
  const {user, setUser}= useContext(UserContext)
  useEffect(()=>{

    ( async function() {

      let currentUser = await account.get()

      if(currentUser){
        setUser(currentUser)
      }

})();

  },[])

 

  return (
    <div className='w-full h-screen bg-slate-300 flex item-center justify-center'>

      <div className='p-4 bg-white rounded-md gap-3'>
        <p>{user?.emailVerification && "☑"}</p>
        <p>Email: {user?.email}</p>
        <p>Name: {user?.name}</p>
      </div>

      
      
    </div>
  )
}

export default Profile
