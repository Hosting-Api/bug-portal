
"use client";

import React from 'react'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
const DeleteBlock = ({id}) => {
  const router = useRouter();


  const deleteBug = async () => {
   const res = await fetch(`http://localhost:3000/api/Bugs/${id}`, {
      method: "DELETE",
      "content-type": "application/json",
    });
    if(res.ok){
      router.refresh();
    }
  }
  return (
    <div>
        <FontAwesomeIcon 
        icon={faX} 
        onClick={deleteBug}
        className="text-red-400 hover:cursor-pointer hover:text-red-200" />
    </div>
  )
}

export default DeleteBlock