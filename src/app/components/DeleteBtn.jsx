"use client";

import { useRouter } from 'next/navigation';
export default function DeleteBtn ({id})  {
    const router = useRouter();
    const DeleteUser = async () => {
    const confirmed = confirm("Are you sure you want to delete this user?");
    if (confirmed) {
        const res = await fetch(`http://localhost:3000/api/deleteuser/${id}`, {
          method: "DELETE",
        });
        
        if (res.ok) {
            router.refresh();
        } 
            }}
  return (
    <div >
        <button  className="bg-red-700 text-white  rounded-lg  font-bold px-4 py-2 mt-3" onClick={DeleteUser} >
        {/* // className="bg-red-700 text-white  rounded-lg  font-bold px-4 py-2 mt-3"> */}
            Delete</button>

    </div>
  );
    }
