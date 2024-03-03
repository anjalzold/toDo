import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { addDays, differenceInDays } from "date-fns";
import React from "react";
import Link from "next/link";
import RemoveBtn from "../../components/RemoveBtn";

const daysLeft = dueDate => {
  const targetDate = new Date(dueDate);
  const today = new Date();
  const futureDate = addDays(today, 10); // Add 10 days to today
  const timestamp = futureDate.toISOString();
  //   console.log(timestamp);
  // Calculate the difference in days and ensure it's never negative
  const difference = differenceInDays(dueDate, today);
  return difference;
};


const getData = async id => {
  const response = await fetch(`http://localhost:3000/api/task/${id}`, {
    cache: "no-store",
  });
  // const data = await response.json()
  // await new Promise((resolve) => setTimeout(resolve, 2000))
  return response.json();
};

export default async function page({params}) {
    const { id } = params;
    const {res} =await getData(id);
  return (
    <div className='flex h-screen items-center justify-center'>
      <Card key={res._id} className='flex flex-col justify-between max-w-[300px]'>
        <CardHeader className='flex-row gap-4 items-center'>
          <Avatar>
            <AvatarImage src='https://wallpapers.com/images/hd/naruto-profile-pictures-sa1tekghfajrr928.jpg' />
            <AvatarFallback>{res.title.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div className=''>
            <CardTitle>{res.title}</CardTitle>
            <CardDescription>
              {daysLeft(res.dueDate)} days to finish
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p>{res.description}</p>
        </CardContent>
        <CardFooter className='flex justify-between'>
          {/* <Button>View Task</Button> */}
          {res.title && (
            <div className='flex gap-2 pl-4'>
              <RemoveBtn id={res._id} />
              <Link
                href={`/main/editTask/${res._id}`}
                className=' border-green-800 p-2 rounded-lg border-2'
              >
                {" "}
                Update Task
              </Link>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
