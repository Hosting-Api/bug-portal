import { connectMongoDB } from "@/app/lib/mongodb";
import User from "@/app/models/user";
import { NextResponse } from "next/server";


//  export async function PUT(request, {params}) {

//         const {id} = params;
//         const { newName: name, newEmail: email, newPassword: password, newRole: role } = await request.json();
//         // await connectMongoDB();
//         await connectMongoDB();
//         // const user = await User.findOne({_id: id});
//         await User.findByIdAndUpdate(id, { name, email, password, role});
//         return NextResponse.json({ message: "User updated !!" }, { status: 201 });

//  }
//  export async function GET(req, { params }) {
//     const { id } = params;
//     await connectMongoDB();
//     const user = await User.findOne({ _id: id });
//     return NextResponse.json({ user }, { status: 201 });
// }

export async function DELETE(request, { params }) {
       // const id = request.nextUrl.searchParams.get("id");
       const { id } = params;
       await connectMongoDB();
       await User.findByIdAndDelete(id);
       return NextResponse.json({ message: "User deleted !!" }, { status: 201 });
}