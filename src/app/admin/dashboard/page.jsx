// src/app/admin/dashboard/page.jsx
// import { signOut } from "next-auth/react";
// import Link from "next/link";
// // import NewUserDash from "@/app/components/newUserDash";

// import Userinfo from "../../components/Userinfo"
// import { connectMongoDB } from "../../lib/mongodb";
// import User from "../../models/user";
// import { NextResponse } from "next/server";
// import { getUsers } from "@/app/api/listusers/route";
import AdminDashb from "@/app/components/AdminDash";
// import AdminDashInfo from "@/app/components/AdminDashInfo";
// import {authOptions} from '@/app/api/auth/[...nextauth]/route';
// import authOptions from "/src/app/api/auth/[...nextauth]/route";
// import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";

export default async function AdminDashboard(){
    


    return (
        <div>
            {/* <center> <h1>Admin Dashboard</h1></center> */}
            {/* <div className="relative  z-10 mx-6 py-8">
                    <div className="absolute top-0 right-0  ">
            <button  
                // onClick={} 
                className="bg-orange-300 text-white  rounded-lg  font-bold px-6 py-2 mt-3">
                Add User</button>&nbsp;
                </div></div> */}
            <AdminDashb />
            {/* <NewUserDash /> */}
                
                

           
           
            {/* console.log("allUsers: ",allUsers); */}
            {/* props: { allUsers }, */}
            {/* console.log("userlist: ",userlist); */}

            
        </div>
    )
}