import Image from 'next/image'
import NavBar from './navBar/NavBar'
import HomePage from './homeSection/Home'
import About from './aboutMe/About'
import Experience from './experience/Experience'

export default function Home() {
  return (
    <main>
      <NavBar />
      <HomePage />
      <About />
      <Experience />
      <h1>Hello World</h1>
    </main>
  )
}
