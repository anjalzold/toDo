import React from 'react'
import EditForm from '../component/editForm'

const getData = async (id) => {
  const response = await fetch(`http://localhost:3000/api/task/${id}`,{
    cache: 'no-store',
  })
    // const data = await response.json()
    // await new Promise((resolve) => setTimeout(resolve, 2000))
    return response.json();
}

export default async function page({params}) {
  const { id } = params;
  const {res} =await getData(id);
  console.log(res.title); 

  // console.log(res);

  return (
    <EditForm res = {res} />
  )
}
