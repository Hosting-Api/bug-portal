// src/app/api/adduser/route.js

import { connectMongoDB } from "../../lib/mongodb";
import User from "../../models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'

 export async function POST(req) {
    try{
            const {name, email, password, role, team} = await req.json();
            const hashedPassword = await bcrypt.hash(password,10);
            await connectMongoDB();
            await User.create({name, email,role,team, password:hashedPassword});

            return NextResponse.json({message: 'User Added successfully !'}, {status :201});

    } catch(error){
        console.error('Error adding User: ', error);
    }
 }