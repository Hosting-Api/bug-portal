// src/app/components/LoginForm.jsx
'use client';

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
// import NewNav from './NewNav';

export default function LoginForm ()  {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const router = useRouter();
  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try {
      const res = await signIn("credentials", {
        email, password, redirect: false,
      });
      // if( !email || !password){
      //   setError('Please fill all fields !');
      //   return;
      // }
      if (res.error) {
        setError("Invalid credentials !");
        return;
      }
      router.replace('/edit');
    } catch (error) {
      console.log(error);
    }
  }


  return (<>
  
      
    <div className='grid place-items-center h-screen '>
        <div className='shadow-lg p-5 rounded-lg  border-t-4 border-nav'>
            <h1 className='text-xl font-bold my-4 '> 
             Login
            </h1>
            <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                <input onChange={e => setEmail(e.target.value) } className='w-[400px] border rounded border-gray-200 py-2 px-6 bg-zinc-100/10' type="text" placeholder='Username' />
                <input onChange={e => setPassword(e.target.value) } className='w-[400px] border rounded border-gray-200 py-2 px-6 bg-zinc-100/10' type="password" placeholder='Password' />
                <button className='bg-nav text-white  rounded-lg  font-bold px-6 py-2'>Login</button>
                {/* <p>Don't have an account ? <a className='text-blue-600' href='/register'> Register</a></p> */}
                {error && (
                  <div className='bg-red-500 text-default-text w-fit text-sm py-1 px-3 rounded-md mt-2'>
                  {error}
                </div>
                )} 
                
            </form>
          
        </div>
        
    </div></>
  )
}
