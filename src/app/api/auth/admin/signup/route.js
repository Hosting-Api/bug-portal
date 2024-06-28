import { connectMongoDB } from "@/app/lib/mongodb";
import User from "@/app/models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'



export async function POST(req) {
    
    const password = "1234";
    const hashedPassword = bcrypt.hash(password,10);

    await connectMongoDB();
    await User.create({
        email: "admin@gmail.com",
        name: "Admin",
        password: hashedPassword,	
    });
    return NextResponse.json({message: 'Admin registered successfully !'}, {status :201});
 }