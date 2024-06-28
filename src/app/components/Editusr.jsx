// src/app/components/EditUser.jsx
'use client';

import React from 'react';
// import User from "@/app/models/user";
import { useState } from 'react';
import bcrypt from 'bcryptjs';
import { connectMongoDB } from '@/app/lib/mongodb'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
export default function Editusr ({id, name, email, password})  {
const { data: session } = useSession();
const [newName, setNewName] = useState(name);
const [newEmail, setNewEmail] = useState(email);
const [newPassword, setNewPassword] = useState(password);
const [error, setError] = useState('');
var {id} = session?.user?.id;
 newName = session?.user?.name;
 newEmail = session?.user?.email;
 newPassword = session?.user?.password;

  const router = useRouter();

  // const getUserById = async (id) => {
    
    //   try {
    //   const res = await fetch(`/api/edituser/${id}`);
  
    //   if (!res.ok) {
    //     throw new Error('Failed to fetch User !');
    //   }
    //   return res.json();
    // } catch (error) {
    //   console.log('Error fetching User: ', error);
    // }
   
  // }
  const handleSubmit = async(e) =>{
    e.preventDefault();

    // try {
    //   await connectMongoDB();
    //   const {email} = await req.json();
    //   const user = await User.findOne({email}).select("_id");
    //   if (user) {
    //     setError("User already exists !");
    //     return;
        
    //   }

    // } catch (error) {
      
    // }
    // if(!name || !email || !password || !role){
    //   setError('Please fill all fields !');
    //   return;
    // }
    // router.push("/admin/dashboard");
    
    try {
    //   const resUserExists = await fetch('http://localhost:3000/api/userExists',{
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
        
    //   },
    //   body: JSON.stringify({email}),
    // });

    // const {userE} = await resUserExists.json();
    // if (userE) {
    //   setError("User already exists !");
    //   return;
    // }
      
      

      const res =  await fetch(`http://localhost:3000/api/edituser/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newName, newEmail, newPassword,newRole}),
      });
      // const user = await res.json();
    //   const passwordsMatch = await bcrypt.compare(newPassword, password);
    // if (passwordsMatch) 
    //   {
    //       setError('Password is the same as the old one !');
    //       return null;
    //   }
    
      if (res.ok){
        
        
        router.refresh();

        router.push("/admin/dashboard");

      }else{
        router.refresh();
        console.log('User Update Failed !');
      }
      
    } catch (error) {
      router.refresh();
        console.error('Error Updating user: ', error);
    }

  };


  return (
    <div className='grid place-items-center h-screen'>
        <div className='shadow-lg p-5 rounded-lg  border-t-4 border-orange-300'>
            <h1 className='text-xl font-bold my-4 '> 
            Edit User 
            </h1>
            <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                <input  
                className='w-[400px] border rounded border-gray-200 py-2 px-6 bg-zinc-100/40'
                onChange={e => setNewName(e.target.value)}
                value={newName}                
                 type="text"  />


                <input  onChange={e => setNewEmail(e.target.value)} 
                className='w-[400px] border rounded border-gray-200 py-2 px-6 bg-zinc-100/40' 
                value={newEmail}
                type="email"  />
                
                <input  
                onChange={e => setNewPassword(e.target.value)} 
                value={newPassword}
                className='w-[400px] border rounded border-gray-200 py-2 px-6 bg-zinc-100/40' 
                type="password"  />
               
                <button className='bg-orange-300 text-white  rounded-lg  font-bold px-6 py-2'>Update</button>

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
