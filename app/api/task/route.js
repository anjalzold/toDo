import connectDb from "@/app/libs/connectDb";
import Task from "@/app/models/TaskModel";
import { useSearchParams } from "next/navigation";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request,response ){
       const cookieStore = cookies();
       const nextjs = cookieStore.get("nextjs");
  const { title, description, dueDate } = await request.json();
  await connectDb();
    const userId = nextjs.value;
    console.log(nextjs.value);

  const res = await Task.create({ title, description, dueDate, userId });
//   console.log(res);
  return NextResponse.json({ message: "Successfully added" });
}

export async function GET(request){
   const cook = cookies();
   const next = cook.get("nextjs");
//     const userId = nextjs.value;
//     console.log(nextjs.value);
    await connectDb();
       console.log(next);

    const res = await Task.find({});
    // console.log(res);
    return NextResponse.json({res});
}


export async function DELETE(request){
    await connectDb();
    const id = request.nextUrl.searchParams.get("id");
    const {userId} = request.json();
 
    const res = await Task.findByIdAndDelete({_id:id,userId:userId});
    if(res === null){
        return NextResponse.json({"message":"Task not found"});
    }
    console.log(res);
    return NextResponse.json({"message":"Successfully deleted",res});
}