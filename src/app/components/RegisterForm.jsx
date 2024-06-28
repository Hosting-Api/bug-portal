// src/app/components/RegisterForm.jsx
'use client';

import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function RegisterForm ()  {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async(e) =>{
    e.preventDefault();

    if(!name || !email || !password){
      setError('Please fill all fields !');
      return;
    }

    try {

      const resUserExists = await fetch('api/userExists',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email}),
      });

      const {user} = await resUserExists.json();
      if (user) {
        setError("User already exists !");
        return;
      }



      const res =  await fetch('api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, }),
      });

      if (res.ok){
        const form = e.target;
        form.reset();
        router.push("/");

      }else{
        console.log('User Registration Failed !');
      }
    } catch (error) {
        console.error('Error during registration: ', error);
    }

  };

  console.log("Name: ", name);

  return (
    <div className='grid place-items-center h-screen'>
        <div className='shadow-lg p-5 rounded-lg  border-t-4 border-orange-300'>
            <h1 className='text-xl font-bold my-4 '> 
            Register
            </h1>
            <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                <input  onChange={e => setName(e.target.value)} className='w-[400px] border rounded border-gray-200 py-2 px-6 bg-zinc-100/40' type="text" placeholder='Fullname' />
                <input  onChange={e => setEmail(e.target.value)} className='w-[400px] border rounded border-gray-200 py-2 px-6 bg-zinc-100/40' type="email" placeholder='Username' />
                <input  onChange={e => setPassword(e.target.value)} className='w-[400px] border rounded border-gray-200 py-2 px-6 bg-zinc-100/40' type="password" placeholder='Password' />
                <button className='bg-orange-300 text-white  rounded-lg  font-bold px-6 py-2'>Register</button>
                <p>Already have an account ? <a className='text-blue-600' href='/'> Login</a></p>

              { error && (                
                <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2'>
                 {error}
                </div>
                 
                )}
            </form>
        </div>
    </div>
  )
}
