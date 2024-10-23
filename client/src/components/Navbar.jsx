import { useState } from 'react'
import { Navigate } from 'react-router-dom';

export const Navbar = ({ register = true, login = true }) => {
  const [redirect, setRedirect] = useState("");

  if (redirect) {
    return <Navigate to={redirect} />
  }

  return (
    <div className='w-full h-16 flex items-center px-10 border border-bottom-1 border-b-slate-500 shadow-md'>
      <div className='w-5/6'>
        <button onClick={() => setRedirect("/")}>Homepage</button>
      </div>
      <div className='w-1/6 flex justify-center'>
        {login && (
          <div className='w-1/2 flex justify-center'><button onClick={() => setRedirect("/login")}>Login</button></div>
        )}
        {register && (
          <div className='w-1/2 flex justify-center'>
            <button onClick={() => setRedirect("/register")}>Register</button>
          </div>
        )}
      </div>
    </div >
  )
}
