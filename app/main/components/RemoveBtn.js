"use client"
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'
import React from 'react'

export default async function RemoveBtn({id}) {
    const router = useRouter();

  return (
    <div>
      <button
        onClick={() => handleClick(router, id)}
        className=' border-red-800 p-2 rounded-lg border-2'
      >
        Delete
      </button>
    </div>
  );
}

const handleClick = async (router,id) => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/task?id=${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
        router.refresh()
        }
        const data = await response.json();
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
