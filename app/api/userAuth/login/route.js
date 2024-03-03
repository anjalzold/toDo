import connectDb from "@/app/libs/connectDb";
import User from "@/app/models/userAuth";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(request, response) {
  const { email, password } = await request.json();
  await connectDb();
  const res = await User.findOne({email});
  if(!res){
    return NextResponse.json({ message: "User not found" });
  }
    if(res.password !== password){
        return NextResponse.json({ message: "Password not matched" });
    }

    
  cookies().set("nextjs",res._id,{expires: new Date(Date.now() + 1000*60*60*24*7)});



  console.log(res);
  return NextResponse.json({ message: "User Logged in", res });
}
