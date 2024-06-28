import Bug from "../../../models/Bug";
import { NextResponse } from "next/server";


export async function GET(req, {params}) {
try {
    const {id} = params
    const foundBug = await Bug.findOne({_id: id});

    return NextResponse.json({foundBug}, {status: 200});
    
} catch (error) {
    return NextResponse.json({message:"Error", error}, {status: 500});
}
    
}

export async function DELETE(req, {params}) {
    try {
        const { id } = params;
        await Bug.findByIdAndDelete(id);

        return NextResponse.json({message:"Bug Deleted"}, {status: 200});
    } catch (error) {
        return NextResponse.json({message:"Error", error}, {status: 500});
    }
}

export async function PUT(req, {params}) {
    try {
        const { id } = params;
        const body = await req.json();
        const bugData = body.formData;
        const updateBugData = await Bug.findByIdAndUpdate(id, {
            ...bugData
        })
        return NextResponse.json({message:"Bug Updated"}, {status: 200});
    } catch (error) {
        return NextResponse.json({message:"Error", error}, {status: 500});
    }
}