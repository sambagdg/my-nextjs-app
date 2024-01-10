"use client"
import { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1 className="text-7xl font-bold mb-4">{count}</h1>
      <button className="btn btn-primary btn-md text-white" onClick={()=> setCount(count + 1 )}>augmenter</button>
    </div>
  );
};
export default ClientPage;
