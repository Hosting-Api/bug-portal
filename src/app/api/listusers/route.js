// src/app/api/listusers/route.js
import { connectMongoDB } from "../../lib/mongodb";
import User from "../../models/user";
import NextAuth from "next-auth/next";
import { NextResponse } from "next/server";



const getUsers = async () => {
    return await User.find();
}
// export async function POST(req){
//     try {
//         await connectMongoDB();
//         // const {email} = await req.json();
//         // const user = await User.findOne({email}).select("_id");
//         // console.log("user: ",user);

//         const allUsers = await User.find({}).toArray();
//         console.log("allUsers: ",allUsers);
//         // res.json({ status: 200, data: allUsers });
//         return NextResponse.json({allUsers});
//     } catch (error) {
//         console.log(error);
//     }
// }
export {getUsers}