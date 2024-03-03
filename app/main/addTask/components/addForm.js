"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import jwt from 'jsonwebtoken'

const formSchame = z.object({
    title: z.string().min(3,"Please enter title more than 3 word"),
    description: z.string().min(4, "Description must be more than 4 words"),
    dueDate: z.string().pipe(z.coerce.date()),
})


export default function AddForm({userId}) {
  const router = useRouter();


    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver:zodResolver(formSchame)
    })


    const onSubmit = async (data) => {
    
      console.log(data);
      try {
        const response = await fetch("http://localhost:3000/api/task", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data ),
        });
        if (response.ok) {
          router.push("/main");
          router.refresh();

          console.log("Success");
        }
        const res = await response.json();
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    }

  return (
    <div className=' mt-10 flex justify-center items-center '>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-4  border border-black w-[500px] p-4 '
      >
        <div className='text-center'>Task</div>

        <div className='flex gap-2 justify-between mr-[100px]'>
          <label htmlFor=''>Title</label>
          <input
            type='text'
            name=''
            id='title'
            {...register("title")}
            className='border  border-black'
          />
          {errors.title && <p>{errors.title.message}</p>}
        </div>

        <div className='flex gap-2 justify-between mr-[100px]'>
          <label htmlFor=''>Description</label>
          <input
            type='text'
            name=''
            id='description'
            {...register("description")}
            className='border  border-black'
          />
          {errors.description && <p>{errors.description.message}</p>}
        </div>
        <div className='flex gap-2 justify-between mr-[100px]'>
          <label htmlFor=''>Due Date</label>
          <input
            type='date'
            name=''
            id='dueDate'
            {...register("dueDate")}
            className='border  border-black'
          />
          {errors.dueDate && <p>{errors.dueDate.message}</p>}
        </div>
        <input
          type='submit'
          value='Add Task'
          className='border  border-black w-[100px] mx-auto'
        />
      </form>
    </div>
  );
}
