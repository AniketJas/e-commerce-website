import { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { toast } from "react-toastify";
import isEmail from 'validator/lib/isEmail';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateDetails() {
    if (!isEmail(email)) {
      toast.error("Please enter valid email address.");
    }
    else if (!password) {
      toast.error("Password cannnot be empty.");
    }
  }

  return (
    <div>
      <div className='w-full'><Navbar login={false} /></div>

      <div className='mt-10 md:mt-16 w-full flex justify-center items-center'>
        <div className='w-3/4 md:w-2/3 rounded-xl border border-slate-300 shadow-lg px-8 pt-16 pb-6 md:px-16 md:pt-16 '>
          <div className='w-full p-5 pt-0'>
            <div className='h-1/4 mb-8'>
              <p className='text-center font-bold text-4xl'>Login</p>
            </div>

            <input type="email" placeholder='Enter e-mail address' className='w-full mb-6 px-4 py-2 rounded-lg bg-gray-100 border border-slate-300' onChange={(e) => setEmail(e.target.value)} />

            <input type="password" placeholder='Enter password' className='w-full mb-6 px-4 py-2 rounded-lg bg-gray-100 border border-slate-300' onChange={(e) => setPassword(e.target.value)} />

            <button className='w-full mb-6 px-4 py-2 rounded-lg bg-teal-500 text-white' onClick={() => validateDetails()}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}
