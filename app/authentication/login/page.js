"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const formSchame = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export default function page() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchame),
  });

  const onSubmit = async data => {
    console.log(data);
    try {
      const response = await fetch("http://localhost:3000/api/userAuth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( data),
      });
      if (response.ok) {
        
        // router.push("/main");
        router.refresh();

        console.log("Success");
      }
      const res = await response.json();
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-4  border border-black w-[500px] p-4 '
      >
        <div className='flex gap-2 justify-between mr-[100px]'>
          <label htmlFor=''>Email</label>
          <input
            type='email'
            name=''
            id='email'
            {...register("email")}
            className='border  border-black'
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className='flex gap-2 justify-between mr-[100px]'>
          <label htmlFor=''>Password</label>
          <input
            type='password'
            name=''
            id='password'
            {...register("password")}
            className='border  border-black'
          />
          {errors.password && <p>{errors.password.message}</p>}
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
