// src/app/components/RegisterForm.jsx
'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faUserPlus } from "@fortawesome/free-solid-svg-icons";

import { useSession } from "next-auth/react";

export default function AdminDashInfo(){
    const {data: session} = useSession();
    return(
        <>

       
       <div className="flex ">
            {/* <span className="text-red-600 font-bold ">{session?.user?.name}</span> */}
                     {/* &nbsp; */}
                
                     {/* <button  className="text-red-600 font-bold "
                     onClick={  () => { window.location.replace("/dashboard");}}>
                {/* className="bg-orange-300 text-white  rounded-lg  font-bold px-6 py-2 mt-3"> */}
                {/* {session?.user?.name}</button>&nbsp; */}
               
                {/* <button  
                onClick={() => signOut()} 
                className="bg-orange-300 text-white  rounded-lg  font-bold px-6 py-2 mt-3">
                Log Out</button>&nbsp; */}

                <button 
                 onClick={  () => { window.location.replace("/bugpage/new");}} 
                className=" text-default-text  rounded-lg  font-bold px-6 py-2 mt-3 text-2xl">
                    <FontAwesomeIcon icon={faSquarePlus} className="icon"  />
                </button>

                <button  
                onClick={  () => { window.location.replace("/adduser");
                  }} 
                className=" text-default-text  rounded-lg  font-bold px-6 py-2 mt-3 text-2xl">
                <FontAwesomeIcon icon={faUserPlus} className="icon" />
                
                </button>

                 {/* <div className="relative  z-10 mx-6 py-8">
                    <div className="absolute top-0 right-0  ">

                    
                </div> */}
                </div>
                

            
           
      
            
                
                    {/* Username: <span className="font-bold">{session?.user?.email}</span> */}
     
</>
    )
}