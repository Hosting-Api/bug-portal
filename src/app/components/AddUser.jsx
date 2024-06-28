// src/app/components/RegisterForm.jsx
'use client';

import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function AddUser ()  {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [team, setTeam] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async(e) =>{
    e.preventDefault();

    if(!name || !email || !password || !team || !role){
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



      const res =  await fetch('api/adduser/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password,team, role}),
      });

      if (res.ok){
        const form = e.target;
        form.reset();
        router.push("/admin/dashboard");

      }else{
        console.log('User Adding Failed !');
      }
    } catch (error) {
        console.error('Error adding user: ', error);
    }

  };

  console.log("Name: ", name);

  return (
    <div className='grid place-items-center h-screen'>
        <div className='shadow-lg p-5 rounded-lg  border-t-4 border-nav'>
            <h1 className='text-xl font-bold my-4 '> 
            Add User
            </h1>
            <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                <input  onChange={e => setName(e.target.value)} className='w-[400px] border rounded border-gray-200 py-2 px-6 bg-zinc-100/40' type="text" placeholder='Fullname' />


                {/* <input  onChange={e => setRole(e.target.value)} className='w-[400px] border rounded border-gray-200 py-2 px-6 bg-zinc-100/40' type="email" placeholder='Username' /> */}
                <input  onChange={e => setEmail(e.target.value)} className='w-[400px] border rounded border-gray-200 py-2 px-6 bg-zinc-100/40' type="email" placeholder='Username' />
                <input  onChange={e => setPassword(e.target.value)} className='w-[400px] border rounded border-gray-200 py-2 px-6 bg-zinc-100/40' type="password" placeholder='Password' />
                <select onChange={(e) => {setRole(e.target.value)}} className='w-[400px] border rounded border-gray-200 py-2 px-6 bg-zinc-100/40' required>
                    <option value="" selected="true" disabled="disabled" className='bg-page'>Choose Role</option>
                    <option value="user" className='bg-page'>user</option>
                    <option value="admin" className='bg-page'>admin</option>
                </select>
                <select onChange={(e) => {setTeam(e.target.value)}} className='w-[400px] border rounded border-gray-200 py-2 px-6 bg-zinc-100/40' required>
                    <option value="" selected="true" disabled="disabled" className='bg-page' >Choose Team</option>
                    <option value="ui" className='bg-page'>UI</option>
                    <option value="db" className='bg-page'>DB</option>
                    <option value="admin" className='bg-page'>admin</option>
                    <option value="backend" className='bg-page'>Backend</option>
                </select>
                <button className='bg-nav text-white  rounded-lg  font-bold px-6 py-2'>Add User</button>

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
