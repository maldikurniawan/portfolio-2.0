import About from "../pages/About"
import Contact from "../pages/Contact"
import Edu from "../pages/Edu"
import Exp from "../pages/Exp"
import Hero from "../pages/Hero"
import Project from "../pages/Project"
import Skill from "../pages/Skill"

const Layout = () => {
    return (
        <div className="min-h-dvh flex flex-col gap-14 relative">
            <Hero />
            <About />
            <Exp />
            <Edu />
            <Skill />
            <Project />
            <Contact />
        </div>
    )
}

export default Layout