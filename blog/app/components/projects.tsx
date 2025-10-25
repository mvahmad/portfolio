export const metadata = {
  title: 'Ahmad Movahedi Projects',
  description: 'Read my Projects List.',
}

export default function Projects({id}: {id: string}) {
  return (
    <section id={id}>
      <h1 className="font-semibold text-sky-600 text-2xl mb-8 tracking-tighter">My Projects</h1>
      <p className="mb-4 text-[#003049]">
        Here are some of the projects I've worked on, showcasing my skills in web development and design.
      </p>
      <div className="my-8">
        {/* Project list can be added here */}
        
      </div>
    </section>
  )
}
