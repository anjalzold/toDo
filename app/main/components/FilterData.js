"use client"

import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
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
import Link from "next/link";
import RemoveBtn from './RemoveBtn';

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




export default function FilterData({res}) {

    const [data, setData] = useState(res);

    const handleFilter = () => {
        const filter = res.filter(task=>daysLeft(task.dueDate)<10);
        const sorted = filter.sort((a,b)=>daysLeft(a.dueDate)-daysLeft(b.dueDate))
        console.log(sorted);
        setData(sorted);


    }   
  return (
    <div>
      <div className=''>
        <div className='flex justify-end pr-5'>
          <Button className='' onClick={handleFilter}>Filter by DueDate</Button>
        </div>
        <div className='grid md:grid-cols-3 gap-8 p-2 max-w-[1100px] mx-auto grid-cols-1 '>
          {data.map(task => (
            <Card key={task._id} className='flex flex-col justify-between'>
              <CardHeader className='flex-row gap-4 items-center'>
                <Avatar>
                  <AvatarImage src='https://wallpapers.com/images/hd/naruto-profile-pictures-sa1tekghfajrr928.jpg' />
                  <AvatarFallback>{task.title.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div className=''>
                  <CardTitle>{task.title}</CardTitle>
                  <CardDescription>
                    {daysLeft(task.dueDate)} days to finish
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>{task.description}</p>
              </CardContent>
              <CardFooter className='flex justify-between items-center'>
                <div className='flex items-center gap-2 flex-nowrap justify-between'>
                  <Button>
                    <Link href={`/main/viewTask/${task._id}`}>View Task</Link>
                  </Button>
                  {task.title && (
                    <div className='flex items-center gap-2 '>
                      <RemoveBtn id={task._id} />
                      <Link
                        href={`/main/editTask/${task._id}`}
                        className='p-2 border-2 border-green-800 rounded-lg'
                      >
                        Edit Task
                      </Link>
                    </div>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
