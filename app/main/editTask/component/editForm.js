"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";


const formSchame = z.object({
  title: z.string().min(3, "Please enter title more than 3 word"),
  description: z.string().min(4, "Description must be more than 4 words"),
  dueDate: z.string().pipe(z.coerce.date()),
});

export default function EditForm({res}) {
                 const router = useRouter();

    console.log(res);
       const {
         register,
         handleSubmit,
         formState: { errors },
       } = useForm({
         resolver: zodResolver(formSchame),
         defaultValues: {
           title: res.title,
           description: res.description,
           dueDate: res.dueDate,
         },
       });

       const onSubmit = async data => {
         console.log(data);
         try {
           const response = await fetch(`http://localhost:3000/api/task/${res._id}`, {
             method: "PUT",
             cache: "no-store",
             
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify(data),
             
           });
           if (response.ok) {
             console.log("Success");
             router.push("/main");
             router.refresh();
           }
           const result = await response.json();
           console.log(result);
         } catch (e) {
           console.log(e);
         }
       };
  return (
    <div>
      <div className=' mt-10 flex justify-center items-center '>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col gap-4  border border-black w-[500px] p-4 '
        >
          <div className='text-center'>Update Task</div>

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
            <textarea
              type="time"
              rows={3}
              cols={20}
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
            value='Update Task'
            className='border  border-black w-[100px] mx-auto'
          />
        </form>
      </div>
    </div>
  );
}
