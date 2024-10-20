import About from './Components/About'
import Contact from './Components/Contact'
import Hero from './Components/Hero'
import Marquee from './Components/Marquee'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Work from './Components/Work'

const App = () => {
  return (
    <main className='font-light text-white antialiased selection:bg-lime-300 selection:text-black'>
      <Navbar/>
      <Hero/>
      <Marquee/>
      <Projects/>
      <About/>
      <Work/>
      <Contact/>
    </main>
  )
}

export default App
