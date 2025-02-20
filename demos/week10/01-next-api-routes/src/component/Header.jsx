//If we have a client component, we can fetch our API route for data
//This way, we avoid prop drilling and give more independence to our component

"use client";
import { motion } from "motion/react";

import { useEffect, useState } from "react";

export default function Header() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const result = await fetch("http://localhost:3000/api/users");
      const users = await result.json();
      setData(users);
    }
    getData();
  }, []);

  return (
    <>
      <h1>Header</h1>
      {<motion.p animate={{ rotate: 360 }}>{data[0]?.firstName}</motion.p>}
    </>
  );
}
