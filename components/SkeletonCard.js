import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Skeleton } from './ui/skeleton'

export default function SkeletonCard() {
  return (
    <div>
      <Card className="flex flex-col justify-between p-2 mx-auto'">
        <CardHeader className='flex-row gap-4 items-center'>
          <Skeleton className='w-12 h-12 rounded-full' />
          <Skeleton className='h-6 flex-grow' />
        </CardHeader>
        <CardContent>
          <Skeleton className='h-4' />
          <Skeleton className='h-4' />
          <Skeleton className='h-1/2' />
        </CardContent>
        <CardFooter>
          <Skeleton className='w-28 h-10' />
        </CardFooter>
      </Card>
    </div>
  );
}
