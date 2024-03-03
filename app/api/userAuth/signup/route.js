import connectDb from "@/app/libs/connectDb";
import User from "@/app/models/userAuth";
import { NextResponse } from "next/server";


export async function POST(request,response){
    const {email,password } = await request.json();
    await connectDb();
    const res = await User.create({email,password});
    console.log(res);
 const token = "your_generated_token";

 // Set a secure cookie with the token

   return NextResponse.json({"message":"Successfully added",res});
}


// export async function GET(request){
//     await connectDb();
//     const res = await User.find({});
//     console.log(res);
//     return NextResponse.json({"message":"You get everything",res});
// }