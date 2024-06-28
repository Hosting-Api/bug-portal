// src/app/components/RegisterForm.jsx

import { getUsers } from "@/app/api/listusers/route";

// import { signOut } from "next-auth/react";
// import { useSession } from "next-auth/react";
import AdminDashInfo from "./AdminDashInfo";
// import Search from "./Search";
// import { route } from 'next/navigation'
// import SearchResult from "./SearchResult";
import Link from "next/link";
import DeleteBtn from "./DeleteBtn";
// import NewUserDash from "./NewUserDash";
// import NewNav from "./NewNav";

export default async function AdminDashb(){
    const allUsers =  await getUsers();
    var totalUsers = allUsers.length;
    // var num = 0;
    // for (let num = 0; num < allUsers.length; num++) {
    //       num = num + 1;
    //     }    
        // return num;
    return(
        <>
            
{/* <NewNav /> */}

         {/* <div className=" place-items-center py-4"> */}
            {/* <div className="shadow-lg p-8 border items-center	 bg-zinc-100/40 flex-col gap-2 my-6 mx-6 w-auto"> */}
            <div className="shadow-lg p-8 border items-center	 bg-page flex-col gap-2 my-6 mx-6 w-auto">
            
            {/* <Search /> */}
            {/* <SearchResult /> */}
               <div className="relative  z-10 mx-2 py-8">
                        <center> <h1 className="text-2xl font-bold text-default-text">Admin Dashboard</h1></center>
                    <div className="absolute top-0 right-0  ">
                    <center>

                        <AdminDashInfo />
                    </center>

                    </div>
                </div>
               
                {/* <div className="relative  z-10 mx-6 py-8"> */}
                <center> <h3>List Of Users (Total Users <b>{totalUsers}</b>)</h3>
                
                </center>
                    
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-default-text  mr-600 ml-600">                    
            <thead className="text-xs text-gray-900 uppercase  bg-orange-300 text-black-900">
                        <tr>
                            {/* <th scope="col" className="px-12 py-3" >ID</th> */}
                            <th scope="col" className="px-6 py-3">Sr.no</th>
                            <th scope="col" className="px-8 py-3">Name</th>
                            <th scope="col" className="px-12 py-3">Email</th>
                            <th scope="col" className="px-12 py-3">Role</th>
                            <th scope="col" className="px-12 py-3">Team</th>
                            <th scope="col" className="px-14 py-3">Modify</th>
                            {/* <th>Email</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers.map((user,index) => (
                          
                            <tr key={user._id}>
                                {/* <td className="px-6 py-4">{user._id}</td> */}
                                <td className="px-6 py-4">{index}</td>
                                <td className="px-6 py-4">{user.name}</td>
                                <td className="px-6 py-4">{user.email}</td>
                                <td className="px-12 py-4">{user.role}</td>
                                <td className="px-12 py-4">{user.team}</td>
                                {/* <td>{user.createdat}</td> */}
                                <th scope="col" className="flex px-10 py-3">
                                    <Link href={`/edituser/${user._id}`} >
                                    <button className="bg-blue-500 text-white  rounded-lg  font-bold px-4 py-2 mt-3">Edit</button>
                                     </Link>&nbsp;&nbsp;
                                   
                                     <DeleteBtn  className='bg-red-700 text-white rounded-lg  font-bold px-4 py-2 mt-3' id={user._id} ></DeleteBtn>




                                    {/* <Link href={`/edituser/`} className="bg-blue-500 text-white  rounded-lg  font-bold px-4 py-2 mt-3">     */}
                                   {/* <Link href={`/deleteuser/${user._id}`} > */}
                                   {/* <button className="bg-red-700 text-white rounded-lg  font-bold px-4 py-2 mt-3">Delete</button> */}
                                   {/* </Link> */}
                                   
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            </div>
           
        {/*  </div> */}
        </>
    )
}