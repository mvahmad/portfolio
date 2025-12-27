"use client"
// 
import About from "./about";
import Feedbacks from "./feedbacks";
import Footer from "./footer";
import Projects from "./projects";
import Resume from "./resume";
import IntroSection from "./intro";
import { Header } from "./nav";
export default function PageClient() {
  return (
    <>
      
  <div className="min-h-screen  w-full bg-[#f8fafc] relative">
    {/* Top Fade Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
      `,
      backgroundSize: "20px 30px",
      WebkitMaskImage:
        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
      maskImage:
        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
    }}
  />
          <main className="max-w-6xl relative z-10 mx-auto px-6 py-5 dark text-foreground "> 
            <Header />
            <IntroSection />
            <About id={"about"} />
            <Projects id={"projects"} />
            <Feedbacks  id={"feedbacks"} />
            <Resume id={"resume"} />
            <Footer/>
          </main>
      </div>
    </>
  )
}
