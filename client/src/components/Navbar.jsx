import { useState } from 'react'
import { Navigate } from 'react-router-dom';

export const Navbar = ({ register = true, login = true }) => {
  const [redirect, setRedirect] = useState("");

  if (redirect) {
    return <Navigate to={redirect} />
  }

  return (
    <div className='w-full h-16 flex items-center px-10 border border-bottom-1 border-b-slate-300 shadow-md'>
      <div className='w-5/6'>
        <button className='font-extrabold text-2xl' onClick={() => setRedirect("/")}>ShopSprint</button>
      </div>
      <div className='w-1/6 flex justify-end gap-6 font-semibold'>
        {login && (
          <div className='flex justify-center'>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg" onClick={() => setRedirect("/login")}>Login</button></div>
        )}
        {register && (
          <div className='flex justify-center'>
            <button className="bg-teal-600 text-white px-4 py-2 rounded-lg" onClick={() => setRedirect("/register")}>Register</button>
          </div>
        )}
      </div>
    </div >
  )
}
