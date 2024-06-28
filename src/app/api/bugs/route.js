import Bug from "../../models/Bug";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        const bugData = body.formData;  
        await Bug.create(bugData);      
    return NextResponse.json({message:"Bug Created"}, {status: 201}); 
    } catch (error) {
       return NextResponse.json({message:"Error", error}, {status: 500}); 
    }
}

export async function GET(req) {
    try {
        const bugs = await Bug.find();
        return NextResponse.json({bugs}, {status: 200});
    } catch (error) {
        return NextResponse.json({message:"Error", error}, {status: 500});
    }
}