"use client";
// import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useMemo, useRef, useState } from "react";

export type Review = {
  id: string | number;
  author: string;
  avatar?: string;
  date: string | Date;
  text: string;
  verified?: boolean;
};

const demo: Review[] = [
    { id: 1, author: "Mohammad Sami Askari", date: "2025-08-01", text: "“The site feels modern and well-optimized.”" },
    { id: 2, author: "bil gits", date: "2025-07-21", text: "“Some buttons don’t have hover effects, which could make interactions clearer.”" },
    { id: 3, author: "Amir Hossein Masihi",  date: "2025-07-10", text: "“The mobile responsiveness works well — nice use of CSS modules/Tailwind.”" },
    { id: 4, author: "Omid Shanbepour", date: "2025-07-10", text: "“Consider setting up proper caching and incremental static regeneration for scalability.”" },
];

type Props = {
  autoplayDelay?: number; // ms, set 0 to disable
  maxWidthClass?: string;
  items?:Review[]
  id:string
};


export default function Feedbacks({
  autoplayDelay = 3500,
  maxWidthClass = "max-w-5xl",
  items = demo,
  id
}: Props){
       const ids = useMemo(() => items.map((s) => String(s.id)), [items]);

  // Embla options (RTL aware, center-active, infinite loop)
  const options: EmblaOptionsType = useMemo(
    () => ({ loop: true, align: "center" }),
    []
  );

  // Autoplay plugin instance (kept stable across renders)
  const autoplay = useRef(
    Autoplay({
      delay: autoplayDelay,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    options,
    autoplayDelay > 0 ? [autoplay.current] : []
  );

  const [selected, setSelected] = useState(0);
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const fmt = (d: string | Date) =>
    new Date(d).toLocaleDateString("en-IR" ,{
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <section id={id} className="relative w-full py-12">
      <h1 className="text-xl font-bold text-sky-600 mb-6">Feedbacks</h1>
      <div className={`relative mx-auto ${maxWidthClass} px-4 md:px-8`}>

        <div className="relative">
          {/* Prev */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="قبلی"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 grid h-10 w-10 place-items-center rounded-full border border-blue-300 bg-white/90 text-blue-700 shadow hover:bg-white"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              <path
                d="M15.5 19l-7-7 7-7"
                className="fill-none stroke-current"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Viewport */}
          <div className="overflow-hidden pt-9 pb-2" ref={emblaRef}>
            {/* Track */}
            <div className="flex -ml-4">
              {items.map((r) => {
                // 
                return (
                  <div
                    key={r.id}
                    className="pl-4 flex-[0_0_95%] sm:flex-[0_0_70%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                  >
                    <div
                      className={`relative w-full h-[14rem] md:h-[16rem] rounded-3xl border 
                        border-blue-100 bg-white p-5 pt-12 shadow-sm shadow-blue-100/60 transition-all duration-500 `}
                    >
                      {/* avatar on top edge, centered */}
                      {/* <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                        <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-blue-200">
                          <Image
                            src={r.avatar}
                            alt={r.author}
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        </div>
                      </div> */}

                      {/* author + verified */}
                      <div className="flex flex-col items-center">
                        <div className="flex items-center gap-1">
                          <h3 className="font-bold text-slate-900">{r.author}</h3>
                        </div>
                        <time
                          className="mt-1 text-xs text-slate-500"
                          dateTime={new Date(r.date).toISOString()}
                        >
                          {fmt(r.date)}
                        </time>
                      </div>

                      <blockquote className="mt-4 text-center text-slate-700 leading-7 line-clamp-6">
                        {r.text}
                      </blockquote>

                     
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={() => emblaApi?.scrollNext()}
            aria-label="بعدی"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 grid h-10 w-10 place-items-center rounded-full border border-blue-300 bg-white/90 text-blue-700 shadow hover:bg-white"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              <path
                d="M8.5 5l7 7-7 7"
                className="fill-none stroke-current"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

