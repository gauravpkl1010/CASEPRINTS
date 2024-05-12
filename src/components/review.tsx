"use client";
import { HTMLAttributes, useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "./maxWidthWrapper";
import Image from "next/image";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import Phone from "./phone";
const Phones = [
  "/testimonials/1.jpg",
  "/testimonials/2.jpg",
  "/testimonials/3.jpg",
  "/testimonials/4.jpg",
  "/testimonials/5.jpg",
  "/testimonials/6.jpg",
];
export function Reviews() {
  return (
    <MaxWidthWrapper>
      <Image
        src={"/what-people-are-buying.png"}
        className="absolute select-none hidden xl:block -left-32 top-1/3"
        alt=""
        width={100}
        height={100}
      />
      <ReviewGrid />
    </MaxWidthWrapper>
  );
}
function split<T>(array: Array<T>, num: number): Array<Array<T>> {
  const result: Array<Array<T>> = new Array(num).fill(null).map(() => []);
  array.forEach((item, index) => {
    result[index % num].push(item);
  });
  return result;
}
function ReviewColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: {
  reviews: string[];
  className?: string;
  reviewClassName?: (reviewIndex: number) => string;
  msPerPixel?: number;
}) {
  const colRef = useRef<HTMLDivElement | null>(null);
  const [colHeight, setColHeight] = useState(0);
  const duration = `${colHeight * msPerPixel}ms`;
  useEffect(() => {
    if (!colRef.current) return;
    const resizeObserver = new window.ResizeObserver(() => {
      setColHeight(colRef.current?.offsetHeight ?? 0);
    });
    resizeObserver.observe(colRef.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  return (
    <div
      ref={colRef}
      className={cn("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((imgSrc, reviewIndex) => (
        <Review
          key={reviewIndex}
          className={reviewClassName?.(reviewIndex % reviewClassName.length)}
          imgSrc={imgSrc}
        />
      ))}
    </div>
  );
}
interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
}
function Review({ imgSrc, className, ...props }: ReviewProps) {
  const POSSIBLE_ANIMATION_DELAY = [
    "0s",
    "0.1s",
    "0.2s",
    "0.3s",
    "0.4s",
    "0.5s",
  ];
  const animationDelay =
    POSSIBLE_ANIMATION_DELAY[
      Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAY.length)
    ];
  return (
    <div
      className={cn(
        "animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5",
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <Phone imgSrc={imgSrc} />
    </div>
  );
}
function ReviewGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });
  const cols = split(Phones, 3);
  const col1 = cols[0];
  const col2 = cols[1];
  const col3 = split(cols[2], 2);
  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView ? (
        <>
          <ReviewColumn
            reviews={[...col1, ...col3.flat(), ...col2]}
            reviewClassName={(reviewIndex) =>
              cn({
                "md:hidden": reviewIndex >= col1.length + col3[0].length,
                "lg:hidden": reviewIndex >= col1.length,
              })
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...col2, ...col3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= col2.length ? "lg:hidden" : ""
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={[...col3.flat()]}
            className="hidden md:block"
            msPerPixel={10}
          />
        </>
      ) : null}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-100" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100" />
    </div>
  );
}
