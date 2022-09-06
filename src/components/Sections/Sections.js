import * as React from "react"
import About from "./About/About"
import Contact from "./Contact/Contact"
import Introduction from "./Introduction/Introduction"
import Projects from "./Projects/Projects"

const Sections = () => {
    return (
        <>
            <Introduction/>
            <About/>
            <Projects/>
            <Contact/>
        </>
    )
}

export default Sections