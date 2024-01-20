import Image from 'next/image'
import NavBar from './navBar/NavBar'
import HomePage from './homeSection/Home'
import About from './aboutMe/About'
import Experience from './experience/Experience'
import Education from './education/Education'
import Projects from './projects/Projects'
import ContactMe from './contact/ContactMe'

export default function Home() {
  return (
    <main>
      <NavBar />
      <HomePage />
      <About />
      <Experience />
      <Education />
      <Projects />
      <ContactMe />
    </main>
  )
}
