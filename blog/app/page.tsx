import About from "./components/about";
import Feedbacks from "./components/feedbacks";
import Projects from "./components/projects";
import Resume from "./components/resume";

export default function Page() {
  return (
    <>
      <About id={"about"} />
      <Projects id={"projects"} />
      <Feedbacks id={"feedbacks"} />
      <Resume id={"resume"} />
    </>
  )
}
