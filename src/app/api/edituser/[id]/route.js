import { connectMongoDB } from "@/app/lib/mongodb";
import User from "@/app/models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'


 export async function PUT(request, {params}) {
       // try {
       //        await connectMongoDB();
       //        const {email} = await req.json();
       //  const userE = await User.findOne({email}).select("_id");
       //  if (userE) {
       //      return NextResponse.json({ message: "User already exists !!" }, { status: 201 });
       //  }
       // } catch (error) {
       //   console.log(error);     
       // }

        const {id} = params;
        const { newName: name, newEmail: email, newPassword: password, newRole: role, newTeam: team } = await request.json();
        // const { newName: name, newEmail: email,  newRole: role } = await request.json();
         const hashedpassword = await bcrypt.hash(password,10);
                // await connectMongoDB();
        await connectMongoDB();
       //  const {email} = await req.json();
       
        const userE = await User.findOne({email}).select("_id");
        // const user = await User.findOne({_id: id});
        await User.findByIdAndUpdate(id, { name, email, password:hashedpassword, role, team});
        return NextResponse.json({ message: "User updated !!" }, { status: 201 });

 }
 export async function GET(req, { params }) {
    const { id } = params;
    await connectMongoDB();
    const user = await User.findOne({ _id: id });
    return NextResponse.json({ user }, { status: 201 });
}

// export async function DELETE(request) {
//        const id = request.nextUrl.searchParams.get("id");
//        await connectMongoDB();
//        await User.findByIdAndDelete(id);
//        return NextResponse.json({ message: "User deleted !!" }, { status: 201 });
// }