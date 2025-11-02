"use client"
import dynamic from "next/dynamic";
import About from "./about";
import Feedbacks from "./feedbacks";
import Footer from "./footer";
import Projects from "./projects";
import Resume from "./resume";
const Navbar = dynamic(() => import("../components/nav").then(mod => mod.Navbar), { ssr: false });
export default function PageClient() {
  return (
    <>
       <Navbar />
            <main className="max-w-6xl mx-auto px-6 py-5 dark text-foreground bg-background">
            <About id={"about"} />
            <Projects id={"projects"} />
            <Feedbacks  id={"feedbacks"} />
            <Resume id={"resume"} />
            </main>
        <Footer/>
    </>
  )
}
