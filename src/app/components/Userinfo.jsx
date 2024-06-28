// src/app/components/RegisterForm.jsx
"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Userinfo() {
  const { data: session } = useSession();
  var team = session?.user?.team;
//   const {usrid} = session?.user?.id;
  return (
    <div className="grid place-items-center max-w-90 max-h-40">
      <div className="relative  z-10 mx-6 py-8">
        <center>
          {" "}
          <h1 className="text-2xl font-bold text-default-text"> Dashboard</h1>
        </center>
      </div>

      {/* <div className=" shadow-lg p-8 border bg-zinc-100/40 flex-col gap-2 my-6"> */}
      <div className=" shadow-lg p-8 border bg-nav flex-col gap-2 my-6">
        <div>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Username: <span className="font-bold">{session?.user?.email}</span>
        </div>
        <div>
          Role: <span className="font-bold">{session?.user?.role}</span>
        </div>
        {/* <div>
          Team: <span className="font-bold">{team}</span>
        </div> */}
       

        <div className="flex ">
          {/* <button onClick={() => signOut({ callbackUrl: "/api/auth/logout",})} className="bg-orange-300 text-white  rounded-lg  font-bold px-6 py-2 mt-3">Log Out</button> */}
          <button
            // onClick={() => signOut({callbackUrl: "/"})}
            onClick={() => signOut()}
            className="bg-page text-white  rounded-lg  font-bold px-6 py-1 mt-3"
          >
            Log Out
          </button>
          &nbsp;
          <button
            onClick={() => {
              window.location.replace("/admin/dashboard");
            }}
            className="bg-page text-white  rounded-lg  font-bold px-6 py-2 mt-3"
          >
            Admin 
          </button>
        </div>
      </div>
    </div>
  );
}
