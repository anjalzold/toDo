"use client"
import { useState } from "react";
import { addDays, differenceInDays } from "date-fns";


const getData = async () => {
     const [tasks, setTasks] = useState([]);
     const [filtered, setFiltered] = useState([]);


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

     const fetchData = async () => {
       const response = await fetch("http://localhost:3000/api/task", {
         cache: "no-store",
       });
       const data = await response.json();
       setTasks(data);
       setFiltered(data); // Initialize filtered with the fetched data
     };
      const doFilter = () => {
        const filteredTasks = tasks.filter(task => daysLeft(task.dueDate) < 5);
        const sortedTasks = filteredTasks.sort(
          (a, b) => daysLeft(a.dueDate) - daysLeft(b.dueDate)
        );
        setFiltered(sortedTasks);
      };

      return { tasks, filtered, fetchData, doFilter };

};

export default getData;
