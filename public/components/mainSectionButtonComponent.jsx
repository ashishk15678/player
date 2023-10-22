"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Button = ({ Name, link }) => {
  let router = useRouter();
  const reroute = () => {
    router.push(link);
  };
  return (
    <div>
      <button type="button" className="ButtonComp" onClick={reroute}>
        {Name}
      </button>
    </div>
  );
};

export default Button;
