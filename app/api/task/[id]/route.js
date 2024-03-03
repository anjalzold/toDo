import connectDb from "@/app/libs/connectDb";
import Task from "@/app/models/TaskModel";
import { NextResponse } from "next/server";

export async function GET(request,{params}){
    const { id } = params;
    // const id = request.nextUrl.searchParams.get("id");
    await connectDb();
    const res = await Task.findOne({_id:id});


    return NextResponse.json({"message":"You get everything",res});
}


export async function PUT(request,{params}){
    const {id } = params;
    // const id = request.nextUrl.searchParams.get("id");
    const {title,description,dueDate} = await request.json();
    await connectDb();
    const res = await Task.findByIdAndUpdate(id,{title,description,dueDate});
    console.log(res);
    return NextResponse.json({"message":"Successfully updated",res});

}