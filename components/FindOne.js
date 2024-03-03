import React from 'react'


const getData = async id => {
  const response = await fetch(`http://localhost:3000/api/task/${id}`, {
    cache: "no-store",
  });
  // const data = await response.json()
  // await new Promise((resolve) => setTimeout(resolve, 2000))
  return response.json();
};

export default function FindOne({}) {
  return (
    <div>FindOne</div>
  )
}
