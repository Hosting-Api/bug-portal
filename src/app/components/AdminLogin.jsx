// src/app/components/AdminLogin.jsx
'use client';

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default  function AdminLogin ()  {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const router = useRouter();
  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log('Auth state is ', email	  , password);
    
    try {
      const res = await signIn("credentials", {
        email, 
        password, 
        redirect: false,
      });
      
      if (res.error) {
        setError("Invalid credentials !");
        return;
      }
      router.replace('/admin/dashboard');
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='grid place-items-center h-screen'>
        <div className='shadow-lg p-5 rounded-lg  border-t-4 border-nav'>
            <h1 className='text-xl font-bold my-4 text-default-text'> 
             Access Denied !
            </h1>
            <p className='text-default-text'>Page you are trying to access is only for admins</p>
            <button  
                onClick={  () => { window.location.replace("/dashboard");
                  }} 
                className="bg-nav text-default-text  rounded-lg  font-bold px-6 py-2 mt-3">
                Go to Dashboard</button>
            {/* <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                <input onChange={e => setEmail(e.target.value) } className='w-[400px] border rounded border-gray-200 py-2 px-6 bg-zinc-100/40' type="text" placeholder='Username' />
                <input onChange={e => setPassword(e.target.value) } className='w-[400px] border rounded border-gray-200 py-2 px-6 bg-zinc-100/40' type="password" placeholder='Password' />
                <button type='submit' className='bg-orange-300 text-white  rounded-lg  font-bold px-6 py-2'>Login</button>
                {error && (
                  <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2'>
                  {error}
                </div>
                )} 
                
            </form> */}
        </div>
    </div>
  )
}
