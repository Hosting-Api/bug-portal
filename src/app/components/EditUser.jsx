// src/app/components/EditUser.jsx
'use client';

import React from 'react';
// import User from "@/app/models/user";
import { useState } from 'react';
import bcrypt from 'bcryptjs';
import { connectMongoDB } from '@/app/lib/mongodb'
import { useRouter } from 'next/navigation';
export default function EditUser ({id, name, email, role, team, password})  {

  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [newRole, setNewRole] = useState(role);
  const [newTeam, setNewTeam] = useState(team);
  const [newPassword, setNewPassword] = useState(password);
  const [error, setError] = useState('');

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
        body: JSON.stringify({ newName, newEmail, newPassword,newRole, newTeam}),
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
                <select onChange={(e) => {setNewRole(e.target.value)}} 
                className='w-[400px] border rounded border-gray-200 py-2 px-6 bg-zinc-100/40' 
                value={newRole}
                required>
                   
                    <option value="" selected="true" disabled="disabled" className='bg-page'>Choose Role</option>
                    <option value="user"className='bg-page'>user</option>
                    <option value="admin"className='bg-page'>admin</option>
                </select>

                <select onChange={(e) => {setNewTeam(e.target.value)}} 
                className='w-[400px] border rounded border-gray-200 py-2 px-6 bg-zinc-100/40' 
                value={newTeam}
                required>
                   
                    <option value="" selected="true" disabled="disabled" className='bg-page'>Choose Team</option>
                    <option value="ui" className='bg-page'>UI</option>
                    <option value="db" className='bg-page'>DB</option>
                    <option value="admin" className='bg-page'>admin</option>
                    <option value="backend" className='bg-page'>Backend</option>
                </select>
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
