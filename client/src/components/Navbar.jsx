import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

export const Navbar = () => {
  const [redirect, setRedirect] = useState("");

  if (redirect) {
    return <Navigate to={redirect} />
  }

  return (
    <div className='w-full h-16 bg-black text-white flex items-center px-10'>
      <div className='w-5/6'>
        <button onClick={() => setRedirect("/")}>Homepage</button>
      </div>
      <div className='w-1/6 flex justify-center'>
        <div className='w-1/2 flex justify-center'><button onClick={() => setRedirect("/login")}>Login</button></div>
        <div className='w-1/2 flex justify-center'><button onClick={() => setRedirect("/register")}>Register</button></div>
      </div>
    </div>
  )
}
