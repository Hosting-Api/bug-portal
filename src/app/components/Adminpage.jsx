'use client';

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function AdminPage(){
    // const {data: session} = useSession();
    const UserList = async(e) => {
        e.preventDefault();

        const filter = {};
         await User.find(filter);
     }
     try {
        UserList();                
        } catch (error) {
           console.log("Error: ", error);
        }
    return(
        <div>
            
        </div>
    )
}