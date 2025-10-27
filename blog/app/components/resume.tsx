const skils  = [
  {"title":"Next.js","style" :{"width": "45%"}},
  {"title":"React.js","style" :{"width": "65%"}},
  {"title":"Java Script","style" :{"width": "75%"}},
  {"title":"Type Script","style" :{"width": "60%"}},
  {"title":"Node.js","style" :{"width": "20%"}},
  {"title":"Nest.js","style" :{"width": "20%"}},
]
// blog/app/components/resume.tsx
export default function Resume({id}: {id: string}) {
  return (
   <section id={id} className="py-12">
          <h2 className="text-xl font-bold text-sky-600 mb-6">My Resume</h2>
          
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="rounded-2xl border border-slate-100 p-6 shadow-sm bg-white max-w-xl">
              <h3 className="font-semibold">Connect</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li>
                  <a  target="_blank"  href="https://github.com/mvahmad" className="inline-flex items-center gap-2 underline">GitHub</a>
                </li>
                <li>
                  <a 
                   target="_blank" href="https://www.linkedin.com/in/ahmad-movahedi-31b986265/" className="inline-flex items-center gap-2 underline">Linkedin</a>
                </li>
                <li>
                  <a href="#" className="inline-flex items-center gap-2 underline">Download Resume</a>
                </li>
              </ul>
            </div>

            <div className="flex-1 text-slate-600">
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
