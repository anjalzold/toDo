import React from 'react';
import FilterData from './components/FilterData';





const getData = async () => {
  const response = await fetch('http://localhost:3000/api/task',{
    cache: 'no-store',
  })
    // const data = await response.json()
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // console.log(data);
    const data = await response.json();
    return data;
}



export default async function Main() {
    const {res} = await getData();
    // const due = daysLeft();
   return (
    // <div className="">
    //   {userId}
    // </div>
   <FilterData res={res}/>
   );
}
