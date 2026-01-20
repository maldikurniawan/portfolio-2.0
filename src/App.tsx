import About from "./components/pages/about"
import Contact from "./components/pages/Contact"
import Edu from "./components/pages/edu"
import Exp from "./components/pages/exp"
import Project from "./components/pages/Project"
import Skill from "./components/pages/Skill"

const App = () => {
  return (
    <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
      <About />
      <Exp />
      <Edu />
      <Skill />
      <Project />
      <Contact />
    </div>
  )
}

export default App