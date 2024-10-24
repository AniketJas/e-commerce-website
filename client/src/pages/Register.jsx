import { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { toast } from "react-toastify";
import validator from 'validator';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobno, setMobno] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [register, setRegister] = useState(false);
  const [redirect, setRedirect] = useState(false);

  function validateDetails() {
    if (!name) {
      toast.error("Name cannot be empty.");
      return false
    }
    else if (!validator.isEmail(email)) {
      toast.error("Please enter valid email address.");
      return false
    }
    else if (!validator.isNumeric(mobno)) {
      toast.error("Invalid mobile number.")
      return false
    }
    else if (mobno.length != 10) {
      toast.error("Mobile number should be 10-digits only(Indian mobile numbers).")
      return false
    }
    else if (password.length < 8) {
      toast.warning("Password should be atleast 8 characters long.")
      return false
    }
    else if (password != confirmPassword) {
      toast.error("Password does not match.")
      return false
    }
    return true;
  }

  function registerUser() {
    if (validateDetails()) {
      console.log("All good!!");

      axios.post("/register", { name: name, email: email, mobno: mobno, password: password, })
        .then(res => {
          if (res.data === "email found") {
            toast.error("Email already exists. Please login!")
            return;
          } else {
            setRegister(true);
          }
        })
        .catch(err => { console.log(err) });
    }
  }

  if (redirect) {
    return <Navigate to={"/login"} />
  }

  return (
    <div>
      <div className='w-full'><Navbar register={false} /></div>

      <div className='mt-10 md:mt-16 w-full flex justify-center items-center'>
        <div className='w-3/4 md:w-2/3 rounded-xl border border-slate-300 shadow-lg px-8 pt-16 pb-6 md:px-16 md:pt-16 '>
          <div className='w-full p-5 pt-0'>
            <div className='h-1/4 mb-8'>
              <p className='text-center font-bold text-4xl'>Register</p>
            </div>

            <input type="text" placeholder='Enter your name' className='w-full mb-6 px-4 py-2 rounded-lg bg-gray-100 border border-slate-300' onChange={(e) => setName(e.target.value)} />

            <input type="email" placeholder='Enter e-mail address' className='w-full mb-6 px-4 py-2 rounded-lg bg-gray-100 border border-slate-300' onChange={(e) => setEmail(e.target.value)} />

            <input type="text" placeholder='Enter mobile number' className='w-full mb-6 px-4 py-2 rounded-lg bg-gray-100 border border-slate-300' onChange={(e) => setMobno(e.target.value)} />

            <input type="password" placeholder='Enter password' className='w-full mb-6 px-4 py-2 rounded-lg bg-gray-100 border border-slate-300' onChange={(e) => setPassword(e.target.value)} />

            <input type="password" placeholder='Confirm password' className='w-full mb-6 px-4 py-2 rounded-lg bg-gray-100 border border-slate-300' onChange={(e) => setConfirmPassword(e.target.value)} />

            <button className='w-full mb-6 px-4 py-2 rounded-lg bg-teal-500 text-white' onClick={() => registerUser()}>Register</button>
          </div>
        </div>
      </div>

      {register && (
        <div className='w-full h-screen fixed top-0 left-0'>
          <div className='w-full h-full flex bg-black justify-center items-center bg-opacity-50'>
            <div className='bg-white h-1/2 w-1/2 rounded-xl text-center px-16 pb-16 pt-32'>
              <div className='mb-8'>
                <p className='text-xl'>Registration Done Successfully. Please <b>Login</b> to continue</p>
              </div>
              <div className=''>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg" onClick={() => setRedirect(true)}>Go to Login</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
