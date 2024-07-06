'use client';

import { Fullscreen } from "lucide-react";
import CountUp from "react-countup";


export default function AnimatedCounter({amount}:{amount:number}) {
  return (
    <div className="w-full">
      <CountUp
      prefix="₹"
      end={amount}></CountUp>
    </div>
  )
}
