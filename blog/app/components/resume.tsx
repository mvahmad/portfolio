export const metadata = {
  title: 'Ahmad Movahedi Resume',
  description: 'Read my Resume.',
}

export default function Resume({id}: {id: string}) {
  return (
    <section id={id}>
      <h1 className="font-semibold text-[#003049] text-2xl mb-8 tracking-tighter">My Resume</h1>
    </section>
  )
}
