"use client";
import { forwardRef, useRef } from "react"
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa"
import { SiExpress, SiMongodb, SiPostgresql, SiDrizzle } from "react-icons/si"

import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/components/magicui/animated-beam"

const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}>
      {children}
    </div>
  );
})

Circle.displayName = "Circle"

export default function AnimatedBeamDemo() {
  const containerRef = useRef(null)
  const centerRef = useRef(null)
  const reactRef = useRef(null)
  const nodeRef = useRef(null)
  const expressRef = useRef(null)
  const mongoRef = useRef(null)
  const postgresRef = useRef(null)
  const awsRef = useRef(null)
  const drizzleRef = useRef(null)

  return (
    <div
      className="relative flex h-[400px] w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}>
      <div
        className="flex size-full max-h-[300px] max-w-2xl flex-col items-center justify-center gap-8">
        {/* Top row */}
        <div className="flex flex-row items-center justify-center gap-16">
          <Circle ref={reactRef} className="bg-black">
            <FaReact className="text-[#61DAFB] text-xl" />
          </Circle>
          <Circle ref={nodeRef}className="bg-black" >
            <FaNodeJs className="text-[#68BC71] text-xl" />
          </Circle>
          <Circle ref={expressRef} className="bg-black">
            <SiExpress className="text-green-600 text-xl" />
          </Circle>
        </div>

        {/* Middle row with center picture */}
        <div className="flex flex-row items-center justify-center gap-16">
          <Circle ref={mongoRef} className="bg-black">
            <SiMongodb className="text-[#4DB33D] text-xl" />
          </Circle>

          <Circle ref={centerRef} className="size-20 p-1">
            <img
              src="/profile.png"
              alt="Your Profile"
              className="size-full rounded-full object-cover" />
          </Circle>

          <Circle ref={postgresRef} className="bg-black">
            <SiPostgresql className="text-[#336791] text-xl" />
          </Circle>
        </div>

        {/* Bottom row */}
        <div className="flex flex-row items-center justify-center gap-16">
          <Circle ref={awsRef} className="bg-black">
            <FaAws className="text-[#FF9900] text-xl" />
          </Circle>
          <Circle ref={drizzleRef}className="bg-black">
            <SiDrizzle className="text-[#C5F74F] text-xl" />
          </Circle>
        </div>
      </div>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={reactRef}
        toRef={centerRef}
        curvature={-30} />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={nodeRef}
        toRef={centerRef}
        curvature={0} />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={expressRef}
        toRef={centerRef}
        curvature={30} />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={mongoRef}
        toRef={centerRef}
        curvature={0} />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={postgresRef}
        toRef={centerRef}
        curvature={0} />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={awsRef}
        toRef={centerRef}
        curvature={-30} />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={drizzleRef}
        toRef={centerRef}
        curvature={30} />
    </div>
  );
}
