import Link from "next/link";
import React from "react";

const Homepage = () => {
  return (
    <div cla>
      <h1 className="text-5xl mb-8 font-bold">Next.Js App</h1>
      <Link href="/client" className="btn btn-success-content">C'est parti !!</Link>
    </div>
  )
};
export default Homepage;
