"use client";
import {useState,useEffect } from "react";
import { useTheme } from 'next-themes';
import clsx from 'clsx';
import Link from "next/link";
const skils  = [
  {"title":"Next.js","style" :{"width": "45%"}},
  {"title":"React.js","style" :{"width": "65%"}},
  {"title":"Java Script","style" :{"width": "75%"}},
  {"title":"Type Script","style" :{"width": "60%"}},
  {"title":"Node.js","style" :{"width": "20%"}},
  {"title":"Nest.js","style" :{"width": "20%"}},
]
// Resume component
export default function Resume({id}: {id: string}) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) {
     return (
      <section id={id} className="py-12" />
    );
  }

  return (
   <section id={id} className="py-12">
          <h2 className={clsx("text-xl font-bold  mb-6",theme === "dark" ? "text-sky-300":"text-sky-600")}>My Resume</h2>
          
          <div className="flex flex-col md:flex-row  items-start gap-6">
            <div className={clsx("rounded-2xl border p-6 shadow-sm w-full md:w-sm ",
              theme === "dark" ? "bg-slate-800 border-slate-700 text-slate-200" : "bg-white border-slate-200 text-slate-700"
            )}>
              <h3 className="font-semibold">Connect</h3>
              <ul className={clsx("mt-4 space-y-3",
                theme === "dark" ? "text-slate-300" : "text-slate-700"
              )}>
                {/*  */}
                <li>
                  <a 
                   target="_blank" href="https://www.linkedin.com/in/ahmad-movahedi-31b986265/" className="inline-flex items-center gap-2 underline">Linkedin</a>
                </li>
                <li>
                  <a  target="_blank" href="https://github.com/mvahmad" className="inline-flex items-center gap-2 underline">GitHub</a>
                </li>
                 <li>
                  <a href="mailto:kevetsahedrakh@hotmail.com" className="inline-flex items-center gap-2 underline">Email</a>
                </li>
                <li>
                  <Link
                    href="/Ahmad-Movahedi.pdf" 
                    target="_blank"
                    className="inline-flex items-center gap-2 underline"
                   >
                    Download the Resume
                  </Link>
                </li>
              </ul>
            </div>

            <div className={clsx("flex-1",theme==="dark"?"text-slate-300": "text-slate-600")}>
              <h4 className="font-medium">Summary</h4>
              <p className="mt-2">Frontend developer focused on building accessible, high-performance web apps. Skilled in React, Next.js, and modern CSS.
              </p>

              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {/*  */}
                 {skils.map((item,index)=>{
                  return(
                     <div key={index} className="w-full bg-gray-200 rounded-full h-[2rem] dark:bg-gray-700">
                        <div className="bg-blue-400  px-2 py-1 text-white text-semibold h-[2rem] rounded-full" style={item.style} >
                          {item.title}
                        </div>
                     </div>
                  )
                 })

                 }
                
              </div>
            </div>
          </div>
        </section>
  )
}
